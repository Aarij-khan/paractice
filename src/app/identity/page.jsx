"use client"
import React, { useState } from "react";
import { db } from "../utils/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { handleSendEmail } from "./actions/actions";
const page = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    cnic: "",
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.cnic) {
      alert("CNIC is required to save data!");
      return;
    }
    var psw = Date.now().toString(36);
    var x = localStorage.getItem("userData")
    if (x) {
      var parsedData = JSON.parse(x);
    }
    await setDoc(doc(db, "auth", formData.cnic), {...formData,psw,parsedData});
    alert("Data saved successfully!");
    await handleSendEmail(formData.email,psw);
    setFormData({
      cnic: "",
      name: "",
      email: "",
    });
    router.push("/");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
          Loan Application Form
        </h2>
        <form onSubmit={handleSubmit}>
          {/* CNIC Input */}
          <div className="mb-4">
            <label
              htmlFor="cnic"
              className="block text-sm font-medium text-gray-700"
            >
              CNIC (without dashes)
            </label>
            <input
              type="text"
              name="cnic"
              id="cnic"
              value={formData.cnic}
              onChange={handleChange}
              maxLength={13}
              pattern="\d{13}"
              placeholder="Enter CNIC"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm"
              required
            />
          </div>

          {/* Phone Input */}
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              maxLength={11}
              placeholder="Enter your Name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              backgroundImage: 'linear-gradient(to right top, #008000, #2e8b57, #3cb371, #66cdaa, #8fbc8f)',
            }}
            
            className="w-full  text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;

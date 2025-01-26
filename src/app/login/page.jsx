"use client";
import React, { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../utils/firebase";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [cnic, setCnic] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    localStorage.setItem("NIC",cnic)
    const docRef = doc(db, "auth", cnic);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      if (docSnap.data().psw == password && docSnap.data().cnic == cnic) {
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/UserPage");

        router;
      } else {
        Swal.fire({
          icon: "error",
          title: "Incorrect Password",
          showConfirmButton: false,
        });
      }
    } else {
      console.log("No such document!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Login Form</h2>

        <div className="mb-4">
          <label
            htmlFor="cnic"
            className="block text-sm font-medium text-gray-700"
          >
            CNIC: without dash
          </label>
          <input
            type="text"
            id="cnic"
            value={cnic}
            onChange={(e) => setCnic(e.target.value)}
            placeholder="Enter CNIC"
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default page;

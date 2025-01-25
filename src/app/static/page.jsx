"use client";
import { useRouter } from "next/navigation";
import React, { Fragment, useEffect, useState } from "react";
import Swal from "sweetalert2";

function ShadiLoan() {
  const router = useRouter();
  const [data, setData] = useState([]);
  console.log("TCL: data", data);
  const [formData, setFormData] = useState({
    subCategory: "",
    loanPeriod: "",
    initialDeposit: "",
    amount: "",
  });
  const { subCategory, loanPeriod, initialDeposit, amount } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!subCategory || !loanPeriod || !initialDeposit || !amount) {
      alert("Please fill all the inputs");
      return;
    } else {
      var totalAmount = parseInt(amount) - parseInt(initialDeposit);
      var monthlyInstallment = totalAmount / parseInt(loanPeriod);
      Swal.fire({
        title:
          "Your installment amount is " + Math.ceil(monthlyInstallment),
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Proceed",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Succussfully submitted ",
            text: "Our team will contact you",
            icon: "success",
          });
          router.push("/identity");
          localStorage.setItem("userData", JSON.stringify(formData));
        }
      });
    }
  };

  useEffect(() => {
    const storedValue = localStorage.getItem("purpose");
    if (storedValue) {
      const parsedValue = JSON.parse(storedValue);
      setData([parsedValue]);
    }
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center text-white px-4"
      style={{
        backgroundImage: "url('https://www.example.com/your-background.jpg')",
      }}
    >
      <div className="bg-black bg-opacity-70 rounded-2xl p-8 w-full max-w-2xl mt-10">
        <h1 className="text-4xl font-bold text-center mb-6">
          Welcome to Shadi Loan
        </h1>
        <h2 className="text-xl text-center mb-8">
          Please fill all the inputs to approve your loan
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Subcategory Dropdown */}
          <div>
            <label htmlFor="subCategory" className="block font-semibold mb-2">
              Select Subcategory:
            </label>
            <select
              id="subCategory"
              name="subCategory"
              value={formData.subCategory}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 text-black"
              required
            >
              <option value="">Select</option>
              {data &&
                data.map((item, index) => (
                  <Fragment key={index}>
                    <option key={`${index}-catagory1`} value={item.catagory1}>
                      {item.catagory1}
                    </option>
                    <option key={`${index}-catagory2`} value={item.catagory2}>
                      {item.catagory2}
                    </option>
                    <option key={`${index}-catagory3`} value={item.catagory3}>
                      {item.catagory3}
                    </option>
                  </Fragment>
                ))}
            </select>
          </div>

          {/* Loan Period */}
          <div>
            <label htmlFor="loanPeriod" className="block font-semibold mb-2">
              Loan Period (in months):
            </label>
            <input
              type="number"
              id="loanPeriod"
              name="loanPeriod"
              value={formData.loanPeriod}
              onChange={handleInputChange}
              placeholder="Enter loan period in term of months"
              className="w-full px-4 py-2 rounded-md border border-gray-300 text-black"
              required
            />
          </div>

          {/* Initial Deposit */}
          <div>
            <label
              htmlFor="initialDeposit"
              className="block font-semibold mb-2"
            >
              Initial Deposit:
            </label>
            <input
              type="number"
              id="initialDeposit"
              name="initialDeposit"
              value={formData.initialDeposit}
              onChange={handleInputChange}
              placeholder="Enter initial deposit"
              className="w-full px-4 py-2 rounded-md border border-gray-300 text-black"
              required
            />
          </div>

          {/* Loan Amount */}
          <div>
            <label htmlFor="amount" className="block font-semibold mb-2">
              Loan Amount:
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
              placeholder="Enter loan amount"
              className="w-full px-4 py-2 rounded-md border border-gray-300 text-black"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 text-lg font-semibold bg-green-600 hover:bg-green-700 rounded-md text-white transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ShadiLoan;

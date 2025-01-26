"use client"
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/utils/firebase";

function page() {
  const [data, setData] = useState([]);

  async function fetchData() {
    const querySnapshot = await getDocs(collection(db, "auth"));
    const fetchedData = [];
    querySnapshot.forEach((doc) => {
      fetchedData.push({ ...doc.data(), id: doc.id });
    });
    setData(fetchedData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex justify-center w-full">
    <div className="p-4 flex flex-col gap-4 w-[70%]">
      {data.map((item, idx) => (
        <div
          key={idx}
          className="bg-white shadow-lg rounded-lg p-6 border border-gray-200"
        >
          <p className="text-lg font-bold mb-2">User Information</p>
          <div className="text-sm">
            <p><span className="font-semibold">CNIC:</span> {item.cnic}</p>
            <p><span className="font-semibold">Email:</span> {item.email}</p>
            <p><span className="font-semibold">Name:</span> {item.name}</p>
            <p><span className="font-semibold">Password:</span> {item.psw}</p>
              <p><span className="font-semibold">Amount:</span> {item.parsedData?.amount || "N/A"}</p>
              <p><span className="font-semibold">Initial Deposit:</span> {item.parsedData?.initialDeposit || "N/A"}</p>
              <p><span className="font-semibold">Loan Period:</span> {item.parsedData?.loanPeriod || "N/A"}</p>
              <p><span className="font-semibold">Sub Category:</span> {item.parsedData?.subCategory || "N/A"}</p>
          </div>
        </div>
      ))}
    </div>

    </div>
  );
}
export default page
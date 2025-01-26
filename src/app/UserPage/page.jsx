"use client";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/utils/firebase";

function Page() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); 

  async function fetchData() {
    setLoading(true); 
    const querySnapshot = await getDocs(collection(db, "auth"));
    const fetchedData = [];
    querySnapshot.forEach((doc) => {
      fetchedData.push({ ...doc.data(), id: doc.id });
    });
    setData(fetchedData);
    setLoading(false); 
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center w-full">
      <div className="p-4 flex flex-col gap-4 w-[70%]">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-lg p-6 border border-gray-200"
          >
            <div className="flex justify-end mr-2">
              <div className={` p-2 rounded-3xl  ${item.parsedData?.status == false ? "bg-red-500" : "bg-green-500"}`}>
               {item.parsedData?.status == false ? "Pending" : "Approved"}
              </div>
            </div>
            <p className="text-lg font-bold mb-2">User Information</p>
            <div className="text-sm flex flex-col gap-2">
              <p>
                <span className="font-semibold uppercase">CNIC:</span>{" "}
                {item.cnic}
              </p>
              <p>
                <span className="font-semibold uppercase">Email:</span>{" "}
                {item.email}
              </p>
              <p>
                <span className="font-semibold uppercase">Name:</span>{" "}
                {item.name}
              </p>
              <p>
                <span className="font-semibold uppercase">Amount:</span>{" "}
                {item.parsedData?.amount || "N/A"}
              </p>
              <p>
                <span className="font-semibold uppercase">
                  Initial Deposit:
                </span>{" "}
                {item.parsedData?.initialDeposit || "N/A"}
              </p>
              <p>
                <span className="font-semibold uppercase">Loan Period:</span>{" "}
                {item.parsedData?.loanPeriod || "N/A"}
              </p>
              <p>
                <span className="font-semibold uppercase">Sub Category:</span>{" "}
                {item.parsedData?.subCategory || "N/A"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Page;

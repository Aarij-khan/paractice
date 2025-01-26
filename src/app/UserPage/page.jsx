"use client";
import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/app/utils/firebase";
import { useRouter } from "next/router";

function Page() {
    const router = useRouter()
  const [data, setData] = useState([]);
  const [cnic, setCnic] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch data from Firestore with a `where` clause
  async function fetchData(nic) {
    setLoading(true); // Show loading indicator

    try {
      // Query Firestore with the provided CNIC
      const q = query(collection(db, "auth"), where("cnic", "==", nic));
      const querySnapshot = await getDocs(q);

      // Process and set data
      const fetchedData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(fetchedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Hide loading indicator
    }
  }

  useEffect(() => {
    // Retrieve CNIC from localStorage and fetch data
    const nic = localStorage.getItem("NIC");
    if (nic) {
      setCnic(nic);
      fetchData(nic);
    }else{
      router.push("/login")
    }
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
            {/* Status Badge */}
            <div className="flex justify-end">
              <div
                className={`p-2 rounded-3xl ${
                  item.parsedData?.status === false
                    ? "bg-red-500 text-white"
                    : "bg-green-500 text-white"
                }`}
              >
                {item.parsedData?.status === false ? "Pending" : "Approved"}
              </div>
            </div>

            {/* User Information */}
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

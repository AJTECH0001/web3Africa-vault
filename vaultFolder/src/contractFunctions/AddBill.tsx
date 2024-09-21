import React, { useState } from "react";
import { useSimulateContract, useWriteContract } from "wagmi";
import { vaultAbi } from "../vaultAbi";
import { parseEther } from "viem";

const AddBill = () => {
  const [formData, setFormData] = useState({
    amount: "",
    address: "",
    lockDuration: "",
  });

  console.log(formData);

  const { data, error } = useSimulateContract({
    address: "0xd20d1b5f6864eda6c1ec91b78d3a25428b45943c",
    abi: vaultAbi,
    args: [
      formData.address,
      parseEther(formData.amount),
      formData.lockDuration,
    ],
    functionName: "addBill",
  });

  console.log("Simulate Contract data:", data);
  console.log("Simulate Contract error:", error);

  const { writeContractAsync } = useWriteContract();

  const handleAddBill = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      if (data && data.request) {
        const response = await writeContractAsync(data.request);
        console.log("Add Bill response:", response);
      } else {
        console.error("Invalid contract data:", data);
      }
    } catch (error) {
      console.error("Error adding bill:", error);
    }
  };

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Add Bill</h2>
        <form onSubmit={handleAddBill} noValidate>
          {/* Address */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Address</label>
            <input
              type="text"
              name="address"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring border-gray-300"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="0x123..."
            />
          </div>

          {/* Amount */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Amount (ARB)</label>
            <input
              type="text"
              name="amount"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring border-gray-300"
              value={formData.amount}
              onChange={handleInputChange}
              placeholder="0.1"
            />
          </div>

          {/* Lock Duration */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Lock Duration (seconds)</label>
            <input
              type="text"
              name="lockDuration"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring border-gray-300"
              value={formData.lockDuration}
              onChange={handleInputChange}
              placeholder="3600"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Confirm Transaction
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBill;

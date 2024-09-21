import React, { ChangeEvent, useState } from "react";
import { useSimulateContract, useWriteContract } from "wagmi";
import { vaultAbi } from "../vaultAbi";
import { parseEther } from "viem";

const BillPayment = () => {
  const [formData, setFormData] = useState({
    billId: "",
  });

  console.log(formData);

  const { data, error } = useSimulateContract({
    address: "0xd20d1b5f6864eda6c1ec91b78d3a25428b45943c",
    abi: vaultAbi,
    args: [formData.billId],
    functionName: "payBill",
  });

  console.log("Simulate Contract data:", data);
  console.log("Simulate Contract error:", error);

  const { writeContractAsync } = useWriteContract();

  const handleAddBill = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent form submission from reloading the page
    try {
      if (data && data.request) {
        const response = await writeContractAsync(data.request);
        console.log("Pay Bill response:", response);
      } else {
        console.error("Invalid contract data:", data);
      }
    } catch (error) {
      console.error("Error paying bill:", error);
    }
  };

  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Pay Bill</h2>
        <form onSubmit={handleAddBill} noValidate>
          {/* Address */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Address
            </label>
            <input
              type="text"
              name="billId"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring border-gray-300"
              value={formData.billId}
              onChange={handleInputChange}
              placeholder="0x123..."
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

export default BillPayment;

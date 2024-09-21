import { vaultAbi } from '../vaultAbi';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useSimulateContract, useWriteContract } from 'wagmi';

const Deposit = () => {
    const [formData, setFormData] = useState({
        deposit: '',
      });
    
      console.log(formData)
    
    
      const { data, error } = useSimulateContract ({
        address: '0x3d1e462b8b6e4A33f27B521b255D967aFCB8b5c2',
        abi: vaultAbi,
        args: [],
        functionName: 'deposit',
    })
    
    
    
    
      const { writeContractAsync } = useWriteContract();
    
      const handleDeposit = async () => {
        try {
          if (data && data.request) {
            const response = await writeContractAsync(data.request);
            console.log('Deposit response:', response);
          } else {
            console.error('Invalid contract data:', data);
          }
        } catch (error) {
          console.error('Error depositing:', error);
        }
      }
    
    
    function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
        throw new Error('Function not implemented.');
    }

    function handleAddBill(event: FormEvent<HTMLFormElement>): void {
        throw new Error('Function not implemented.');
    }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Deposit</h2>
        <form onSubmit={handleAddBill} noValidate>
          {/* Address */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            Amount (ETH)
            </label>
            <input
              type="text"
              name="billId"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring border-gray-300"
              value={formData.deposit}
              onChange={handleInputChange}
              placeholder="0.1"
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

export default Deposit;

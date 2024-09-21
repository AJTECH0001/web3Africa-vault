"use client"

import { useWriteContract } from 'wagmi';
import { vaultAbi } from '../vaultAbi';
import React from 'react';

const contractAddress = '0xd20d1b5f6864eda6c1ec91b78d3a25428b45943c';

export function  RenounceOwnership() {
  const { writeContractAsync } = useWriteContract();

  const handleRenounceOwnership = async () => {
    try {
      const response = await writeContractAsync({
        address: contractAddress,
        abi: vaultAbi,
        functionName: 'renounceOwnership',
        args: [], // No arguments for this function
      });
      console.log('Renounce Ownership response:', response);
    } catch (error) {
      console.error('Error calling renounceOwnership function:', error);
    }
  };

  return (
    <div className="container mx-auto p-5"> 
       <h1 className="text-2xl  text-center font-bold mb-4">RENOUNCE OWNERSHIP</h1>
    <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 focus:outline-none focus:ring focus:border-blue-700"
      onClick={handleRenounceOwnership}
    >
      Renounce Ownership
    </button>
  </div>
  
  );
}

export default RenounceOwnership;
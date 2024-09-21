import React, { useState } from 'react';  
import { useSimulateContract, useWriteContract } from 'wagmi';  
import { vaultAbi } from '../vaultAbi';  

const contractAddress = '0xd20d1b5f6864eda6c1ec91b78d3a25428b45943c';  

export function TransferOwnership() {  
  const [formData, setFormData] = useState({  
    address: '',  
  });  

  const { data, error } = useSimulateContract({  
    address: contractAddress,  
    abi: vaultAbi,  
    args: [formData.address],  
    functionName: 'transferOwnership',  
  });  

  const { writeContractAsync } = useWriteContract();  

  const handleTransferOwnership = async () => {  
    try {  
      if (data && data.request) {  
        const response = await writeContractAsync(data.request);  
        console.log('Deposit response:', response);  
      } else {  
        console.error('Invalid contract data:', data);  
        console.error('Error:', error);  
      }  
    } catch (error) {  
      console.error('Error depositing:', error);  
    }  
  };  

  return (  
    <div className="container mx-auto p-5">  
      <h1 className="text-2xl text-center font-bold mb-4">TRANSFER OWNERSHIP</h1>  
      <input  
        type="text"  
        className="border border-purple-500 rounded-md px-4 py-2 w-full mb-4"  
        placeholder="Address"  
        onChange={(event) => {  
          setFormData((prev) => ({ ...prev, deposit: event.target.value }));  
        }}  
      />  
      <button  
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 focus:outline-none focus:ring focus:border-blue-700"  
        onClick={handleTransferOwnership}  
      >  
        Transfer Ownership  
      </button>  
    </div>  
  );  
}  

export default TransferOwnership;
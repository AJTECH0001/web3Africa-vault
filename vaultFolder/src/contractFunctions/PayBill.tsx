import React, { useState } from 'react';

import { useSimulateContract, useWriteContract } from 'wagmi';

import { vaultAbi } from '../vaultAbi'

const Paybill = () => {

    const [formData, setFormData] = useState({
      billId: '',
     
    });

    console.log(formData)

    const { data, error } = useSimulateContract({
        address: '0xd20d1b5f6864eda6c1ec91b78d3a25428b45943c',
        abi: vaultAbi,
        args: [formData.billId],
        functionName: 'payBill',
      });

      console.log('Simulate Contract data:', data);
  console.log('Simulate Contract error:', error);

  const { writeContractAsync } = useWriteContract();
  
  return (
    <div>
      
    </div>
  )
}

export default Paybill
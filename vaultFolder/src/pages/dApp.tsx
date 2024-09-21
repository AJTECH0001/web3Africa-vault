import AddBill from '@/contractFunctions/AddBill'
import BillPayment from '@/contractFunctions/BillPayment'
import Deposit from '@/contractFunctions/Deposit'
import React from 'react'

function dApp() {
  return (
    <div>
      <div>
      <AddBill/>
      <BillPayment/>
      <Deposit/>
      </div>
    </div>
  );
}

export default dApp

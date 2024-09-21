import AddBill from "@/contractFunctions/AddBill";
import BillPayment from "@/contractFunctions/BillPayment";
import Deposit from "@/contractFunctions/Deposit";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="font-Kodchasan font-normal text-[#242E20] text-[16px] leading-[20.8px] flex flex-col md:flex-row justify-between items-center py-4 px-4 md:px-[50px]">
      <div className="flex justify-between flex-col md:flex-row items-center gap-4 bg-white w-full">
        <Link href="/">
          <div className="font-bold text-[30px] text-blue-700 ">VAULT</div>
        </Link>
        <div className="mr-3">
          <ConnectButton />
        </div>
      </div>
    </header>
  );
};

function dApp() {
  return (
    <div>
      <Header />
      <div>
        <AddBill />
        <BillPayment />
        <Deposit />
      </div>
    </div>
  );
}

export default dApp;

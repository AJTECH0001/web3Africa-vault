import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header = () => {
  return (
    <header className="font-Kodchasan font-normal text-[#242E20] text-[16px] leading-[20.8px] flex flex-col md:flex-row justify-between items-center py-4 px-4 md:px-[50px]">
      <div className="flex justify-between flex-col md:flex-row items-center gap-4 bg-white w-full">
        <div className="font-bold text-[30px] text-blue-700 ">VAULT</div>
        <div className="mr-3">
              <ConnectButton />
            </div>
      </div>
    </header>
  ); 
};

export default function Home() {
  return (
    <div className="font-Kodchasan text-[#242E20] w-full">
      <Header />
      <div className="flex flex-col gap-20 px-8">
        <HeroSection />
        <HowItWorks />
     
      </div>
      <Footer />
      
    </div>
  );
}

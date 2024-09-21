import Link from "next/link";
const HeroSection = () => {
  return (
    <section className="flex items-center justify-center mt-2 lg:mt-6 desktop-bg">
      <div className="max-w-[930px] w-full flex flex-col items-center gap-4 mt-5">
        <h1 className="font-bold text-[20px] leading-[30.4px] lg:text-[48px] lg:leading-[62.4px] text-center">
          A decentralized solution for securely managing bill payments
        </h1>
        <p className="max-w-[514px] w-full font-light text-center text-base lg:text-[28px] lg:text-start lg:leading-[36.4px]">
        Automate Your Payments, Simplify Your Life
        </p>
        <div className="flex flex-col w-full items-center justify-center gap-2 lg:flex-row">
          <Link
            href="/dApp"
            className="lg:max-w-[134px] w-[134px] px-2 bg-[#60a5fa] border
            border-[#3C4D35] text-[#3C4D35] h-[40px] rounded-[6px] lg:px-4
            text-[12px] lg:text-[16px] leading-[20.8px]
            shadow-[inset_0_-1px_4px_2px_rgba(60,77,53,0.2)] flex items-center
            justify-center"
          >
            Get Started
          </Link>

          <a
            className="lg:max-w-[144px] h-[37px] rounded-[6px] px-4 border border-[#39454a] flex items-center"
            href="#how-it-works"
          >
            How it works
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

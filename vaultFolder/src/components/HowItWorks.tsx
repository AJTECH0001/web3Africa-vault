import Link from "next/link";

type CardProps = {
  number: string;
  title: string;
  text: string;
};

const Cards: React.FC<CardProps> = ({ number, title, text }) => {
  return (
    <div className="flex flex-col gap-9 max-w-[290px] w-full bg-[#60a5fa] rounded-lg p-6">
      <section className="flex flex-col gap-2">
        <span className="font-bold text-[48px] leading-[62.4px] text-[#3C4D35]">{number}</span>
        <h4 className="font-medium text-[20px] leading-[26px]">{title}</h4>
      </section>
      <p className="font-light text-[20px] leading-[26px]">{text}</p>
    </div>
  );
};

const cardsData = [
  {
    number: "01",
    title: "Deposit Funds",
    text: "Securely deposit your funds into the Vault smart contract, ensuring that your money is held safely for future bill payments.",
  },
  {
    number: "02",
    title: "Add a Bill",
    text: "Set up a bill payment by specifying the recipient, the amount to be paid, and the lock duration. The lock period ensures that the payment is securely held and only released after the designated time.",
  },
  {
    number: "03",
    title: "Lock and Wait",
    text: "Your payment remains locked in the contract until the set lock duration expires. During this time, funds cannot be accessed, providing peace of mind and control over your payments.",
  },
  {
    number: "04",
    title: "Automated Payment",
    text: "Once the lock period ends, the Vault automatically processes the payment to the recipient. This ensures timely and secure payments without any manual intervention.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="flex flex-col items-center gap-6 mb-10 pt-10">
      <p className="text-[16px] font-normal leading-[20.8px]">How it works</p>
      <h2 className="font-bold text-[22px] leading-[30.4px] lg:text-[32px] text-center lg:leading-[41.6px] max-w-[564px] w-full">
      Automate Your Bills and Focus on What Matters.
      </h2>
      <div className="my-10 grid gap-9 max-w-[1240px] w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
        {cardsData.map((item, index) => (
          <Cards key={`${index} - ${item.title}`} {...item} />
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;

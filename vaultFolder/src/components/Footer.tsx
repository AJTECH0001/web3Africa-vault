import { CiMail } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#E0E0E0] p-6 lg:p-12 my-20 w-full">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center max-w-[1240px] mx-auto">
        {/* Left Column - Logo and Email */}
        <div className="flex flex-col items-start gap-4">
         <div className="font-bold text-[30px]" >VAULT</div>
          <div className="flex items-center text-[#3C4D35]">
            <CiMail size={24} className="mr-2" />
            <a
              href="mailto:contact@safemind.com"
              className="text-sm lg:text-base"
            >
              aladejamiudamilola@gmail.com
            </a>
          </div>
        </div>

        {/* Right Column - Social Links */}
        <div className="flex flex-col items-start lg:items-end gap-4 mt-6 lg:mt-0">
          <p className="text-[#3C4D35] font-semibold text-sm lg:text-base">
            Connect with us
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/alade-jamiu-damilola-394b05292/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} className="text-[#3C4D35]" />
            </a>
            <a
              href="https://twitter.com/ajtech255"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter size={24} className="text-[#3C4D35]" />
            </a>
            <a
              href="https://github.com/AJTECH0001"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} className="text-[#3C4D35]" />
            </a>
          </div>
        </div>
      </div>

      {/* Center Bottom Links and Copyright */}
      <div className="mt-10 lg:mt-16 text-center">
        <div className="flex justify-center gap-8 mb-4">
          <a href="#link1" className="text-[#3C4D35] text-sm lg:text-base">
            TERMS OF USE
          </a>
          <a href="#link2" className="text-[#3C4D35] text-sm lg:text-base">
            PRIVACY POLICY
          </a>
        </div>
        <p className="text-[#3C4D35] text-xs lg:text-sm">
          © {new Date().getFullYear()} AJX SOLUTIONS LABS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

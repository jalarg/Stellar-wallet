import Link from "next/link";
import Image from "next/image";
import logo from "../assets/github.svg";
import { PiCopyrightBold } from "react-icons/pi";

const Footer: React.FC = () => {
  return (
    <footer className="footer-container flex flex-col px-[12.5%] text-black dark:text-white dark:bg-gray-400 ">
      <div className="border-t-2 border-black" />
      <div className="flex flex-col lg:flex-row py-5 items-center justify-between">
        <div className="flex justify-center lg:justify-start gap-5 lg:gap-20 hover:font-bold">
          <Link
            className="github-icon"
            href="https://github.com/jalarg/Stellar-wallet"
          >
            <Image src={logo} alt="github" width={50} height={50} />
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row gap-y-2 lg:gap-x-10 lg:gap-y-0 text-center lg:text-left ">
          <Link
            className="footer-terms-service-url"
            href="https://www.stellar.org/terms-of-service"
          >
            <p className="footer-terms-service-text hover:font-bold">
              Terms and Services
            </p>
          </Link>
          <Link
            className="privacy-policy-url"
            href="https://www.stellar.org/privacy-policy"
          >
            <p className="privacy-policy-text hover:font-bold">
              Privacy Policy
            </p>
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row gap-y-2 lg:gap-x-10 lg:gap-y-0 text-center lg:text-left">
          <div className="flex items-center gap-x-2 lg:gap-x-10">
            <PiCopyrightBold className="footer-copyright-icon hover:text-green-500 text-2xl" />
            <p className="footer-copyright-text">Rocket wallet 2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Link from "next/link";
import Image from "next/image";
import logo from "../assets/github.svg";

const Footer = () => {
  return (
    <footer className="footer-container bg-neutralMain flex flex-col px-[12.5%] text-black">
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
      </div>
    </footer>
  );
};

export default Footer;

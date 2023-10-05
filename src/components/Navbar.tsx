import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import logo from "../assets/stellar-xlm-logo-full.svg";
import { Avatar } from "antd";
import { FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";

const Navbar = () => {
  const [theme, setTheme] = useState<string>("light");

  const handleChangeTheme = () =>
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));

  return (
    <nav className="bg-white p-4" data-cy="navbar-container">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link data-cy="stellar-icon" href="https://stellar.org/">
            <Image src={logo} alt="logo" width={120} height={120} />
          </Link>
        </div>
        <div className="lg:flex block ">
          <Avatar
            icon={
              theme === "light" ? (
                <FiSun
                  data-cy={`theme-button-${theme}`}
                  className="text-3xl m-[6px] text-yellow-500 transition-colors hover:text-yellow-200"
                />
              ) : (
                <FaRegMoon
                  data-cy={`theme-button-${theme}`}
                  className="text-3xl m-[6px] text-blue-500 transition-colors hover:text-blue-200"
                />
              )
            }
            className={`w-10 h-10 bg-white border-1 border-black hover:${
              theme === "dark" ? "bg-blue-300" : "bg-yellow-300"
            }`}
            onClick={handleChangeTheme}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

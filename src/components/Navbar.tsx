import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import logo from "../assets/stellar-xlm-logo-full.svg";
import logout from "../assets/logout.png";
import { Avatar } from "antd";
import { FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { IAuth } from "../types/types";
import { logoutHandler } from "../actions/handlers";

const Navbar = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state: IAuth) => state.auth);
  const [theme, setTheme] = useState<string>("light");

  const handleChangeTheme = () =>
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));

  return (
    <nav className="navbar-container bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link className="stellar-icon" href="https://stellar.org/">
            <Image src={logo} alt="logo" width={120} height={120} />
          </Link>
        </div>
        <div className="lg:flex block gap-6 ">
          {auth.isAuthenticated && (
            <div className="flex items-center">
              <Link className={`navbar-link`} href="/">
                <Image
                  className="cursor-pointer"
                  onClick={() => logoutHandler(dispatch)}
                  src={logout}
                  alt="logo"
                  width={50}
                  height={50}
                />
              </Link>
            </div>
          )}
          <Avatar
            icon={
              theme === "light" ? (
                <FiSun
                  className={`theme-button-${theme} text-3xl m-[6px] text-yellow-500 transition-colors hover:text-yellow-200`}
                />
              ) : (
                <FaRegMoon
                  className={`theme-button-${theme} text-3xl m-[6px] text-blue-500 transition-colors hover:text-blue-200`}
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

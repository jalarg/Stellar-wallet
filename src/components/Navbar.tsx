import Link from "next/link";
import Image from "next/image";
import { Avatar } from "antd";
import { RiSunLine, RiMoonFill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { IAuth } from "../types/types";
import { handleLogout } from "../actions/handlers";
import { toggleTheme } from "../GlobalRedux/Features/themeSlice";
import { Button } from "../components/commons";
import { useCallback } from "react";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state: IAuth) => state.auth);
  const { theme } = useSelector(
    (state: { theme: { theme: "light" | "dark" } }) => state.theme
  );

  const handleChangeTheme = useCallback(() => {
    dispatch(toggleTheme());
  }, [dispatch]);

  return (
    <nav className="bg-white dark:bg-gray-400 p-4 text-black dark:text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold hidden sm:block">
          <Link className="stellar-icon" href="https://stellar.org/">
            <Image
              src="/assets/stellar-xlm-logo-full.svg"
              alt="logo"
              width={120}
              height={120}
            />
          </Link>
        </div>
        <div className="flex items-center gap-4 sm:flex-col sm:gap-2">
          {isAuthenticated && (
            <Button
              onClick={() => handleLogout(dispatch)}
              className="bg-blue-500 hover:bg-orange-600 text-white sm:w-full"
            >
              Logout
            </Button>
          )}
          <Avatar
            icon={
              theme === "light" ? (
                <RiSunLine className="w-6 h-6 text-yellow-500 transition-transform transform hover:rotate-45" />
              ) : (
                <RiMoonFill className="w-6 h-6 text-blue-500 transition-transform transform hover:rotate-45" />
              )
            }
            className={`w-10 h-10 flex items-center justify-center bg-white border border-black ${
              theme === "dark" ? "hover:bg-blue-300" : "hover:bg-yellow-300"
            }`}
            onClick={handleChangeTheme}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

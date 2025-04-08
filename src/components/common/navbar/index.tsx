import Logo from "@/assets/byBarterrLogo.svg";
import LogoWhite from "@/assets/nav/logoWhite.svg";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Car, Menu, Search, X } from "lucide-react";
import { useState } from "react";
import User from "@/assets/nav/person.svg";
import Support from "@/assets/nav/contact_support.svg";
import Cart from "@/assets/nav/local_mall.svg";
import { Link } from "react-router";

type Props = {};

const Navbar = (Props: Props) => {
  const [isMenuToggeled, setIsMenuToggled] = useState<boolean>(false);
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <nav>
      <div
        className={` ${flexBetween} fixed top-0 z-30 w-full py-6 bg-white drop-shadow`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* left */}
            <Link to={"/"} className="w-fit h-full">
              <img src={Logo} alt="logo" className="" />
            </Link>
            {/* right */}
            {isAboveMediumScreens && (
              <div className="relative w-full max-w-lg">
                <input
                  type="text"
                  placeholder="Search bybarterr"
                  className="w-full py-4 pl-4 pr-10 rounded-lg border border-gray-300 focus:outline-none "
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 h-full px-5 flex items-center justify-center bg-primary-black rounded-md text-white "
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
            )}

            {isAboveMediumScreens && (
              <div className={`${flexBetween} gap-8 text-sm`}>
                <button className="flex items-center gap-2 cursor-pointer">
                  <img src={User} alt="user" />
                  <p>Account</p>
                </button>

                <button className="flex items-center gap-2 cursor-pointer">
                  <img src={Support} alt="support" />
                  <p>Support</p>
                </button>
                <button className="flex items-center gap-2 cursor-pointer">
                  <img src={Cart} alt="cart" />
                  <p>Cart</p>
                </button>
              </div>
            )}
            {!isAboveMediumScreens && (
              <div className="flex w-full justify-end items-center gap-4">
                <button>
                  <img src={User} alt="user" />
                </button>
                <button>
                  <img src={Support} alt="support" />
                </button>
                <button>
                  <img src={Cart} alt="cart" />
                </button>
                <button
                  className="rounded-full bg-secondary-500 p-2"
                  onClick={() => setIsMenuToggled(!isMenuToggeled)}
                >
                  <Menu className="h-6 w-6" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE */}
      {!isAboveMediumScreens && isMenuToggeled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-full bg-primary-black text-white drop-shadow-xl p-10">
          {/* CLOSE ICON */}
          <div className="flex justify-between items-center mb-12">
            <h1 className="">
              <img src={LogoWhite} alt="logo" className="w-full h-full" />
            </h1>
            <button onClick={() => setIsMenuToggled(!isMenuToggeled)}>
              <X className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* search box */}
          <div className="relative w-full max-w-lg mb-12">
            <input
              type="text"
              placeholder="Search bybarterr"
              className="w-full py-3 pl-4 pr-10 rounded-lg border border-gray-300 focus:outline-none placeholder:text-white placeholder:opacity-70"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 h-full px-4 flex items-center justify-center bg-white rounded-md text-primary-black "
            >
              <Search className="h-5 w-5" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className={`flex flex-col items-start gap-6  w-full text-lg`}>
            <Link to={"/"}>Home</Link>
            <Link to="/about">About</Link>
            <Link to="/faq">FAQs</Link>
            <Link to={"/contact"}>Contact Us</Link>
          </div>

          <div className="flex flex-col items-start gap-4 w-full mt-18 text-lg">
            <button className="bg-white text-primary-black rounded-md w-full py-4 px-8 font-medium">
              Sign Up
            </button>
            <button className="text-white rounded-md w-full py-4 px-8 font-medium border-[1px] border-white">
              Sign in
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

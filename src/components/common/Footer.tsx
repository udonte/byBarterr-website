import Logo from "@/assets/nav/logoWhite.svg";
import Visa from "@/assets/footer/visa.svg";
import appleStore from "@/assets/footer/applestore.svg";
import playstore from "@/assets/footer/playstore.svg";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#1D242D] text-white py-16">
      <div className="flex flex-col md:flex-row flex-wrap justify-between mx-auto w-5/6 gap-y-12 md:gap-y-0 md:gap-x-12">
        {/* Logo section */}
        <div className="order-last md:order-first flex-1 min-w-[200px] md:mr-32">
          <img src={Logo} alt="logo" className="w-[150px] h-fit" />
          <div className="flex flex-col gap-4 mt-8">
            <button className="">
              <img src={appleStore} alt="apple store" />
            </button>
            <button>
              <img src={playstore} alt="playstore" />
            </button>
          </div>
        </div>

        {/* Company */}
        <div className="flex-1 min-w-[150px] flex flex-col">
          <h4 className="font-semibold mb-2">Company</h4>
          <Link to={"/about"} className="my-2 text-sm">
            About
          </Link>
          <p className="my-2 text-sm">Blog</p>
          <Link to={"/faq"} className="my-2 text-sm">
            FAQ
          </Link>
          <p className="my-2 text-sm">
            Careers{" "}
            <span className="border border-white py-2 px-4 rounded-md ml-4">
              Hiring
            </span>
          </p>
        </div>

        {/* Products */}
        <div className="flex-1 min-w-[150px] flex flex-col">
          <h4 className="font-semibold mb-2">Products</h4>
          <p className="my-2 text-sm">Buy</p>
          <p className="my-2 text-sm">Sell</p>
          <p className="my-2 text-sm">Swap</p>
        </div>

        {/* Regulations */}
        <div className="flex-1 min-w-[150px] flex flex-col">
          <h4 className="font-semibold mb-2">Regulations</h4>
          <p className="my-2 text-sm">Privacy Policy</p>
          <p className="my-2 text-sm">Refund Policy</p>
          <p className="my-2 text-sm">Terms of use</p>
        </div>

        {/* Payment */}
        <div className="flex-1 min-w-[150px] flex flex-col">
          <h4 className="font-semibold mb-2">Payment</h4>
          <p className="my-2 text-sm">Mastercard</p>
          <p className="my-2 text-sm">Visa card</p>
          <div className="my-2">
            <img src={Visa} alt="visa" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

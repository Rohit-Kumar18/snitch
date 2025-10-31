import { LOGO_URL } from "../utils/constants";
import ADMIN_IMG from "../images/admin.png";
import CART_IMG from "../images/cart.png";
import { Link } from "react-router-dom";

import Search from "./Search";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="h-20 sm:h-24 items-center justify-between flex flex-wrap px-4 sm:px-10 bg-[#FFFFFF] border border-b border-gray-300 ">
        <div className="w-full sm:w-auto py-2 sm:py-0 flex justify-center sm:justify-start cursor-pointer">
          <Link to={"/"}>
            <img
              className="w-48 sm:w-[270px] object-cover object-center"
              src={LOGO_URL}
            />
          </Link>
        </div>

        <div className="hidden sm:block flex-grow mx-4">
          <Search />
        </div>

        {/* <div className="flex  items-center mr-10">
          <ul className="flex text-xl">
            <li className="border border-transparent mx-2.5 p-1.5 hover:border-black cursor-pointer">
              Home
            </li>
            <li className="border border-transparent mx-2.5 p-1.5 hover:border-black cursor-pointer">
              Account & Login
            </li>
            <li className="border border-transparent mx-2.5 p-1.5 hover:border-black cursor-pointer">
              Returns & Orders
            </li>
            <li className="border border-transparent mx-2.5 p-1.5 hover:border-black cursor-pointer">
              Cart
            </li>
          </ul>
        </div> */}

        <div className="w-full sm:w-auto flex justify-center sm:justify-end items-center gap-4 mt-2 sm:mt-0 relative cursor-pointer">
          <Link to={"/"}>
            <h1 className="uppercase sm:text-xl text-sm p-2 hover:text-blue-500 transition-transform duration-300 hover:scale-110">
              Home
            </h1>
          </Link>
          <Link to={"/men-new-arrivals"}>
            <h1 className="uppercase text-sm sm:text-xl p-2 hover:text-blue-500 transition-transform duration-300 hover:scale-110">
              New
            </h1>
          </Link>
          <Link to={"/cart"}>
            <img
              className="w-6 sm:w-10 h-6 sm:h-12 object-contain transition-transform duration-200 hover:scale-110"
              src={CART_IMG}
              alt="Cart"
            />
          </Link>
          <Link to={"/user-info"}>
            <img
              className="w-6 sm:w-10 h-6 sm:h-12 object-contain transition-transform duration-250 hover:scale-110"
              src={ADMIN_IMG}
              alt="User"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

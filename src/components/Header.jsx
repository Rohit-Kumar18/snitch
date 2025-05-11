import { LOGO_URL } from "../utils/constants";
import ADMIN_IMG from "../images/admin.png";
import CART_IMG from "../images/cart.png";
import { Link } from "react-router-dom";

import Search from "./Search";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="h-24 border place-content-between flex pl-[10%] bg-[#FFFFFF] border-b border-gray-300 items-center">
        <div className="border border-transparent w-[300px] h-[76px] flex justify-center items-center mx-20 cursor-pointer">
          <Link to={"/"}>
            <img
              className="w-[270px] object-cover object-center"
              src={LOGO_URL}
            />
          </Link>
        </div>

        <Search />

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

        <div className="flex  items-center mr-10 w-[300px] place-content-around">
          {/* <div className="w-12 h-14 relative  cursor-pointer">
            <img
              className="w-full h-full object-center object-contain transition-transform duration-300 hover:scale-120"
              src={HOME_IMG}
            />
          </div> */}
          <div className="w-18 relative p-2 cursor-pointer">
            <h1 className="uppercase text-xl transition-transform duration-300 hover:text-blue-500 hover:scale-110">
              <Link to={"/"}>Home</Link>
            </h1>
          </div>
          <div className="w-18 relative p-2 cursor-pointer">
            <h1 className="uppercase text-xl transition-transform duration-300 hover:text-blue-500 hover:scale-110">
              <Link to={"/men-new-arrivals"}>New</Link>
            </h1>
          </div>
          <div className="w-10 h-12 relative cursor-pointer">
            <Link to={"/cart"}>
              <img
                className="w-full h-full object-center object-contain transition-transform duration-200 hover:scale-110"
                src={CART_IMG}
              />
            </Link>
          </div>
          <div className="w-10 h-12 relative cursor-pointer">
            <Link to={"/user-info"}>
              <img
                className="w-full h-full object-center object-contain transition-transform duration-250 hover:scale-110"
                src={ADMIN_IMG}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CART_IMG from "../images/cart.png";
import ADMIN_IMG from "../images/admin.png";
import { HiHome, HiSparkles, HiOutlineSearch } from "react-icons/hi";
import useCartStore from "../utils/cartStore";
import Modal from "./SearchModal";

const MobileNav = () => {
  const [activeIcon, setActiveIcon] = useState("");
  const cart = useCartStore((state) => state.cart);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 z-50 sm:hidden">
      <div className="flex justify-around items-center h-16">
        <Link to="/" className="flex flex-col items-center text-xs uppercase">
          <HiHome
            onClick={() => setActiveIcon("home")}
            className={`text-3xl ${
              activeIcon === "home" ? "text-blue-500" : "text-black"
            }`}
          />
        </Link>

        <button
          onClick={() => setIsModalOpen(true)}
          className="flex flex-col items-center text-xs uppercase"
        >
          <HiOutlineSearch className={`text-2xl `} />
        </button>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          {/* <h2 className="text-xl font-bold mb-4">This is your popup</h2>
        <p className="text-gray-700">
          You can put anything here - forms, filters, etc.
        </p> */}
        </Modal>

        <Link
          onClick={() => setActiveIcon("new")}
          to="/men-new-arrivals"
          className="flex flex-col items-center text-xs uppercase"
        >
          <HiSparkles
            onClick={() => setActiveIcon("new")}
            className={`text-xl ${
              activeIcon === "new" ? "text-blue-500" : "text-black"
            }`}
          />
          New
        </Link>

        <Link
          to="/cart"
          className={`relative flex flex-col items-center text-xs uppercase`}
        >
          {cart.length > 0 && (
            <div className="w-4 h-4 bg-white absolute z-10 ml-[90%] font-bold">
              {cart.length}
            </div>
          )}
          <img className="w-[34px] h-[34px]" src={CART_IMG} alt="Cart" />
        </Link>
        <Link
          to="/user-info"
          className="flex flex-col items-center text-xs uppercase"
        >
          <img className="w-[34px] h-[34px]" src={ADMIN_IMG} alt="User" />
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;

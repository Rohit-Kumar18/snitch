import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useCartStore from "../utils/cartStore";
import { HiOutlineTrash } from "react-icons/hi";
import { set } from "lodash";

const Cart = () => {
  const [coupon, setCoupon] = useState("app10");
  const [newTotal, setNewTotal] = useState(0);
  const [discount, setDiscount] = useState(0);

  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearItem = useCartStore((state) => state.removeItemCompletely); // We'll add this to your store

  const handleCoupon = (e) => {
    e.preventDefault(); // prevent form reload
    if (!coupon.trim()) {
      return;
    } else {
      if (coupon.trim() === "app10") {
        const discounted = Math.floor(totalAmount * 0.1);
        setDiscount(discounted);
        setNewTotal(totalAmount - discounted);
      } else {
        setDiscount(0);
        setNewTotal(totalAmount); // reset if coupon is invalid
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  }, []);

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.selling_price * item.quantity,
    0
  );

  useEffect(() => {
    setNewTotal(totalAmount);
  }, [totalAmount]);

  return cart.length > 0 ? (
    <div className="mt-29 mb-20 min-h-screen px-4 sm:px-10">
      <h1 className="text-2xl sm:text-3xl font-extrabold text-center mb-10">
        Your Shopping Bag <span className="text-blue-600">({cart.length})</span>
      </h1>

      <div className="lg:flex lg:justify-center lg:gap-5">
        <div className="grid grid-cols-1 border border-gray-300 w-[600px]">
          {cart.map((item) => (
            <div key={item.shopify_product_id} className=" p-1 flex w-full">
              <div className=" w-50 h-55">
                <img
                  src={item.preview_image}
                  alt={item.title}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="flex relative flex-wrap px-4 h-55 w-full">
                <div className=" w-full">
                  <h1 className="text-lg font-normal">{item.title}</h1>
                  <div className="flex mb-1">
                    <h2 className="mr-2 text-gray-600 text-sm sm:text-base">
                      ₹{item.selling_price} × {item.quantity}
                    </h2>
                  </div>

                  <div className="flex flex-col items-center justify-center mt-4">
                    <div className="text-lg text-gray-500 mb-2">
                      Total: ₹{item.selling_price * item.quantity}
                    </div>
                    <div className="flex items-center justify-center mt-4 gap-4">
                      <button
                        onClick={() => removeFromCart(item.shopify_product_id)}
                        className="bg-gray-200 cursor-pointer px-2 py-1 rounded-full text-sm font-bold hover:bg-gray-300"
                      >
                        −
                      </button>
                      <span className="text-sm font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => addToCart(item)}
                        className="bg-gray-200 px-2 py-1 rounded-full cursor-pointer text-sm font-bold hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => clearItem(item.shopify_product_id)}
                  className="absolute right-3 bottom-3"
                >
                  <HiOutlineTrash className="text-xl cursor-pointer text-gray-500" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 lg:mt-0 text-center h-100 w-80 mx-auto sm:mx-0">
          <div className="border border-gray-300 justify-center flex">
            <form
              onSubmit={handleCoupon}
              className="relative w-[80%] h-10 border my-4"
            >
              <input
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Enter Promo Code"
                className="w-full h-full px-3 focus:outline-none input:uppercase"
              />
              <button
                type="submit"
                className="absolute h-full right-0 px-2 bg-green-400 text-base"
              >
                Apply
              </button>
            </form>
          </div>

          <div className="border border-gray-300 my-3 p-4">
            <h1 className="uppercase mb-5 text-lg font-bold">Price Details</h1>

            <div className="flex justify-between">
              <span className="text-[15px] font-medium text-gray-500">
                Bag Total
              </span>
              <span className="text-[15px] font-medium text-gray-500">
                ₹{totalAmount}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[15px] font-medium text-gray-500">
                Product Discount
              </span>
              <span className="text-[15px] font-medium text-gray-500">
                - ₹0
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[15px] font-medium text-gray-500">
                Coupon Discount
              </span>
              <span className="text-[15px] font-medium text-gray-500">
                - ₹{discount}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[15px] font-medium text-gray-500">
                Grand Total
              </span>
              <span className="text-[15px] font-medium text-gray-500">
                ₹{newTotal}
              </span>
            </div>
          </div>

          <Link to="/checkout">
            <button className="bg-black uppercase w-full text-white px-6 py-3 text-lg font-bold hover:bg-blue-700 transition-colors">
              Pay ₹ {newTotal}
            </button>
          </Link>
        </div>
      </div>
      <div className="h-screen"></div>
    </div>
  ) : (
    <div>
      <div className="mt-24 mb-30 text-center min-h-screen items-center px-4">
        <h1 className="pt-4 sm:pt-16 pb-1 sm:pb-6 text-2xl sm:text-3xl font-extrabold">
          Cart
        </h1>
        <div className="flex justify-center items-center my-5 sm:my-4">
          <img
            src="https://d1ukuhxlv0lfsa.cloudfront.net/app_assets/error_screens/empty_bag.png"
            alt="Empty Bag"
            className="w-[50%] sm:w-1/3 max-w-xs"
          />
        </div>
        <h1 className="uppercase text-lg sm:text-xl font-bold">
          YOUR BAG IS EMPTY
        </h1>
        <p className="text-sm sm:text-base px-2 py-1 sm:px-0">
          Your cart is ready to roll, but it's feeling a bit empty without some
          stylish finds.
        </p>
        <Link to={"/"}>
          <div className="flex justify-center items-center mt-5 sm:mt-10">
            <div className="bg-black text-white h-14 sm:h-16 w-full sm:w-1/3 max-w-xs flex justify-center items-center hover:cursor-pointer">
              <h1 className="px-4 sm:py-2 uppercase text-lg sm:text-2xl font-bold">
                Start Shopping
              </h1>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Cart;

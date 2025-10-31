import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="mt-24 mb-30 text-center min-h-screen px-4">
      <h1 className="pt-16 pb-6 text-2xl sm:text-3xl font-extrabold">Cart</h1>
      <div className="flex justify-center items-center my-4">
        <img
          src="https://d1ukuhxlv0lfsa.cloudfront.net/app_assets/error_screens/empty_bag.png"
          alt="Empty Bag"
          className="w-3/4 sm:w-1/3 max-w-xs"
        />
      </div>
      <h1 className="uppercase text-lg sm:text-xl font-bold">
        YOUR BAG IS EMPTY
      </h1>
      <p className="text-sm sm:text-base px-2 sm:px-0">
        Your cart is ready to roll, but it's feeling a bit empty without some
        stylish finds.
      </p>
      <Link to={"/"}>
        <div className="flex justify-center items-center mt-10">
          <div className="bg-black text-white h-14 sm:h-16 w-full sm:w-1/3 max-w-xs flex justify-center items-center hover:cursor-pointer">
            <h1 className="px-4 uppercase text-lg sm:text-2xl font-bold">
              Start Shopping
            </h1>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Cart;

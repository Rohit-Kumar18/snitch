import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className=" text-center h-screen">
      <h1 className="pt-16 pb-6 text-3xl font-extrabold">Cart</h1>
      <div className="flex justify-center items-center my-4">
        <img src="https://d1ukuhxlv0lfsa.cloudfront.net/app_assets/error_screens/empty_bag.png" />
      </div>
      <h1 className="uppercase text-xl font-bold">YOUR BAG IS EMPTY</h1>
      <p>
        Your cart is ready to roll, but it's feeling a bit empty without some
        stylish finds.
      </p>
      <Link to={"/"}>
        <div className="flex justify-center items-center mt-10">
          <div className="bg-black text-white h-16 w-[30%] flex justify-center items-center hover:cursor-pointer">
            <h1 className="uppercase text-2xl font-bold">Start Shopping</h1>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Cart;

import { Link } from "react-router-dom";
import { useEffect } from "react";
import useCartStore from "../utils/cartStore";

const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearItem = useCartStore((state) => state.removeItemCompletely); // We'll add this to your store

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  }, []);

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.selling_price * item.quantity,
    0
  );

  return cart.length > 0 ? (
    <div className="mt-24 mb-20 min-h-screen px-4 sm:px-10">
      <h1 className="text-2xl sm:text-3xl font-extrabold text-center mb-10">
        Your Shopping Bag <span className="text-blue-600">({cart.length})</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cart.map((item) => (
          <div
            key={item.shopify_product_id}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center transition-transform hover:scale-[1.02]"
          >
            <img
              src={item.preview_image}
              alt={item.title}
              className="w-32 h-32 object-cover rounded-lg mb-4"
            />
            <h2 className="font-semibold text-base sm:text-lg mb-1">
              {item.title}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-1">
              ₹{item.selling_price} × {item.quantity}
            </p>
            <p className="text-sm text-gray-500 mb-2">
              Subtotal: ₹{item.selling_price * item.quantity}
            </p>

            <div className="flex items-center justify-center gap-3 mt-2">
              <button
                onClick={() => removeFromCart(item.shopify_product_id)}
                className="bg-gray-200 px-2 py-1 rounded-full text-sm font-bold hover:bg-gray-300"
              >
                −
              </button>
              <span className="text-sm font-semibold">{item.quantity}</span>
              <button
                onClick={() => addToCart(item)}
                className="bg-gray-200 px-2 py-1 rounded-full text-sm font-bold hover:bg-gray-300"
              >
                +
              </button>
            </div>

            <button
              onClick={() => clearItem(item.shopify_product_id)}
              className="mt-4 text-red-500 text-sm hover:underline"
            >
              Remove Item
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          Total Amount: ₹{totalAmount}
        </h2>
        <Link to="/checkout">
          <button className="bg-black text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Proceed to Checkout
          </button>
        </Link>
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
      <div className="h-screen"></div>
    </div>
  );
};

export default Cart;

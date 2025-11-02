import { useState } from "react";
import { Link } from "react-router-dom";

const ItemCard = (props) => {
  const { productData } = props;

  // console.log(productData);

  const [imageLoading, setImageLoading] = useState({});

  const handleImageLoad = (id) => {
    setImageLoading((prev) => ({ ...prev, [id]: true }));
  };
  return (
    <div className="w-full max-w-[200px] sm:max-w-[220px] md:max-w-[250px] lg:max-w-[280px] xl:max-w-[334px] mb-6 bg-[#E7E7E7] border border-transparent cursor-pointer hover:shadow-sm shadow-gray-500 rounded-2xl">
      <Link to={`/product/${productData?.shopify_product_id}`}>
        <div
          className="group relative rounded-t-xl overflow-hidden hover:rounded-t-2xl"
          key={productData?.shopify_product_id}
        >
          {!imageLoading[productData?.shopify_product_id] && (
            <div className="w-full max-h-60 sm:max-h-78 md:max-h-96 lg:h-100 xl:max-h-120 bg-[#D4D4D4] rounded-xl"></div>
          )}
          <img
            className={`w-full max-h-60 sm:max-h-78 md:h-96 lg:h-100 xl:max-h-120 object-cover object-center transition-transform duration-300 group-hover:scale-110 ${
              !imageLoading[productData?.shopify_product_id] ? "hidden" : ""
            }`}
            src={productData?.preview_image}
            alt="item-logo"
            onLoad={() => handleImageLoad(productData?.shopify_product_id)}
          />
        </div>
      </Link>

      <Link to={`/product/${productData?.shopify_product_id}`}>
        {imageLoading[productData?.shopify_product_id] && (
          <div className="mt-2 mb-1 px-2">
            <h3 className="text-center font-sans font-semibold text-sm sm:text-base">
              {productData?.title}
            </h3>
            <h4 className="text-gray-600 text-center font-sans font-semibold text-sm sm:text-base">
              ₹{productData?.selling_price}
            </h4>
          </div>
        )}
      </Link>
    </div>
  );
};

export default ItemCard;

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
    <div className="w-[334px] h-[530px] mb-15 bg-[#E7E7E7]  border border-transparent cursor-pointer hover:shadow-md shadow-gray-110/500 rounded-2xl">
      <Link to={`/product/${productData?.shopify_product_id}`}>
        <div
          className="group relative rounded-t-xl overflow-hidden hover:rounded-t-2xl"
          key={productData?.shopify_product_id}
        >
          {!imageLoading[productData?.shopify_product_id] && (
            <div className="w-[334px] h-[505px] bg-[#D4D4D4] rounded-xl"></div>
          )}
          <img
            className={`w-full h-[445px] object-cover object-center transition-transform duration-300 group-hover:scale-110 ${
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
            <h3 className="text-center font-sans font-semibold">
              {productData?.title}
            </h3>
            <h4 className="text-center font-sans font-semibold">
              ₹{productData?.selling_price}
            </h4>
          </div>
        )}
      </Link>
    </div>
  );
};

export default ItemCard;

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCard from "./ItemCard";
import CardShimmer from "./Shimmers/CardShimmer";

const ProductCard = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState([]);
  const [itemImage, setItemImage] = useState([]);
  const [colorsOption, setColorsOption] = useState([]);
  const [sizeInfo, setSizeInfo] = useState([]);
  const [similarProduct, setSimilarProduct] = useState([]);
  const [imageLoadStatus, setImageLoadStatus] = useState({});

  useEffect(() => {
    setProductDetails([]);
    setItemImage([]);
    setColorsOption([]);
    setSizeInfo([]);
    setSimilarProduct([]);

    setImageLoadStatus({});

    fetchDetails();
    fetchSizes();
    fetchSimilar();
  }, [id]);

  const fetchDetails = async () => {
    const data = await fetch(
      `https://mxemjhp3rt.ap-south-1.awsapprunner.com/products/product-details?product_id=${id}`
    );
    const json = await data.json();
    setProductDetails(json?.data?.products);
    setItemImage(json?.data?.products?.images);
    setColorsOption(json?.data?.products?.color_variants);
    // console.log(json?.data?.products);
  };

  const fetchSizes = async () => {
    const data = await fetch(
      `https://mxemjhp3rt.ap-south-1.awsapprunner.com/products/size-info/v2?product_id=${id}`
    );
    const json = await data.json();
    // console.log(json?.data);
    setSizeInfo(json?.data?.actual_sizes);
  };

  const fetchSimilar = async () => {
    const data = await fetch(
      `https://mxemjhp3rt.ap-south-1.awsapprunner.com/products/similar-products?product_id=${id}&page=1&limit=100`
    );
    const json = await data.json();
    // console.log(json?.data?.products);
    setSimilarProduct(json?.data?.products);
    // console.log(json);
  };

  if (
    similarProduct.length === 0 ||
    productDetails.length === 0 ||
    sizeInfo.length === 0 ||
    itemImage.length === 0 ||
    !itemImage
  ) {
    return <CardShimmer />;
  }

  const productDescription = `${productDetails?.description}`;
  return (
    <div className="my-24">
      <div className="h-[72px] w-full"></div>
      <div className="w-full">
        <div className="w-full flex mb-4 pl-7">
          <div className=" pr-7.5">
            <div className="mr-4 grid grid-cols-2 grid-rows-2 gap-4 w-[857px]">
              {itemImage.map((image, index) => {
                const isLoaded = imageLoadStatus[index];
                return (
                  <div key={index} className="w-[419px] h-[560px] relative">
                    {!isLoaded && (
                      <div className="absolute inset-0 bg-[#D4D4D4] animate-pulse rounded-md" />
                    )}
                    <img
                      className={`w-full h-full object-cover object-center transition-opacity duration-300 ${
                        isLoaded ? "opacity-100" : "opacity-0"
                      }`}
                      src={image}
                      alt=""
                      onLoad={() =>
                        setImageLoadStatus((prev) => ({
                          ...prev,
                          [index]: true,
                        }))
                      }
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-2 w-[585px]">
            <div className="text-center w-[80%] mx-[10%]  mb-5">
              <h1 className="uppercase text-4xl font-black">
                {productDetails?.title}
              </h1>
            </div>
            <div className="flex w-[90%] m-auto items-center border-gray-600 justify-center">
              <div className="border rounded-sm flex mt-3 mb-5 px-2 bg-black">
                <h2 className="text-lg text-white ">
                  {productDetails?.average_rating}
                </h2>
                <div className="w-4 h-4">
                  <h2>⭐</h2>
                </div>
              </div>

              <div className="ml-4 flex mb-5 mt-3">
                <p className="text-md text-gray-400">
                  {productDetails?.total_ratings_count} Ratings and{" "}
                  {productDetails?.total_rewiews_count} Reviews
                </p>
              </div>
              <div className="ml-4 mb-5 mt-2">
                <h1 className=" text-2xl font-bold">
                  - ₹{productDetails?.selling_price}
                </h1>
              </div>
            </div>

            <div className="w-[492px] h-[54px] mt-7 mb-15 mx-auto">
              <button className="border hover:cursor-pointer hover:text-white hover:bg-black w-[284px] h-[52px] uppercase rounded-lg mr-4 font-semibold text-xl">
                Add to bag
              </button>
              <button className="border border-gray-200 hover:cursor-pointer hover:border-[#FE3157] w-[190px] h-[52px] uppercase rounded-lg font-semibold text-xl">
                ❤️ whishlist
              </button>
            </div>

            {colorsOption.length != 0 ? (
              <div className="my-8">
                <h1 className="text-2xl font-extrabold text-center">Colors</h1>
                <div>
                  <div className="flex flex-wrap justify-center items-center m-5 py-4">
                    {colorsOption.map((color, index) => (
                      <div
                        key={index}
                        className="w-[200px] rounded-2xl border border-transparent hover:cursor-pointer hover:border-black hover:shadow-2xl h-[260px] m-2"
                      >
                        <img
                          className="w-full h-full rounded-2xl object-cover object-center"
                          src={color?.preview_image}
                          alt=""
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )}

            <div className="my-8 mb-15">
              <h1 className="text-2xl font-extrabold text-center mb-4">
                Sizes
              </h1>
              <div className="m-5 py-2 w-[80%] mx-auto flex flex-wrap justify-around">
                {sizeInfo.map((size) => (
                  <div className="w-14 border hover:text-white hover:bg-black hover:cursor-pointer text-center">
                    {size}
                  </div>
                ))}
              </div>
            </div>

            <div className="my-8">
              <h1 className="text-2xl font-extrabold text-center">Details</h1>
              <div className="m-5 pb-4">
                <div
                  className="text-gray-800 text-md"
                  dangerouslySetInnerHTML={{ __html: productDescription }}
                />
              </div>
            </div>

            <div className="my-8">
              <h1 className="text-2xl font-extrabold text-center">Returns</h1>
              <div>
                <div className="flex flex-wrap justify-center items-center m-5 py-4">
                  <p>
                    1. Hassle-free returns within 7 days under specific product
                    and promotion conditions.
                    <br /> 2. Refunds for prepaid orders revert to the original
                    payment method, while COD orders receive a wallet refund.
                    <br /> 3. Report defective, incorrect, or damaged items
                    within 24 hours of delivery. <br />
                    4. Products bought during special promotions like BOGO are
                    not eligible for returns. <br />
                    5. For excessive returns, reverse shipment fee upto Rs 100
                    can be charged, which will be deducted from the refund
                    <br /> 6. Non-returnable items include accessories,
                    sunglasses, perfumes, masks, and innerwear due to hygiene
                    concerns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center mt-20">
          <h1 className="uppercase text-4xl font-black">You may also like</h1>
          <div className="mt-15 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center min-h-[700px] w-full">
            {similarProduct.map((item) => (
              <ItemCard key={item.shopify_product_id} productData={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

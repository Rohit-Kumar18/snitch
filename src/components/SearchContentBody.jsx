import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import { Link } from "react-router-dom";
import CardShimmer from "./Shimmers/CardShimmer";

const SearchContentBody = () => {
  const { searchText } = useParams();
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const options = [
    "shirts",
    "white shirt",
    "trouser",
    "linen",
    "jeans",
    "formal wear",
    "overshirt",
    "polo",
    "checks shirt",
    "baggy jeans",
  ];

  // const normalizeSearchText = (query) => {
  //   const lower = query.toLowerCase().trim();

  //   if (lower.includes("jean")) {
  //     return "Jeans";
  //   }
  //   if (lower.includes("shirt")) {
  //     return "Shirts";
  //   }
  //   if (lower.includes("tshirt") || lower.includes("t-shirt")) {
  //     return "T-Shirts";
  //   }
  //   if (
  //     lower.includes("trouser") ||
  //     lower.includes("trousers") ||
  //     lower.includes("pant")
  //   ) {
  //     return "Trousers";
  //   }
  //   if (lower.includes("jack")) {
  //     return "Jackets";
  //   }
  //   if (lower.includes("coords") || lower.includes("co-ord")) {
  //     return "Co-ords";
  //   }
  //   if (lower.includes("bag")) {
  //     return "Bags";
  //   }
  //   if (lower.includes("jack")) {
  //     return "Jackets";
  //   }
  //   if (lower.includes("jack")) {
  //     return "Jackets";
  //   }

  //   return query;
  // };

  {
    /**
    https://mxemjhp3rt.ap-south-1.awsapprunner.com/search/trending-products?page=1&limit=6&shopify_product_type=Perfumes
    https://mxemjhp3rt.ap-south-1.awsapprunner.com/search/trending-products?page=1&limit=6&shopify_product_type=Shorts
    https://mxemjhp3rt.ap-south-1.awsapprunner.com/search/trending-products?page=1&limit=6&shopify_product_type=Hoodies
    https://mxemjhp3rt.ap-south-1.awsapprunner.com/search/trending-products?page=1&limit=6&shopify_product_type=Sweatshirts
    https://mxemjhp3rt.ap-south-1.awsapprunner.com/search/trending-products?page=1&limit=6&shopify_product_type=Shoes
    https://mxemjhp3rt.ap-south-1.awsapprunner.com/search/trending-products?page=1&limit=6&shopify_product_type=Sweaters
    https://mxemjhp3rt.ap-south-1.awsapprunner.com/search/trending-products?page=1&limit=6&shopify_product_type=Sunglasses
    https://mxemjhp3rt.ap-south-1.awsapprunner.com/search/trending-products?page=1&limit=6&shopify_product_type=Jackets
    https://mxemjhp3rt.ap-south-1.awsapprunner.com/search/trending-products?page=1&limit=6&shopify_product_type=Overshirt
    */
  }

  useEffect(() => {
    fetchData();
  }, [searchText]);

  useEffect(() => {
    if (!loading) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [loading]);

  const fetchData = async () => {
    // const normalizedQuery = normalizeSearchText(searchText);
    setLoading(true);
    setNotFound(false);
    try {
      const data = await fetch(
        // `https://mxemjhp3rt.ap-south-1.awsapprunner.com/products/plp/v2?page=1&limit=50&product_type=${normalizedQuery}`
        `https://mxemjhp3rt.ap-south-1.awsapprunner.com/products/search?page=1&limit=150&keyword=${searchText}`
      );
      const json = await data.json();
      const product = json?.data?.products;

      if (!product || product.length === 0) {
        setNotFound(true);
      } else {
        setProductData(product);
      }
    } catch (err) {
      setNotFound(true);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <CardShimmer />;
  }

  if (notFound) {
    return (
      <div className="pb-25 my-29">
        <div className="flex justify-center items-center">
          <img src="https://d1ukuhxlv0lfsa.cloudfront.net/app_assets/error_screens/empty_search.png" />
        </div>
        <h1 className="text-center text-3xl font-bold">
          Oops! Can't Find That
        </h1>
        <p className="text-center mt-3">
          Try a new keyword or explore our trending searches for some stylish
          inspiration
        </p>
        <div className="w-[60%] flex flex-wrap ml-[20%] items-center justify-center h-30 mt-2">
          {options.map((option) => (
            <div className="border px-2 uppercase m-3 hover:cursor-pointer hover:bg-black hover:text-white">
              <Link to={`/search/${option}`}>{option}</Link>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="pt-10 flex justify-center">
      <div className="w-full px-4 sm:px-6 bg-[#E7E7E7]">
        <div className="mt-24 mb-6 pt-8  flex justify-center text-center w-full">
          <h1 className="font-black text-2xl sm:text-4xl uppercase">
            {searchText}
          </h1>
        </div>
        <div className="p-2.5 mb-5 w-full flex flex-wrap justify-center gap-2">
          {options.map((option) => (
            <div className="mx-1.5">
              <button className="border px-3 uppercase py-1 text-xs sm:text-sm cursor-pointer transition-colors duration-200 hover:bg-black hover:text-white">
                <Link to={`/search/${option}`}>{option}</Link>
              </button>
            </div>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center min-h-[700px] w-full">
          {productData.map((item) => (
            <ItemCard key={item.shopify_product_id} productData={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchContentBody;

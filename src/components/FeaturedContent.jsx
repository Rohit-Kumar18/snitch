import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCard from "./ItemCard";
import CardShimmer from "./Shimmers/CardShimmer";

const FeaturedContent = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      let apiUrl = "";
      if (id?.toLowerCase() === "bestsellers") {
        apiUrl =
          "https://mxemjhp3rt.ap-south-1.awsapprunner.com/products/plp/v2?page=1&limit=50&product_group=trending";
      } else {
        apiUrl = `https://mxemjhp3rt.ap-south-1.awsapprunner.com/products/search?page=1&limit=50&keyword=${id}`;
      }
      const data = await fetch(apiUrl);
      const json = await data.json();
      setProductData(json?.data?.products);
      console.log(json?.data?.products);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setProductData([]);
    }
  };
  if (loading) {
    return <CardShimmer />;
  }
  return (
    <div className="w-full items-center justify-items-center bg-[#E7E7E7]">
      <div className="mb-6 pt-10 pb-4 flex justify-center w-full">
        <h1 className="font-black text-4xl uppercase">{id}</h1>
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center min-h-[700px] w-full">
        {productData.map((item) => (
          <ItemCard key={item.shopify_product_id} productData={item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedContent;

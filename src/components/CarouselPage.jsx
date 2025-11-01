import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import CardShimmer from "./Shimmers/CardShimmer";

const CarouselPage = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      let apiUrl = "";
      if (id?.toLowerCase() === "hoodies & sweatshirts") {
        apiUrl =
          "https://mxemjhp3rt.ap-south-1.awsapprunner.com/products/plp/v2?page=1&limit=50&product_type=Hoodies%2C+Sweatshirts";
      } else if (id?.toLowerCase() === "bestsellers") {
        apiUrl =
          "https://mxemjhp3rt.ap-south-1.awsapprunner.com/products/plp/v2?page=1&limit=50&product_group=trending";
      } else {
        apiUrl = `https://mxemjhp3rt.ap-south-1.awsapprunner.com/products/search?page=1&limit=50&keyword=${id}`;
      }

      const data = await fetch(
        //   `https://mxemjhp3rt.ap-south-1.awsapprunner.com/products/plp/v2?page=1&limit=50&collection_id=${collectionId}`
        //   `https://mxemjhp3rt.ap-south-1.awsapprunner.com/products/plp/v2?page=1&limit=50&category=${id}`
        //   `https://mxemjhp3rt.ap-south-1.awsapprunner.com/products/plp/v2?page=1&limit=50&product_type=${id}`
        apiUrl
      );
      const json = await data.json();
      // console.log(json);

      setProductData(json?.data?.products);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching data:", err);
      setProductData([]);
    }
  };
  if (loading) {
    return <CardShimmer />;
  }
  return (
    <div className="pt-10 flex justify-center">
      <div className="w-full px-4 sm:px-6 bg-[#E7E7E7]">
        <div className="mb-6 mt-19 pt-8 pb-4 flex justify-center text-center w-full">
          <h1 className="font-black text-2xl sm:text-4xl uppercase">{id}</h1>
        </div>
        {/* <div className="w-[80%] flex flex-wrap items-center justify-center mt-1">
        {options.map((option) => (
          <div className="border px-2 uppercase m-3 hover:cursor-pointer hover:bg-black hover:text-white">
            <Link to={`/search/${option}`}>{option}</Link>
          </div>
        ))}
      </div> */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-2 justify-items-center min-h-[700px] w-full">
          {productData.map((item) => (
            <ItemCard key={item.shopify_product_id} productData={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselPage;

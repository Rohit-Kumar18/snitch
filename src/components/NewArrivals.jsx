import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ItemCard from "./ItemCard";
import CardShimmer from "./Shimmers/CardShimmer";

const NewArrivals = () => {
  const [filters, setFilters] = useState([]);
  const [productData, setProductData] = useState([]);
  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);

  useEffect(() => {
    fetchFilters();
    fetchData();
  }, []);

  const fetchFilters = async () => {
    const data = await fetch(
      "https://mxemjhp3rt.ap-south-1.awsapprunner.com/products/chips/v3?category=new&sort_by=global_sort_score&sort_order=desc&published_at=14"
    );
    const json = await data.json();
    setFilters(json?.data);
    setLoading1(false);
    // console.log(json?.data);
  };

  const fetchData = async () => {
    const data = await fetch(
      "https://mxemjhp3rt.ap-south-1.awsapprunner.com/products/new-and-popular/v2?page=1&limit=50"
    );
    const json = await data.json();
    setProductData(json?.data?.products);
    setLoading2(false);
    // console.log(json?.data?.products);
  };
  if (loading1 && loading2 === true) {
    return <CardShimmer />;
  }
  return (
    <div>
      <div className="mb-6 mt-29 pt-8 flex justify-center w-full">
        <h1 className="font-black text-4xl uppercase">New Arrivals</h1>
      </div>
      <div className="w-[80%] flex flex-wrap ml-[10%] items-center justify-center mt-1">
        {filters.map((filter) => (
          <div className="border px-2 uppercase m-3 hover:cursor-pointer hover:bg-black hover:text-white">
            <Link to={`/search/${filter?.attribute_label}`}>
              {filter?.attribute_label}
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center min-h-[700px] w-full">
        {productData.map((item) => (
          <ItemCard key={item.shopify_product_id} productData={item} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;

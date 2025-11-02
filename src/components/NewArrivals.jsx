import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ItemCard from "./ItemCard";
import NewArrivalsShimmer from "./Shimmers/NewArrivalsShimmer";
import FiltersShimmer from "./Shimmers/FiltersShimmer";

const NewArrivals = () => {
  const [filters, setFilters] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);

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
    setFilterData(json?.data);
    // console.log(json?.data);
  };

  const fetchData = async () => {
    const data = await fetch(
      "https://mxemjhp3rt.ap-south-1.awsapprunner.com/products/new-and-popular/v2?page=1&limit=50"
    );
    const json = await data.json();
    setCardData(json?.data?.products);
    setLoading(false);
    // console.log(json?.data?.products);
  };

  useEffect(() => {
    if (!loading) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [loading]);

  return (
    <div className="pt-10 flex justify-center">
      <div className="w-full px-4 sm:px-6 bg-[#E7E7E7]">
        <div className="mb-6 mt-19 pt-8 flex justify-center w-full text-center">
          <h1 className="font-black text-2xl sm:text-4xl uppercase">
            New Arrivals
          </h1>
        </div>

        {filterData.length != 0 ? (
          <div className="p-2.5 mb-10 w-full flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <div className="mx-1.5" key={Math.random()}>
                <button className="border px-3 uppercase py-1 text-xs sm:text-sm cursor-pointer transition-colors duration-200 hover:bg-black hover:text-white">
                  <Link to={`/search/${filter?.attribute_label}`}>
                    {filter?.attribute_label}
                  </Link>
                </button>
              </div>
            ))}
          </div>
        ) : (
          <FiltersShimmer />
        )}

        {loading === true ? (
          <NewArrivalsShimmer />
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-2 justify-items-center min-h-[700px] w-full">
            {cardData.map((item) => (
              <ItemCard key={item.shopify_product_id} productData={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewArrivals;

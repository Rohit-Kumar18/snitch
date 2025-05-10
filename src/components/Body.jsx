import { useState, useEffect } from "react";
import FeaturedCard from "./FeaturedCard";
import MessageBar from "./MessageBar";
import ShopSize from "./ShopSize";
import BodyContent from "./BodyContent";

const Body = () => {
  const [items, setItems] = useState([]);
  const [filterValue, setFilterValue] = useState(null);

  const filteredItems = items.filter((item) => {
    if (!filterValue) return true;
    return item?.shopify_product_type === filterValue;
  });

  useEffect(() => {
    fetchData();
  }, [filterValue]);

  const url = filterValue
    ? `https://mxemjhp3rt.ap-south-1.awsapprunner.com/products/new-and-popular/v2?page=1&limit=150&shopify_product_type=${filterValue}`
    : `https://mxemjhp3rt.ap-south-1.awsapprunner.com/products/new-and-popular/v2?page=1&limit=150`;

  const fetchData = async () => {
    const data = await fetch(url);
    const json = await data.json();
    setItems(json?.data?.products);
    // console.log(json?.data?.products);
  };

  return (
    <div className="w-[100%]">
      <MessageBar />
      <FeaturedCard />
      <ShopSize />
      <MessageBar />
      <BodyContent itemsData={filteredItems} setFilterValue={setFilterValue} />
    </div>
  );
};

export default Body;

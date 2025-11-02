import { useState, useEffect } from "react";
import CategoryCarouselCard from "./CategoryCarouselCard";
import CategoryShimmer from "./Shimmers/CategoryShimmer";

const CategoryCarousel = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://mxemjhp3rt.ap-south-1.awsapprunner.com/search/shop/v3?source=web"
    );
    const json = await data.json();
    setCategory(json?.data);
    // console.log(json?.data);
  };

  // if (category.length === 0) {
  //   return <CategoryShimmer />;
  // }

  return category.length === 0 ? (
    <CategoryShimmer />
  ) : (
    <div className="mt-29 mb-4 ">
      <div className="flex overflow-x-auto overflow-y-hidden whitespace-nowrap scroll-smooth">
        <div className="marquee1">
          {[
            ...category,
            ...category,
            ...category,
            ...category,
            ...category,
            ...category,
            ...category,
            ...category,
          ].map((item, index) => (
            <CategoryCarouselCard key={index} categoryData={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCarousel;

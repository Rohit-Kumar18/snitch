import { useEffect } from "react";
import CategoryCarousel from "./CategoryCarousel";
import Ad from "./Ad";
import Body from "./Body";

const OuterBody = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50); // 100ms delay
  }, []);
  return (
    <div className="">
      <CategoryCarousel />
      <Ad />
      <Body />
    </div>
  );
};

export default OuterBody;

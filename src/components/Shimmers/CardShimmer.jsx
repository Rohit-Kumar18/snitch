// import { useEffect } from "react";
import NewArrivalsShimmer from "./NewArrivalsShimmer";
import FiltersShimmer from "./FiltersShimmer";

const CardShimmer = () => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //   }, 50); // 100ms delay
  // }, []);
  return (
    <div className="pt-20 mt-20 mb-10 flex flex-wrap justify-center bg-[#E7E7E7] ">
      <div className="bg-[#D4D4D4] w-30 sm:w-42 h-9 sm:h-11 animate-pulse"></div>
      <FiltersShimmer />
      <NewArrivalsShimmer />
    </div>
  );
};

export default CardShimmer;

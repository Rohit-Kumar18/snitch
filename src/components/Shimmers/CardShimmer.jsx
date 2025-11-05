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
    <div className="pt-10 mt-28 mb-10 flex flex-wrap justify-center bg-[#E7E7E7] ">
      <FiltersShimmer />
      <NewArrivalsShimmer />
    </div>
  );
};

export default CardShimmer;

import { useEffect } from "react";
import NewArrivalsShimmer from "./NewArrivalsShimmer";

const CardShimmer = () => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //   }, 50); // 100ms delay
  // }, []);
  return (
    <div className="pt-10 mt-24 mb-10 flex flex-wrap justify-center bg-[#E7E7E7] ">
      <div className="w-[80%] mb-5 flex flex-wrap items-center justify-center mt-16">
        <div className="px-2 m-3 w-[86px] h-6 bg-[#D4D4D4]"></div>
        <div className="px-2 m-3 w-[86px] h-6 bg-[#D4D4D4]"></div>
        <div className="px-2 m-3 w-[86px] h-6 bg-[#D4D4D4]"></div>
        <div className="px-2 m-3 w-[86px] h-6 bg-[#D4D4D4]"></div>
        <div className="px-2 m-3 w-[86px] h-6 bg-[#D4D4D4]"></div>
        <div className="px-2 m-3 w-[86px] h-6 bg-[#D4D4D4]"></div>
        <div className="px-2 m-3 w-[86px] h-6 bg-[#D4D4D4]"></div>
        <div className="px-2 m-3 w-[86px] h-6 bg-[#D4D4D4]"></div>
        <div className="px-2 m-3 w-[86px] h-6 bg-[#D4D4D4]"></div>
        <div className="px-2 m-3 w-[86px] h-6 bg-[#D4D4D4]"></div>
        <div className="px-2 m-3 w-[86px] h-6 bg-[#D4D4D4]"></div>
      </div>
      <NewArrivalsShimmer />
    </div>
  );
};

export default CardShimmer;

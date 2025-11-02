import { useEffect } from "react";
const FeaturedShimmer = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50); // 100ms delay
  }, []);
  return (
    <div className="flex justify-center items-center mt-4 mb-4 px-4 sm:px-0">
      <div className="w-full sm:w-[90%]">
        <div className="flex justify-center items-center mt-4 text-center">
          <h1 className="font-black text-2xl sm:text-4xl uppercase">
            Featured Categories
          </h1>
        </div>
        <div className="flex flex-wrap my-4 items-center justify-center gap-4">
          {Array.from({ length: 19 }).map((_, index) => (
            <div
              key={index}
              className=" w-40 sm:w-64 h-48 sm:h-[333px] relative rounded-3xl bg-[#eef0f5] "
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedShimmer;

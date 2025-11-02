import { useEffect } from "react";
const CategoryShimmer = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50); // 100ms delay
  }, []);
  return (
    <div className="mt-32 mb-4 ">
      <div className="flex overflow-x-hidden overflow-y-hidden whitespace-nowrap">
        <div className="flex ">
          {Array.from({ length: 22 }).map((_, index) => (
            <div key={index} className="m-auto p-1.5">
              <div className="w-28 sm:w-32 aspect-square sm:h-32 mr-2 rounded-xl bg-[#eef0f5]"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryShimmer;

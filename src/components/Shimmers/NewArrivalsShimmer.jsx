import { useEffect } from "react";
const NewArrivalsShimmer = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50); // 100ms delay
  }, []);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-2 justify-items-center min-h-[700px] w-full">
      {Array.from({ length: 24 }).map((_, index) => (
        <div
          key={index}
          className="w-full animate-pulse max-w-[200px] sm:max-w-[220px] md:max-w-[250px] lg:max-w-[280px] xl:max-w-[334px] h-65 sm:max-h-78 md:max-h-96 lg:h-110 bg-[#D4D4D4] m-3 rounded-xl"
        ></div>
      ))}
    </div>
  );
};

export default NewArrivalsShimmer;

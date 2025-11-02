const FiltersShimmer = () => {
  return (
    <div className="p-2.5 mb-10 w-full flex flex-wrap justify-center gap-2 sm:h-[45px]">
      {Array.from({ length: 11 }).map((_, index) => (
        <div
          key={index}
          className={`bg-[#D4D4D4] w-20 h-5 sm:h-6 animate-pulse`}
        ></div>
      ))}

      {/* <div className={`bg-[#D4D4D4] w-20 h-5`}></div>
      <div className={`bg-[#D4D4D4] w-20 h-5`}></div>
      <div className={`bg-[#D4D4D4] w-20 h-5`}></div>
      <div className={`bg-[#D4D4D4] w-20 h-5`}></div>
      <div className={`bg-[#D4D4D4] w-20 h-5`}></div>
      <div className={`bg-[#D4D4D4] w-20 h-5`}></div>
      <div className={`bg-[#D4D4D4] w-20 h-5`}></div>
      <div className={`bg-[#D4D4D4] w-20 h-5`}></div>
      <div className={`bg-[#D4D4D4] w-20 h-5`}></div>
      <div className={`bg-[#D4D4D4] w-20 h-5`}></div> */}
    </div>
  );
};

export default FiltersShimmer;

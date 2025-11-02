const BodyContentShimmer = (props) => {
  const { filterOptions, activeFilter } = props;
  return (
    <div className="pt-10 flex justify-center bg-[#E7E7E7]">
      <div className="w-full px-4 sm:px-6 bg-[#E7E7E7] ">
        <div className="mb-6 mt-4 flex justify-center w-full text-center">
          <h1 className="font-black text-2xl sm:text-4xl uppercase">
            New And Popular
          </h1>
        </div>

        <div className="p-2.5 mb-10 w-full flex flex-wrap justify-center gap-2 sm:h-[45px]">
          {filterOptions.map((option) => (
            <div className="mx-1.5 " key={option.label}>
              <button
                className={`uppercase border px-3 py-1 text-xs sm:text-sm cursor-pointer transition-colors duration-200 ${
                  activeFilter === option.filterValue
                    ? "bg-black text-white"
                    : "bg-transparent text-black"
                }`}
              >
                {option.label}
              </button>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-2 justify-items-center min-h-[700px] w-full">
          <div className="w-full max-w-[200px] sm:max-w-[220px] md:max-w-[250px] lg:max-w-[280px] xl:max-w-[334px] h-65 sm:max-h-78 md:max-h-96 lg:h-110 bg-[#D4D4D4] m-3 rounded-xl"></div>
          <div className="w-full max-w-[200px] sm:max-w-[220px] md:max-w-[250px] lg:max-w-[280px] xl:max-w-[334px] h-65 sm:max-h-78 md:max-h-96 lg:h-110 bg-[#D4D4D4] m-3 rounded-xl"></div>
          <div className="w-full max-w-[200px] sm:max-w-[220px] md:max-w-[250px] lg:max-w-[280px] xl:max-w-[334px] h-65 sm:max-h-78 md:max-h-96 lg:h-110 bg-[#D4D4D4] m-3 rounded-xl"></div>
          <div className="w-full max-w-[200px] sm:max-w-[220px] md:max-w-[250px] lg:max-w-[280px] xl:max-w-[334px] h-65 sm:max-h-78 md:max-h-96 lg:h-110 bg-[#D4D4D4] m-3 rounded-xl"></div>
          <div className="w-full max-w-[200px] sm:max-w-[220px] md:max-w-[250px] lg:max-w-[280px] xl:max-w-[334px] h-65 sm:max-h-78 md:max-h-96 lg:h-110 bg-[#D4D4D4] m-3 rounded-xl"></div>
          <div className="w-full max-w-[200px] sm:max-w-[220px] md:max-w-[250px] lg:max-w-[280px] xl:max-w-[334px] h-65 sm:max-h-78 md:max-h-96 lg:h-110 bg-[#D4D4D4] m-3 rounded-xl"></div>
          <div className="w-full max-w-[200px] sm:max-w-[220px] md:max-w-[250px] lg:max-w-[280px] xl:max-w-[334px] h-65 sm:max-h-78 md:max-h-96 lg:h-110 bg-[#D4D4D4] m-3 rounded-xl"></div>
          <div className="w-full max-w-[200px] sm:max-w-[220px] md:max-w-[250px] lg:max-w-[280px] xl:max-w-[334px] h-65 sm:max-h-78 md:max-h-96 lg:h-110 bg-[#D4D4D4] m-3 rounded-xl"></div>
          <div className="w-full max-w-[200px] sm:max-w-[220px] md:max-w-[250px] lg:max-w-[280px] xl:max-w-[334px] h-65 sm:max-h-78 md:max-h-96 lg:h-110 bg-[#D4D4D4] m-3 rounded-xl"></div>
          <div className="w-full max-w-[200px] sm:max-w-[220px] md:max-w-[250px] lg:max-w-[280px] xl:max-w-[334px] h-65 sm:max-h-78 md:max-h-96 lg:h-110 bg-[#D4D4D4] m-3 rounded-xl"></div>
          <div className="w-full max-w-[200px] sm:max-w-[220px] md:max-w-[250px] lg:max-w-[280px] xl:max-w-[334px] h-65 sm:max-h-78 md:max-h-96 lg:h-110 bg-[#D4D4D4] m-3 rounded-xl"></div>
          <div className="w-full max-w-[200px] sm:max-w-[220px] md:max-w-[250px] lg:max-w-[280px] xl:max-w-[334px] h-65 sm:max-h-78 md:max-h-96 lg:h-110 bg-[#D4D4D4] m-3 rounded-xl"></div>
          <div className="w-full max-w-[200px] sm:max-w-[220px] md:max-w-[250px] lg:max-w-[280px] xl:max-w-[334px] h-65 sm:max-h-78 md:max-h-96 lg:h-110 bg-[#D4D4D4] m-3 rounded-xl"></div>
          <div className="w-full max-w-[200px] sm:max-w-[220px] md:max-w-[250px] lg:max-w-[280px] xl:max-w-[334px] h-65 sm:max-h-78 md:max-h-96 lg:h-110 bg-[#D4D4D4] m-3 rounded-xl"></div>
          <div className="w-full max-w-[200px] sm:max-w-[220px] md:max-w-[250px] lg:max-w-[280px] xl:max-w-[334px] h-65 sm:max-h-78 md:max-h-96 lg:h-110 bg-[#D4D4D4] m-3 rounded-xl"></div>
          <div className="w-full max-w-[200px] sm:max-w-[220px] md:max-w-[250px] lg:max-w-[280px] xl:max-w-[334px] h-65 sm:max-h-78 md:max-h-96 lg:h-110 bg-[#D4D4D4] m-3 rounded-xl"></div>
          <div className="w-full max-w-[200px] sm:max-w-[220px] md:max-w-[250px] lg:max-w-[280px] xl:max-w-[334px] h-65 sm:max-h-78 md:max-h-96 lg:h-110 bg-[#D4D4D4] m-3 rounded-xl"></div>
          <div className="w-full max-w-[200px] sm:max-w-[220px] md:max-w-[250px] lg:max-w-[280px] xl:max-w-[334px] h-65 sm:max-h-78 md:max-h-96 lg:h-110 bg-[#D4D4D4] m-3 rounded-xl"></div>
          <div className="w-full max-w-[200px] sm:max-w-[220px] md:max-w-[250px] lg:max-w-[280px] xl:max-w-[334px] h-65 sm:max-h-78 md:max-h-96 lg:h-110 bg-[#D4D4D4] m-3 rounded-xl"></div>
          <div className="w-full max-w-[200px] sm:max-w-[220px] md:max-w-[250px] lg:max-w-[280px] xl:max-w-[334px] h-65 sm:max-h-78 md:max-h-96 lg:h-110 bg-[#D4D4D4] m-3 rounded-xl"></div>
          <div className="w-full max-w-[200px] sm:max-w-[220px] md:max-w-[250px] lg:max-w-[280px] xl:max-w-[334px] h-65 sm:max-h-78 md:max-h-96 lg:h-110 bg-[#D4D4D4] m-3 rounded-xl"></div>
          <div className="w-full max-w-[200px] sm:max-w-[220px] md:max-w-[250px] lg:max-w-[280px] xl:max-w-[334px] h-65 sm:max-h-78 md:max-h-96 lg:h-110 bg-[#D4D4D4] m-3 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default BodyContentShimmer;

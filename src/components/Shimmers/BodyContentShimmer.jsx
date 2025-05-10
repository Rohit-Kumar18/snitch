const BodyContentShimmer = (props) => {
  const { filterOptions, activeFilter } = props;
  return (
    <div className="pt-10 flex justify-center bg-[#E7E7E7] ">
      <div className="w-full items-center justify-items-center mx-2">
        <div className="mb-6 mt-4  flex justify-center w-full">
          <h1 className="font-black text-4xl uppercase">New And Popular</h1>
        </div>

        <div className="p-2.5 mb-10 flex  justify-center w-full h-[45px]">
          {filterOptions.map((option) => (
            <div className="mx-1.5 " key={option.label}>
              <button
                className={`uppercase border px-2 cursor-pointer ${
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center min-h-[700px] w-full">
          <div className="itemcard w-[334px] h-[505px] bg-[#D4D4D4] m-3 rounded-xl"></div>
          <div className="itemcard w-[334px] h-[505px] bg-[#D4D4D4] m-3 rounded-xl"></div>
          <div className="itemcard w-[334px] h-[505px] bg-[#D4D4D4] m-3 rounded-xl"></div>
          <div className="itemcard w-[334px] h-[505px] bg-[#D4D4D4] m-3 rounded-xl"></div>
          <div className="itemcard w-[334px] h-[505px] bg-[#D4D4D4] m-3 rounded-xl"></div>
          <div className="itemcard w-[334px] h-[505px] bg-[#D4D4D4] m-3 rounded-xl"></div>
          <div className="itemcard w-[334px] h-[505px] bg-[#D4D4D4] m-3 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default BodyContentShimmer;

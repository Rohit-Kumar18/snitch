const ShopSize = () => {
  return (
    <div className="flex justify-center items-center mb-4 px-4 sm:px-0">
      <div className="w-full">
        <div className="mb-6 mt-4 flex justify-center text-center w-full">
          <h1 className="font-black text-2xl sm:text-4xl uppercase">
            SHOP YOUR SIZE
          </h1>
        </div>
        <div className="w-full flex justify-center ">
          <img
            className="w-full sm:w-[90%] max-w-[1200px] h-auto  object-cover object-center"
            src="https://cdn.shopify.com/s/files/1/0420/7073/7058/files/lucky_size_banner_home.jpg?v=1745244500"
            alt="SizeBanner"
          />
        </div>
      </div>
    </div>
  );
};

export default ShopSize;

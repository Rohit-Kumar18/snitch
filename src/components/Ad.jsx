import { useEffect, useState } from "react";
import AdShimmer from "./Shimmers/AdShimmer";
import { Link } from "react-router-dom";

const Ad = () => {
  const [adData, setAdData] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCount = 4;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://u6dwgkszzd.ap-south-1.awsapprunner.com/v3/home/carousel/?platform=web"
    );
    const json = await data.json();

    setAdData(json);
    if (json.length > 0) setCurrentIndex(0);
    // console.log(json);
  };

  useEffect(() => {
    if (adData.length <= visibleCount) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % adData.length);
    }, 9000);

    return () => clearInterval(interval);
  }, [adData]);

  const getVisibleAds = () => {
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % adData.length;
      result.push(adData[index]);
    }
    return result;
  };

  // if (adData.length === 0) {
  //   return <AdShimmer />;
  // }

  return adData.length === 0 ? (
    <AdShimmer />
  ) : (
    <div className="overflow-hidden mt-4 w-full h-95 lg:h-93">
      <div className="flex h-full flex-nowrap transition-transform duration-700 ease-in-out relative">
        {getVisibleAds().map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-[44%] h-auto lg:h-[369px] flex-shrink-0 lg:flex-shrink-1 overflow-hidden"
          >
            <Link to={`/search/latest like printed t-shirts`}>
              <div className="px-4 sm:px-6 md:px-10 w-[70%] max-w-md h-12 sm:h-16 hover:cursor-pointer hover:shadow-2xl shadow-white border border-white absolute inset-0 m-auto bg-black flex items-center justify-center">
                <h1 className="text-sm sm:text-base font-medium sm:font-extrabold uppercase text-white tracking-widest text-center">
                  Shop latest fashion
                </h1>
              </div>
            </Link>
            <img
              src={item?.media_url}
              alt="ad_img"
              className="w-full h-full object-cover object-center cursor-pointer aspect-video"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ad;

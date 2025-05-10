import { useEffect, useState } from "react";
import FeaturedShimmer from "./Shimmers/FeaturedShimmer";
import { Link } from "react-router-dom";

const FeaturedCard = () => {
  const [featuredData, setFeaturedData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [imagesLoaded, setImagesLoaded] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://u6dwgkszzd.ap-south-1.awsapprunner.com/v3/home/featured-category/?platform=web"
    );
    const json = await data.json();
    setFeaturedData(json);
    console.log(json);
    setLoading(false);
  };

  const handleImageLoad = (id) => {
    setImagesLoaded((prev) => ({ ...prev, [id]: true }));
  };

  // if (loading === true) {
  //   return <FeaturedShimmer />;
  // }

  return loading === true ? (
    <FeaturedShimmer />
  ) : (
    <div className="flex justify-center items-center mt-4 mb-4 ">
      <div className="w-[90%]">
        <div className="flex justify-center items-center mt-4">
          <h1 className="font-black text-4xl uppercase">Featured Categories</h1>
        </div>
        <div className="flex flex-wrap my-4 items-center justify-center">
          {featuredData.map((item) => (
            <Link to={`/featuredContent/${item?.collection_name}`}>
              <div
                className=" m-2 w-64 relative rounded-3xl group hover:cursor-pointer"
                key={item?.id}
              >
                {!imagesLoaded[item?.id] && (
                  <div className=" w-64 h-[333px] rounded-3xl bg-[#eef0f5]"></div>
                )}

                <img
                  className={`w-full object-center rounded-3xl object-cover transition-transform duration-300 group-hover:scale-90 ${
                    !imagesLoaded[item?.id] ? "hidden" : ""
                  }}`}
                  src={item?.media_url}
                  alt="featuredImg"
                  onLoad={() => handleImageLoad(item?.id)}
                />

                {imagesLoaded[item?.id] && (
                  <p className="absolute inset-0 flex justify-center mt-[68%] text-2xl font-black text-white">
                    {item?.name}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;

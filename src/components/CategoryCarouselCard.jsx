import { Link } from "react-router-dom";

const CategoryCarouselCard = (props) => {
  const { categoryData } = props;
  return (
    <div className="m-auto p-2 w-28 sm:w-32">
      <div className="w-full aspect-square rounded-xl group relative ">
        <Link to={`/carousel/${categoryData?.category}`}>
          <img
            className=" w-full h-full object-cover rounded-xl object-center hover:border cursor-pointer transition-transform duration-300 group-hover:scale-110"
            src={categoryData?.image_url}
            alt="category_img"
          />
        </Link>
      </div>
      <div className="mt-2 text-center overflow-hidden">
        <h4 className="font-bold font-mono text-xs sm:text-sm truncate">
          {categoryData?.category}
        </h4>
      </div>
    </div>
  );
};

export default CategoryCarouselCard;

import { Link } from "react-router-dom";

const CategoryCarouselCard = (props) => {
  const { categoryData } = props;
  return (
    <div className="m-auto p-1.5 ">
      <div className="w-32 h-32 rounded-xl group relative ">
        <Link to={`/carousel/${categoryData?.category}`}>
          <img
            className=" w-full object-center rounded-xl object-cover hover:border cursor-pointer transition-transform duration-300 group-hover:scale-110"
            src={categoryData?.image_url}
            alt="category_img"
          />
        </Link>
      </div>
      <div className="mt-2 h-6 w-34 text-center  overflow-hidden">
        <h4 className="font-bold font-mono">{categoryData?.category}</h4>
      </div>
    </div>
  );
};

export default CategoryCarouselCard;

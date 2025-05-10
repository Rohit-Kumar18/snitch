import CategoryCarousel from "./CategoryCarousel";
import Ad from "./Ad";
import Body from "./Body";

const OuterBody = () => {
  return (
    <div>
      <CategoryCarousel />
      <Ad />
      <Body />
    </div>
  );
};

export default OuterBody;

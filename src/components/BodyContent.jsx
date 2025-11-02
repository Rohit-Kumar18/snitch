import ItemCard from "./ItemCard";
import BodyContentShimmer from "./Shimmers/BodyContentShimmer";
import { useEffect, useState, useRef } from "react";

const BodyContent = (props) => {
  const { itemsData, setFilterValue } = props;
  const [originalData, setOriginalData] = useState([]);
  const [cardData, setCardData] = useState([]);
  const [activeFilter, setActiveFilter] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    setOriginalData(itemsData);
    setCardData(itemsData);
  }, [itemsData]);

  useEffect(() => {
    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [cardData]);

  const handleFilterClick = (filterValue) => {
    setActiveFilter(filterValue);
    setFilterValue(filterValue);
  };

  const filterOptions = [
    { label: "All", filterValue: null },
    { label: "Shirts", filterValue: "Shirts" },
    { label: "T-Shirts", filterValue: "T-Shirts" },
    { label: "Trousers", filterValue: "Trousers" },
    { label: "Jeans", filterValue: "Jeans" },
    // { label: "Cargo", filterValue: "Cargo" },
    { label: "Jackets", filterValue: "Jackets" },
    { label: "Sweaters", filterValue: "Sweaters" },
    // { label: "Co-ords", filterValue: "Co-ords" },
    // { label: "Bags", filterValue: "Bags" },
  ];

  {
    /*
    const handleFilterClick = (filterValue) => {
    if (filterValue === null) {
      setCardData(originalData);
    } else {
      const filteredData = originalData.filter(
        (card) => card?.shopify_product_type === filterValue
      );
      setCardData(filteredData);
    }
  };

  if (cardData.length === 0) {
    return (
      <BodyContentShimmer
        activeFilter={activeFilter}
        filterOptions={filterOptions}
      />
    );
  }
    */
  }

  return cardData.length === 0 ? (
    <BodyContentShimmer
      activeFilter={activeFilter}
      filterOptions={filterOptions}
    />
  ) : (
    <div ref={sectionRef} className="pt-10 flex justify-center bg-[#E7E7E7]">
      {/* <div className="bg-white w-[22%] h-[900px] ml-[4%] mr-[2.5%] mt-20">
          <div className="p-2.5">
            <h1>Filters</h1>
          </div>
        </div> */}

      <div className="w-full px-4 sm:px-6">
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
                onClick={() => {
                  setFilterValue(option.filterValue);
                  handleFilterClick(option.filterValue);
                  console.log(option.filterValue);
                }}
              >
                {option.label}
              </button>
            </div>
          ))}
          {/*  <--- Instead of writing this again and again i followed the above approach. Creating an array and mapping over its values --->
          <div className="mx-1.5 ">
            <button
              className="uppercase border px-2 bg-black text-white cursor-pointer"
              onClick={() => {
                console.log("All clicked");
                setCardData(originalData);
                console.log(originalData);
              }}
            >
              All
            </button>
          </div>
          <div className="mx-1.5 ">
            <button
              className="uppercase border px-2 bg-black text-white cursor-pointer"
              onClick={() => {
                console.log("Shirts clicked");
                // console.log(cardData);
                const filteredData = originalData.filter(
                  (card) => card?.shopify_product_type === "Shirts"
                );

                setCardData(filteredData);
              }}
            >
              Shirts
            </button>
          </div>
          <div className="mx-1.5 ">
            <button
              className="uppercase border px-2 bg-black text-white cursor-pointer"
              onClick={() => {
                console.log("T-Shirts clicked");
                const filteredData = originalData.filter(
                  (card) => card?.shopify_product_type === "T-Shirts"
                );

                setCardData(filteredData);
              }}
            >
              T-Shirts
            </button>
          </div> */}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-2 justify-items-center min-h-[700px] w-full">
          {/* {itemsData.map((item) => (
              <ItemCard key={item.shopify_product_id} productData={item} />
            ))} */}

          {cardData.map((item) => (
            <ItemCard key={item.shopify_product_id} productData={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BodyContent;

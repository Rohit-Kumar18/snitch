import { Link } from "react-router-dom";

const Footer = () => {
  const topCategories = [
    "T-shirts",
    "Shirts",
    "Joggers",
    "Shorts",
    "Trousers",
    "Sweatshirts & Hoodies",
    "Sweaters",
    "Bags",
    "Accessories",
    "Belts",
    "Blazers",
    "Boxers",
    "Cargo Pants",
    "Chinos",
    "Co-ords",
    "Hoodies",
    "Jackets",
    "Jeans",
    "Night Suit & Pyjamas",
    "Overshirt",
    "Perfumes",
    "Shoes",
    "Sunglasses",
  ];

  const popularSearches = [
    "shirts for men",
    "jackets for men",
    "t-shirts for men",
    "cargo",
    "baggy jeans",
    "mens jeans",
    "polo t-shirts",
    "hoodie",
    "joggers for men",
    "baggy jeans mens",
    "straight fit jeans",
    "printed shirts for men",
    "varsity jacket",
    "formal pants for men",
    "polo t-shirts for men",
    "formal trousers for men",
    "sweatshirt",
    "white shirt for men",
    "black shirt",
    "korean pants",
    "baggy pants",
    "trousers for men",
    "cargo jeans",
    "oversized shirt",
    "denim",
    "linen pants",
    "crochet shirt",
    "old money outfits",
    "branded shirts for men",
    "boutiques near me",
    "check shirt for men",
    "casual shirts for men",
    "chinos for men",
    "formal shirts for men",
    "printed shirts",
    "mens tshirt",
    "linen shirt",
    "denim jeans",
    "baggy pants men",
    "varsity jacket mens",
    "black t-shirt men",
    "club wear for men",
  ];

  const popularAccessories = [
    "Ravenwood Braided Bracelet",
    "EternaWrap Black Braclet",
    "Obsidian Blue Braided Bracelet",
    "Rustic Revolve Brown Braided Braclet",
    "Divine Skull Cross Chain",
    "Bar of Luxe Chain",
    "Rogue Bullet Pendant",
    "Pirate's Anchor Steel Chain",
    "Debonair Black Bracelet",
    "Solid Block SS Chain",
    "Hyphenated Weave Braided Bracelet",
    "Metal Black Trio Bracelet",
    "Abstract Trio Metal Bracelet",
    "Rattle Square Chain",
    "Blacksmith Nail Braided Bracelet",
    "Duo Gold & Silver SS Chain",
    "Rover Wrap Black Braclet",
    "Mafia SS Chain",
    "Nob Nail Edge Braided Bracelet",
    "Hexa Beads Bracelet",
    "Bold Swirl Bracelet",
    "Grey Cuboid SS Chain",
    "Midnight Eclipse Braid Bracelet",
    "Black Cuboid SS Chain",
    "Wavecrest Dollar Brown Bracelet",
  ];

  return (
    <div className="w-full h-full bg-[#E7E7E7] ">
      <div className="pb-20">
        <div className="my-6 h-[106px] items-center flex justify-center text-center w-full border-b-3 border-t-3">
          <h1 className="font-black text-2xl sm:text-4xl uppercase">
            More About Shopping at Snitch
          </h1>
        </div>
        <div className="h-14 mt-15 mb-6 flex justify-center items-center">
          <h2 className="uppercase font-black text-xl sm:text-2xl underline">
            TOP CATEGORIES
          </h2>
        </div>
        <div className="w-[80%] flex flex-wrap ml-[10%] items-center justify-center mt-1">
          {topCategories.map((category, index) => (
            <div
              key={index}
              className="border px-2 uppercase m-3 hover:cursor-pointer hover:bg-black hover:text-white"
            >
              <Link to={`/search/${category}`}>{category}</Link>
            </div>
          ))}
        </div>

        <div className="h-14 flex mt-15 mb-6 justify-center items-center">
          <h2 className="uppercase font-black text-xl sm:text-2xl underline">
            Popular Searches
          </h2>
        </div>
        <div className="w-[80%] flex flex-wrap ml-[10%] items-center justify-center mt-1">
          {popularSearches.map((search, index) => (
            <div
              key={index}
              className="border px-2 m-3 hover:cursor-pointer hover:bg-black hover:text-white"
            >
              <Link to={`/search/${search}`}>{search}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;

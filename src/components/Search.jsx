import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!searchText.trim()) {
      return;
    }
    const encodedSearch = encodeURIComponent(searchText.trim());
    navigate(`/search/${encodedSearch}`);
  };

  return (
    // <div className=" w-[386px] h-[38px] flex">
    //   <div className="search w-[70%] h-full">
    //     <input
    //       type="text"
    //       className="search-box w-full h-full border p-2"
    //       value={searchText}
    //       onChange={(e) => setSearchText(e.target.value)}
    //     />
    //   </div>
    //   <button
    //     className="border ml-3 px-2 hover:bg-black hover:text-white hover:cursor-pointer"
    //     onClick={() => {
    //       handleSearch();
    //     }}
    //   >
    //     {/* <Link to={`/search/${searchText}`}>Search</Link> */}
    //     Search
    //   </button>
    // </div>

    // Enter press on submit is only applicable in the form structure
    <form
      onSubmit={handleSearch}
      className="border relative max-w-[346px] mx-auto my-4 h-10"
    >
      <input
        type="text"
        className="search-box w-full h-full p-2 text-sm sm:text-base"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search..."
      />

      <button type="submit" className="absolute top-2 right-3 cursor-pointer">
        <HiOutlineSearch className="text-xl" />
      </button>
    </form>
  );
};

export default Search;

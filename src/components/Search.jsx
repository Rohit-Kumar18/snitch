import { useState } from "react";
// import { Link } from "react-router-dom";
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
      className="w-full sm:mx-6 md:w-[346px] h-10 flex flex-col sm:flex-row items-center gap-2 sm:gap-0"
    >
      <div className="search w-full sm:w-2/3 sm:h-2/3 h-full">
        <input
          type="text"
          className="search-box w-full h-full border p-2 text-sm sm:text-base"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search..."
        />
      </div>
      <button
        type="submit"
        className="border sm:h-auto p-1.5 sm:ml-3 text-sm sm:text-sm hover:bg-black hover:text-white cursor-pointer w-full sm:w-auto"
      >
        Search
      </button>
    </form>
  );
};

export default Search;

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { CountryContext } from "../context/Context";

const Search = () => {
  const { setCountrySearch } = useContext(CountryContext);

  return (
    <div className="flex items-center gap-5 bg-skin-search desktop:w-[30rem] rounded-md desktop:h-14 h-12 px-8 shadow-search">
      <MagnifyingGlassIcon className="desktop:w-5 desktop:h-5 w-4 h-4" />
      <input
        type="text"
        placeholder="Search for a country..."
        className="w-full focus:outline-none desktop:text-lg text-skin-muted"
        onChange={(e) => {
          if (setCountrySearch) {
            setCountrySearch(e.target.value);
          }
        }}
      />
    </div>
  );
};

export default Search;

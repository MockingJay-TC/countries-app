import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Search = () => {
  return (
    <div className="flex items-center gap-5 bg-skin-search w-[30rem] rounded-md h-14 px-8 shadow-search">
      <MagnifyingGlassIcon className="w-5 h-5" />
      <input
        type="text"
        placeholder="Search for a country..."
        className="w-full focus:outline-none text-lg text-skin-muted"
      />
    </div>
  );
};

export default Search;
import { MoonIcon } from "@heroicons/react/24/outline";
const Navbar = () => {
  return (
    <nav className="w-full h-20 shadow-navbar flex items-center justify-between px-7  desktop:px-32 xxl:px-96 absolute z-50 bg-skin-navbar">
      <h1 className="desktop:text-2xl text-sm font-extrabold text-skin-base">
        Where in the world?
      </h1>
      <div className="flex items-center gap-4 group">
        <MoonIcon className="desktop:h-5 desktop:w-5 h-4 w-4" />
        <h3 className="text-skin-base font-semibold desktop:text-base  text-xs">
          Dark Mode
        </h3>
      </div>
    </nav>
  );
};

export default Navbar;

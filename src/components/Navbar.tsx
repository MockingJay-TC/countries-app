import { MoonIcon } from "@heroicons/react/24/outline";
const Navbar = () => {
  return (
    <nav className="w-full h-20 shadow-navbar flex items-center justify-between px-32 absolute z-50 bg-skin-navbar">
      <h1 className="text-2xl font-extrabold text-skin-base">
        Where in the world?
      </h1>
      <div className="flex items-center gap-4 group">
        <MoonIcon className="h-5 w-5" />
        <h3 className="text-skin-base font-semibold text-base ">Dark Mode</h3>
      </div>
    </nav>
  );
};

export default Navbar;

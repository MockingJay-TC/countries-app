import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { ThemeContext } from "../context/Context";
import { useContext } from "react";
const Navbar = () => {
  const { setTheme, theme } = useContext(ThemeContext);

  const handleTheme = () => {
    if (setTheme) {
      setTheme(!theme);
    }
  };

  return (
    <nav className="w-full h-20 shadow-navbar flex items-center justify-between px-7  desktop:px-32 xxl:px-96 absolute z-50 bg-skin-navbar">
      <h1 className="desktop:text-2xl text-sm font-extrabold text-skin-base">
        Where in the world?
      </h1>
      <div
        className="flex items-center gap-4 group cursor-pointer"
        onClick={() => handleTheme()}
      >
        {theme ? (
          <SunIcon className="desktop:h-5 desktop:w-5 h-4 w-4 text-skin-base" />
        ) : (
          <MoonIcon className="desktop:h-5 desktop:w-5 h-4 w-4 text-skin-base" />
        )}

        <h3 className="text-skin-base font-semibold desktop:text-base  text-xs">
          Dark Mode
        </h3>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./context/Context";

interface ParentCompProps {
  childComp?: React.ReactNode;
}

const Layout: React.FC<ParentCompProps> = ({ childComp }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`font-nunito w-full h-screen ${theme ? "theme-dark" : ""} `}
    >
      <Navbar />
      {childComp}
    </div>
  );
};

export default Layout;

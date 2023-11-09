import React from "react";
import Navbar from "./components/Navbar";

interface ParentCompProps {
  childComp?: React.ReactNode;
}

const Layout: React.FC<ParentCompProps> = ({ childComp }) => {
  return (
    <div className="font-nunito w-full h-screen">
      <Navbar />
      {childComp}
    </div>
  );
};

export default Layout;

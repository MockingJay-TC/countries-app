import React from "react";

interface ParentCompProps {
  childComp?: React.ReactNode;
}

const Layout: React.FC<ParentCompProps> = ({ childComp }) => {
  return <div>{childComp}</div>;
};

export default Layout;

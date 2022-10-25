import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../../Components/Navigation/Navigation";

const MainLayout = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;

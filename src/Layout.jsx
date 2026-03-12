
import React from "react";
import Nav from "./Nav/Nav";
import { Outlet } from "react-router-dom";
import "./Layout.css"; // add background here
import Service from "./Service/Service";

// import BallpitWrapper from "./BallpitWrapper";

const Layout = () => {
  return (
    <div className="app-container">  {/* background applied here */}
      <Nav />
      {/* <BallpitWrapper/> */}
      <Outlet />

    </div>
  



  );
};

export default Layout;

import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className='sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;

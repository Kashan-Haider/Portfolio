import React from "react";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Navbar from "./components/menu/Navbar";
import Work from "./components/work/Work";
import HorizontalTextAnimation from "./components/horizontal-text-animation/HorizontalTextAnimation";

const page = () => {
  return (
    <div className="text-white w-screen overflow-hidden">
      <Navbar/>
      <Home />
      <About />
      <HorizontalTextAnimation/>
      <Work/>
    </div>
  );
};

export default page;

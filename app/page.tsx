import React from "react";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Navbar from "./components/menu/Navbar";
import Work from "./components/work/Work";
import HorizontalTextAnimation from "./components/horizontal-text-animation/HorizontalTextAnimation";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";

const page = () => {
  return (
    <div className="text-white w-screen">
      <Navbar />
      <Home />
      <About />
      <HorizontalTextAnimation />
      <Work />
      <Testimonials/>
      <Footer/>
    </div>
  );
};

export default page;

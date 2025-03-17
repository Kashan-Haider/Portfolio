"use client";
import React from "react";
import Menu from "./components/menu/Menu";
import { Link } from "react-scroll";
import About from "./components/about/About";
import Home from "./components/home/Home";

const page = () => {
  return (
    <div className="text-white">
      <div className="absolute w-full">
        <div className="flex items-center justify-between p-5 md:p-10">
          <Link
            to={"home"}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="cursor-pointer"
          >
            The Portfolio
          </Link>
          <Menu />
        </div>
      </div>
      <Home />
      <About />
    </div>
  );
};

export default page;

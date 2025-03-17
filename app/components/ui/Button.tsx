"use client";
import React from "react";
import { Link } from "react-scroll";

const Button = ({title, element}:{title:string, element:string}) => {
  return (
    <div className="mt-10 relative  border border-darkGray rounded-lg group cursor-pointer w-fit">
      <div className="bg-darkGray flex absolute w-0 h-full rounded-lg top-0 left-0 group-hover:w-full transition-all duration-300"></div>
      <Link
        to={element}
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        className="relative z-10 flex items-center gap-3 group-hover:text-black duration-300 px-8 py-2"
      >
        {title}
      </Link>
    </div>
  );
};

export default Button;

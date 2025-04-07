import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const Experience = (props: {
  title: string;
  company: string;
  description: string;
  date: string;
  details: string[];
  isOpen: boolean;
}) => {
  return (
    <div
      className={`text-primaryText flex flex-col gap-5 md:hover:bg-[#ffffff0e] p-5 md:py-8 transition-all duration-500 ${
        props.isOpen ? "bg-[#ffffff0e]" : ""
      } rounded-3xl `}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-xl md:text-3xl font-bold">{props.title}</h1>
        <FontAwesomeIcon icon={props.isOpen ? faAngleDown : faAngleUp} />
      </div>
      <div
        className={`ftransition-all duration-500 text-xl ${
          props.isOpen
            ? "max-h-[1200px] "
            : "overflow-hidden max-h-0 "
        }`}
      >
        <div className={`flex flex-col gap-3 transition-all duration-1000 text-xl ${
          props.isOpen
            ? "opacity-100"
            : "opacity-0"
        }`}>
        <div className="font-semibold flex flex-col md:flex-row gap-2 md:items-center justify-between text-base md:text-xl">
          <p className="font-semibold">{props.company}</p>
          <p>{props.date}</p>
        </div>
        <p className="text-base md:text-xl ">{props.description}</p>
        <ul className="text-base md:text-xl">
          {props.details.map((item: string, index: number) => {
            return (
              <div className="flex gap-3" key={index}>
                <div className="min-w-[6px] min-h-[4px] max-w-[6px] max-h-[4px] mt-3 rounded-full bg-white"></div>
                <li>{item}</li>
              </div>
            );
          })}
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;

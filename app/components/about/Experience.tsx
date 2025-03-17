import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
    <div className="text-primaryText flex flex-col gap-5 hover:bg-[#ffffff0e] p-5 md:p-10 rounded-3xl transition-all duration-500">
      <div className="flex justify-between items-center">
      <h1 className="text-xs md:text-3xl font-bold">{props.title}</h1>
      <FontAwesomeIcon icon={props.isOpen? faAngleDown : faAngleUp} />
      </div>
      <div 
        className={`flex flex-col gap-3 transition-all duration-500 ${
          props.isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="font-semibold flex items-center justify-between">
          <p className="font-semibold">{props.company}</p>
          <p>{props.date}</p>
        </div>
        <p>{props.description}</p>
        <ul>
          {props.details.map((item: string, index: number) => {
            return (
              <div className="flex items-center gap-3" key={index}>
                <div className="w-[4px] h-[4px] rounded-full bg-white"></div>
                <li>{item}</li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
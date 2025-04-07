import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = (props: {
  title: string;
  description: string;
  image_path: string;
  vercel?: string;
  github?: string;
}) => {
  return (
    <div className="bg-gradient-to-b from-dark via-dark to-[#29292983] flex flex-col rounded-2xl overflow-hidden md:w-[500px] md:h-[600px] group">
      <div className="md:h-[400px] w-full overflow-hidden">
        <Image
          className="group-hover:scale-110 transition-all duration-300"
          src={props.image_path}
          width={500}
          height={500}
          alt={props.title}
        />
      </div>
      <div className="text-primaryText py-5 px-3 md:py-8 flex flex-col justify-between h-full">
        <h1 className="text-xl md:text-3xl font-semibold">{props.title}</h1>
        <p>{props.description}</p>
        <div className="flex justify-between ">
        <div>{props.vercel && <Link className="border border-primaryText px-4 py-1 rounded-3xl hover:bg-primaryDark hover:border-primaryDark transition-all duration-300" href={props.vercel}>Live Site</Link>}</div>
        <div>{props.github && <Link className="border border-primaryText px-4 py-1 rounded-3xl hover:bg-primaryDark hover:border-primaryDark transition-all duration-300" href={props.github}>Github</Link>}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

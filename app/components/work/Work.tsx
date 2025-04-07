import React from "react";
import ProjectCard from "./ProjectCard";

const Work = () => {
  interface ProjectDataType {
    title: string;
    description: string;
    image_path: string;
    vercel?: string;
    github?: string;
  }
  const projects: ProjectDataType[] = [
    {
      title: "Cars Recommendation Model",
      description: "A Streamlit-based web application leveraging Pinecone as the vector database for semantic search and Gemini LLM for Retrieval-Augmented Generation (RAG). This model is tailored for the Pakistani used car market, offering personalized car recommendations based on user-defined criteria such as budget, mileage, color, engine type, and features.",
      image_path: "/projects/car-recommendation.png",
      github: "https://github.com/Kashan-Haider/car-recommendation-model",
    },
    {
      title: "Dine Market",
      description: "An e-commerce platform developed using Next.js, TypeScript, and Tailwind CSS, with a headless CMS powered by Sanity.io. The website provides an intuitive, responsive shopping experience, integrating modern web development practices with a focus on scalability and performance optimization.",
      image_path: "/projects/dine-market.png",
      vercel: "https://dine-market-psi.vercel.app/",
      github: "https://github.com/Kashan-Haider/dine-market",
    },
    {
      title: "Scribbler's Corner",
      description: "A dynamic blogging platform template built with Next.js, TypeScript, Tailwind CSS, and Sanity.io for flexible content management. The project integrates Clark for enhanced security, ensuring a secure user authentication process and safeguarding sensitive data. The website is designed to provide a smooth, customizable experience for both authors and readers.",
      image_path: "/projects/scribblers-corner.png",
      vercel: "https://scribblers-corner.vercel.app",
      github: "https://github.com/Kashan-Haider/scribblers-corner",
    },
    {
      title: "Portfolio Website (Previous)",
      description: "A personal portfolio website developed using Next.js, Tailwind CSS, and Aceternity for decentralized identity verification. This site showcases a variety of projects and demonstrates the integration of modern web technologies for creating a fast, responsive, and visually appealing personal portfolio.",
      image_path: "/projects/portfolio.png",
      vercel: "https://portfolio-awanpro786-gmailcom.vercel.app/",
      github: "https://github.com/Kashan-Haider/Portfolio-website/tree/main",
    },
  ];
  

  return (
    <div id="work" className="p-5 md:p-10 lg:px-20">
      <h1 className="text-primaryText text-3xl md:text-4xl lg:text-6xl font-bold capitalize mb-5 md:mb-10 lg:mb-20">
        <span className="text-darkGray"> Featured </span> <br /> works
      </h1>

      <div className="flex items-center justify-center gap-5 flex-wrap">
        {projects.map((item:ProjectDataType, index:number)=>{
          return(
            <ProjectCard key={index} title={item.title} description={item.description} image_path={item.image_path} github={item.github} vercel={item.vercel} />
          )
        })}
      </div>
    </div>
  );
};

export default Work;

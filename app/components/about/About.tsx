import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SlideUpAnimated from "../ui/SlideUpAnimated";
import FadeInAnimated from "../ui/FadeInAnimated";
import Experience from "./Experience";

const About = () => {
  type ExperienceType = {
    title: string;
    company: string;
    description: string;
    date: string;
    details: string[];
  };
  const aboutRef = useRef(null);
  const [isOpen, setIsOpen] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleMouseMove = (event: MouseEvent) => {
    // Don't process mouse movements on mobile
    if (isMobile) return;
    
    if (!aboutRef.current) return;

    // Get the bounding rectangle of the about section
    const ref = aboutRef.current as HTMLDivElement;
    const rect = ref.getBoundingClientRect();

    // Calculate cursor position relative to the about section
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Only update cursor if mouse is within the about section
    const cursor = document.getElementById("about-cursor");
    if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
      gsap.to("#about-cursor", {
        x: x - 10,
        y: y - 10,
        duration: 1,
        ease: "power4.out",
        autoAlpha: 1,
      });

      if (cursor) cursor.style.display = "block";
    } else {
      // Hide cursor when outside the about section
      if (cursor) cursor.style.display = "none";
    }
  };

  // Check if we're on mobile
  const checkMobile = () => {
    setIsMobile(window.innerWidth < 1024); // 768px is the md breakpoint in Tailwind
  };

  const experiences: ExperienceType[] = [
    {
      title: "React JS Developer",
      company: "POSTYFY | NIC",
      description:
        "Designed and developed dynamic web applications with modern UI libraries and animation frameworks.",
      date: "Nov 2022 - Apr 2023",
      details: [
        "Created responsive and visually appealing web designs using React and animation libraries.",
        "Explored and integrated popular UI libraries for enhanced user interfaces.",
        "Collaborated with backend developers to seamlessly integrate frontend with backend services.",
      ],
    },
    {
      title: "Blockchain Developer Intern",
      company: "VANAR",
      description:
        "Explored blockchain technology and developed a Runner-up DApp as part of an internship program.",
      date: "May 2023 - Aug 2023",
      details: [
        "Gained comprehensive knowledge of blockchain fundamentals and smart contract development.",
        "Built and deployed smart contracts using Solidity and Hardhat.",
        "Integrated smart contracts with React applications for full-stack decentralized solutions.",
      ],
    },
    {
      title: "MERN Stack Developer",
      company: "Freelance",
      description:
        "Developed and deployed full-stack web applications using the MERN stack for various clients, delivering scalable and efficient solutions.",
      date: "Sep 2023 - Present",
      details: [
        "Designed and implemented RESTful APIs using Node.js and Express.js.",
        "Developed dynamic and responsive user interfaces using React.js and Redux/Context API.",
        "Managed and optimized databases with MongoDB, ensuring data integrity and performance.",
        "Deployed applications to cloud platforms (e.g., Heroku, AWS, Netlify) and configured CI/CD pipelines.",
        "Collaborated directly with clients to understand requirements and deliver tailored solutions.",
        "Implemented authentication and authorization mechanisms for secure user access.",
      ],
    },
  ];

  useEffect(() => {
    // Check if mobile on mount and window resize
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    // Only add mousemove listener if not mobile
    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    
    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile]);

  return (
    <div
      id="about"
      className="relative p-5 md:p-10 lg:p-20"
      ref={aboutRef}
    >
      {!isMobile && (
        <div
          id="about-cursor"
          className="absolute w-[20px] h-[20px] bg-white top-0 left-0 rounded-full z-10 pointer-events-none mix-blend-difference opacity-0"
        ></div>
      )}
      <div className="grid lg:grid-cols-3 justify-between gap-5 md:gap-10 text-white">
        <div className="col-span-2 flex flex-col gap-5 md:gap-10 cursor-default">
          <div 
            className="flex flex-col gap-5 md:gap-10"
            onMouseEnter={() => {
              if (!isMobile) {
                gsap.to("#about-cursor", {
                  scale: 8,
                  duration: 0.3,
                });
              }
            }}
            onMouseLeave={() => {
              if (!isMobile) {
                gsap.to("#about-cursor", {
                  scale: 1,
                  duration: 0.3,
                });
              }
            }}
          >
            <SlideUpAnimated>
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
                Live the Life as <span className="text-white">You Want</span>
              </h1>
            </SlideUpAnimated>
            <FadeInAnimated>
              <p className="text-xl md:text-2xl lg:text-4xl ">
                As a versatile web developer proficient in React, JavaScript,
                TypeScript, Next.js, MongoDB, Express, Generative AI, and
                Blockchain, I engineer sophisticated, high-performance solutions
                with a sharp focus on user experience and scalability. Driven by
                curiosity and a relentless pursuit of innovation, I craft
                cutting-edge applications that seamlessly blend creativity and
                functionality to solve real-world challenges.
              </p>
            </FadeInAnimated>
          </div>
          <div className="flex flex-col gap-5">
            {experiences.map((experience: ExperienceType, index: number) => {
              return (
                <div key={index} onClick={() => setIsOpen(index)}>
                  <Experience
                    title={experience.title}
                    company={experience.company}
                    description={experience.description}
                    date={experience.date}
                    details={experience.details}
                    isOpen={isOpen === index}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="hidden lg:block">
        <FadeInAnimated>
          <div className="sticky top-5 col-span-1">
            <Image
              className="w-[300px] sm:w-[350px] md:w-full h-full rounded-2xl"
              src={"/about-section.jpg"}
              height={1000}
              width={1000}
              alt="about-section image"
            />
          </div>
        </FadeInAnimated>
        </div>
      </div>
    </div>
  );
};

export default About;
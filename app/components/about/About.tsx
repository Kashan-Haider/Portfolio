import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const About = () => {
  const aboutRef = useRef(null);
  
  const handleMouseMove = (event:MouseEvent) => {
    if (!aboutRef.current) return;
    
    // Get the bounding rectangle of the about section
    const ref = aboutRef.current as HTMLDivElement;
    const rect = ref.getBoundingClientRect()
    
    // Calculate cursor position relative to the about section
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    // Only update cursor if mouse is within the about section
    const cursor = document.getElementById('about-cursor')
    if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
      gsap.to("#about-cursor", {
        x: x - 10,
        y: y - 10,
        duration: 1,
        ease: "power4.out",
        autoAlpha: 1
      });
      
      if (cursor) cursor.style.display = 'block'
    } else {
      // Hide cursor when outside the about section
      if (cursor) cursor.style.display = 'none'
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div id="about" className="relative h-screen p-5 md:p-10 lg:px-20" ref={aboutRef}>
      <div
        id="about-cursor"
        className="absolute w-[20px] h-[20px] bg-white top-0 left-0 rounded-full z-10 pointer-events-none mix-blend-difference opacity-0"
      ></div>
      <div className="grid grid-cols-3 items-center justify-between gap-5 md:gap-10 text-white">
        <div
          className="col-span-2 flex flex-col gap-5 md:gap-10 cursor-default"
          onMouseEnter={() => {
            gsap.to("#about-cursor", {
              scale: 8,
              duration: 0.3,
            });
          }}
          onMouseLeave={() => {
            gsap.to("#about-cursor", {
              scale: 1,
              duration: 0.3,
            });
          }}
        >
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
            Live the Life as <span className="text-white">You Want</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-4xl ">
            As a versatile web developer proficient in React, JavaScript,
            TypeScript, Next.js, MongoDB, Express, Generative AI, and
            Blockchain, I engineer sophisticated, high-performance solutions
            with a sharp focus on user experience and scalability. Driven by
            curiosity and a relentless pursuit of innovation, I craft
            cutting-edge applications that seamlessly blend creativity and
            functionality to solve real-world challenges.
          </p>
        </div>
        <div className="col-span-1">
          <Image
            className="w-[300px] sm:w-[350px] md:w-[400px] h-full rounded-2xl"
            src={"/about-section.jpg"}
            height={500}
            width={500}
            alt="about-section image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
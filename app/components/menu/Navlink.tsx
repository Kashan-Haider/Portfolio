"use client";
import { Link } from "react-scroll";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Navlink = ({
  title,
  element,
  handleIsOpen,
}: {
  title: string;
  element: string;
  handleIsOpen: (isOpen:boolean) => void;
}) => {
  const linkRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.fromTo(
      linkRef.current,
      { y: 50, opacity: 0 }, // Start position (below & hidden)
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.3, // Delay before animation starts
      }
    );
  }, []);
  return (
    <div className="h-fit overflow-hidden group gap-3 flex items-center">
      <div ref={linkRef}>
        <Link
          onClick={() => handleIsOpen(false)}
          to={element}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="text-dark cursor-pointer hover:scale-105 transition-all duration-300 ease-linear text-3xl md:text-4xl lg:text-5xl"
        >
          {title}
        </Link>
      </div>
    </div>
  );
};

export default Navlink;

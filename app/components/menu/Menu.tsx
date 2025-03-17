"use client";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Navlink from "./Navlink";
import SocialLink from "./SocialLink";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    if (isOpen) {
      mm.add("(min-width: 768px)", () => {
        gsap.to(boxRef.current, {
          width: "450px",
          height: "900px",
          top: "-10px",
          right: "-20px",
          duration: 0.5,
          ease: "expo.inout",
        });
      });
      mm.add("(max-width: 768px)", () => {
        gsap.to(boxRef.current, {
          width: "90vw",
          height: "90vh",
          top: "-4px",
          right: "-4px",
          duration: 0.5,
          ease: "expo.inout",
        });
      });
    } else {
      gsap.to(boxRef.current, {
        width: "0px",
        height: "0px",
        top: "10px",
        right: "10px",
        duration: 0.8,
        ease: "expo.inOut",
      });
    }
  }, [isOpen]);

  const NavItems = [
    {
      element: "home",
      title: "Home",
    },
    {
      element: "about",
      title: "About",
    },
    {
      element: "work",
      title: "Work",
    },
    {
      element: "testimonials",
      title: "Testimonials",
    },
    {
      element: "footer",
      title: "Footer",
    },
  ];
  const SocialItems = [
    {
      title: "Instagram",
      path: "https://instagram.com",
    },
    {
      title: "Facebook",
      path: "https://instagram.com",
    },
    {
      title: "LinkedIn",
      path: "https://instagram.com",
    },
    {
      title: "X(Twitter)",
      path: "https://instagram.com",
    },
  ];

  const handleIsOpen = (i:boolean) => {
    setIsOpen(i);
  };
  return (
    <div className="relative w-fit z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative z-10 h-fit overflow-hidden px-6 md:px-8 py-2 md:py-3 rounded-full ${
          isOpen ? " text-primary" : " text-dark bg-primary"
        } transition-all duration-3000`}
      >
        {isOpen ? "Close" : "Menu"}

        <span
          className={`absolute inset-0 bg-dark transition-transform duration-500 transform -z-10 ${
            isOpen ? "translate-y-0" : "translate-y-full"
          }`}
        ></span>
      </button>
      <div
        ref={boxRef}
        className={`absolute bg-primary overflow-hidden rounded-2xl flex flex-col justify-between ${
          isOpen ? "pt-20 p-5 pb-10" : ""
        }`}
        style={{ width: "0px", height: "0px" }} // Initial state
      >
        {isOpen && (
          <div className="relative z-50 flex flex-col gap-3">
            {NavItems.map((item, index) => {
              return (
                  <Navlink key={index} title={item.title} element={item.element} handleIsOpen = {handleIsOpen} />
              );
            })}
          </div>
        )}
        {isOpen && (
          <div className="relative z-50 grid grid-cols-2">
            {SocialItems.map((item, index) => {
              return (
                <SocialLink key={index} title={item.title} path={item.path} />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;

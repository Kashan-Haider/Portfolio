"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const SocialLink = ({ title, path }: { title: string; path: string }) => {
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
        delay: 0.5, // Delay before animation starts
      }
    );
  }, []);
  return (
    <div className="h-fit overflow-hidden w-fit">
      <div ref={linkRef}>
        <Link
          href={path}
          className="cursor-pointer hover:scale-105 transition-all duration-300 ease-linear text-base md:text-xl"
        >
          {title}
        </Link>
      </div>
    </div>
  );
};

export default SocialLink;

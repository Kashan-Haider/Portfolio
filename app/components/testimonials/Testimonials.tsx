"use client";
import React, { useState, useEffect } from "react";

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

 const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Tech Innovations Inc.",
    designation: "CTO",
    comment:
      "Their expertise in blockchain and AI integration completely transformed our tech stack. Truly visionary and technically sound.",
  },
  {
    name: "Michael Chen",
    company: "Global Ventures",
    designation: "Marketing Director",
    comment:
      "Our mobile and web platforms now run smoother and smarter, thanks to their innovative generative AI solutions. Brilliant work!",
  },
  {
    name: "Olivia Rodriguez",
    company: "Stellar Solutions",
    designation: "Product Manager",
    comment:
      "They delivered a decentralized app that perfectly matched our product goals. Super impressed with their technical depth and delivery.",
  },
  {
    name: "James Wilson",
    company: "Future Finance",
    designation: "CEO",
    comment:
      "Their blockchain-based solution has revolutionized how we handle digital assets. A major leap forward for our fintech services.",
  },
  {
    name: "Priya Patel",
    company: "Creative Studios",
    designation: "Design Lead",
    comment:
      "The synergy between their design sensibility and full-stack development made our AI-powered app both beautiful and powerful.",
  },
];


  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex(
        (prevIndex) =>
          (prevIndex - 1 + testimonials.length) % testimonials.length
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const goToSlide = (index: number) => {
    if (!isAnimating && index !== activeIndex) {
      setIsAnimating(true);
      setActiveIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [activeIndex]);

  const getPositionClass = (index: number) => {
    const diff =
      (index - activeIndex + testimonials.length) % testimonials.length;

    switch (diff) {
      case 0:
        return "z-30 opacity-100 scale-100 translate-x-0";
      case 1:
        return "z-20 opacity-70 scale-90 translate-x-40 -rotate-6";
      case testimonials.length - 1:
        return "z-20 opacity-70 scale-90 -translate-x-40 rotate-6";
      case 2:
        return "z-10 opacity-50 scale-80 translate-x-64 -rotate-12";
      case testimonials.length - 2:
        return "z-10 opacity-50 scale-80 -translate-x-64 rotate-12";
      default:
        return "opacity-0 scale-75 translate-x-96";
    }
  };

  return (
    <div id="testimonials" className="h-[60vh] sm:min-h-[70vh] flex flex-col p-5 md:p-10 lg:px-20 w-screen overflow-hidden">
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-primaryText mb-12">
        <span className="text-primaryDark">Client</span> <br /> Testimonials
      </h1>

      <div className="flex flex-col items-center justify-center h-full">
        <div className="relative flex items-center gap-5 md:gap-10 lg:gap-20 justify-between h-[276px] w-full xl:w-[1100px]">
          <button
            onClick={prevSlide}
            className="relative z-40 h-fit bg-primary hover:bg-primaryDark transition-all  duration-300 text-white rounded-full p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
          <div>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 right-0 mx-auto w-[350px] xl:w-[400px] overflow-hidden transition-all duration-500 cursor-pointer ${getPositionClass(
                  index
                )}`}
                onClick={() => goToSlide(index)}
              >
                <div className="rounded-lg overflow-hidden shadow-xl w-full flex flex-col p-5 md:py-10 bg-[#181619] text-primaryText">
                  <div
                    className="bg-cover bg-center"
                  />
                  <div className="p-4 flex flex-col flex-grow">
                    <div className="flex-grow">
                      <p className=" text-base italic mb-4 text-white">
                      &quot;{testimonial.comment}&quot;
                      </p>
                    </div>
                    <div className="mt-2">
                      <h3 className="font-bold ">
                        {testimonial.name}
                      </h3>
                      <p className="text-primaryDark font-semibold">
                        {testimonial.designation}
                      </p>
                      <p className=" text-sm">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="relative z-40 h-fit bg-primary hover:bg-primaryDark transition-all duration-300 text-white rounded-full p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

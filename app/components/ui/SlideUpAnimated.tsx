"use client";
import { useRef, useEffect, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SlideUpAnimatedProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
};

const SlideUpAnimated: React.FC<SlideUpAnimatedProps> = ({ 
  children, 
  delay = 0, 
  duration = 1 
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = textRef.current;
    if (!element) return;
    
    // Create the animation
    const animation = gsap.fromTo(
      element,
      { y: 150, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration,
        delay,
        ease: "power4.out",
        paused: true, // Start paused so ScrollTrigger controls it
      }
    );
    
    // Create ScrollTrigger
    const trigger = ScrollTrigger.create({
      trigger: element,
      start: "top 90%",
      onEnter: () => animation.play(),
      onLeave: () => animation.reverse(),
      onEnterBack: () => animation.play(),
      onLeaveBack: () => animation.reverse(),
    });
    
    // Cleanup function
    return () => {
      animation.kill();
      trigger.kill();
    };
  }, [delay, duration]);
  
  return <div className="h-fit overflow-hidden">
    <div ref={textRef}>{children}</div>
  </div>;
};

export default SlideUpAnimated;
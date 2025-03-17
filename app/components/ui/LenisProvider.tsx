"use client";
import { ReactNode, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

interface LenisProviderProps {
  children: ReactNode;
  options?: {
    duration?: number;
    easing?: (t: number) => number;
    smoothWheel?: boolean;
    smoothTouch?: boolean;
    touchMultiplier?: number;
  };
}

export default function LenisProvider({ 
  children, 
  options = {} 
}: LenisProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);
  
  useEffect(() => {
    // Initialize Lenis with default options
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 2,
      ...options
    });
    
    lenisRef.current = lenis;
    
    // Animation frame update
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    // Start the animation loop
    requestAnimationFrame(raf);
    
    // Clean up
    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [options]);
  
  return <>{children}</>;
}

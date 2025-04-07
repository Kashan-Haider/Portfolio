'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const techStack: string[] = [
  "React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Redux", "Zustand", "Framer Motion",
  "Node.js", "Express.js", "Fastify", "GraphQL", "tRPC", "REST APIs",
  "PostgreSQL", "MongoDB", "Redis", "Prisma", "PlanetScale", "Supabase",
  "Python", "LangChain", "Hugging Face", "OpenAI", "Transformers", "Vector Databases", "Pinecone", "Chroma",
  "Solidity", "Ethereum", "Ethers.js", "Hardhat", "ThirdWeb", "Infura", "IPFS", "Metamask",
];

const ScrollingText: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lastScrollY = useRef<number>(0);
  const position = useRef<number[]>([0, 0, 0]);
  const direction = useRef<number[]>([1, -1, 1]);
  const textWidth = useRef<number>(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const container = containerRef.current;
    if (!wrapper || !container) return;

    textWidth.current = wrapper.scrollWidth / 2;
    position.current = [textWidth.current / 2, textWidth.current / 2, textWidth.current / 2];

    const updatePosition = () => {
      gsap.set(wrapper.children[0], { x: -(position.current[0] % textWidth.current) });
      gsap.set(wrapper.children[1], { x: -(position.current[1] % textWidth.current) });
      gsap.set(wrapper.children[2], { x: -(position.current[2] % textWidth.current) });
    };

    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;
      lastScrollY.current = currentY;

      direction.current[0] = delta > 0 ? 1 : -1;
      direction.current[1] = delta > 0 ? -1 : 1;
      direction.current[2] = delta > 0 ? 1 : -1;

      position.current[0] += delta;
      position.current[1] -= delta;
      position.current[2] += delta;

      updatePosition();

      // Lean (skew) effect based on scroll direction
      // Lean (skew) effect based on scroll direction (more dramatic)
const skewAmount = Math.max(Math.min(delta * 0.8, 45), -45); // clamp between -25 and +25 deg

      gsap.to(container, {
        skewX: skewAmount,
        duration: 0.8,
        ease: 'power2.out',
      });

      // Clear previous timeout and reset skew after 200ms
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        gsap.to(container, {
          skewX: 0,
          duration: 0.5,
          ease: 'power3.out',
        });
      }, 200);
    };

    const tick = () => {
      position.current[0] += direction.current[0] * 1.5;
      position.current[1] += direction.current[1] * 1.5;
      position.current[2] += direction.current[2] * 1.5;
      updatePosition();
    };

    window.addEventListener('scroll', handleScroll);
    gsap.ticker.add(tick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      gsap.ticker.remove(tick);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden w-full text-[#464646] py-5 will-change-transform">
      <div ref={wrapperRef}>
        {[0, 1, 2].map((rowIndex) => (
          <div key={rowIndex} className="flex gap-1 md:gap-3 whitespace-nowrap mt-4">
            {[...techStack, ...techStack].map((tech, idx) => (
              <div key={idx} className="flex items-center gap-1 md:gap-3">
                <span className="text-2xl md:text-4xl lg:text-6xl font-bold tracking-[1px]">
                  {tech}
                </span>
                <div className="bg-[#464646] h-2 w-2 sm:h-4 sm:w-4 md:h-6 md:w-6 rounded-full"></div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingText;

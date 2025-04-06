'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const techStack = [
  "React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Redux", "Zustand", "Framer Motion",
  "Node.js", "Express.js", "Fastify", "GraphQL", "tRPC", "REST APIs",
  "PostgreSQL", "MongoDB", "Redis", "Prisma", "PlanetScale", "Supabase",
  "Python", "LangChain", "Hugging Face", "OpenAI", "Transformers", "Vector Databases", "Pinecone", "Chroma",
  "Solidity", "Ethereum", "Ethers.js", "Hardhat", "ThirdWeb", "Infura", "IPFS", "Metamask",
];

const ScrollingText: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const lastScrollY = useRef<number>(typeof window !== 'undefined' ? window.scrollY : 0);
  const position = useRef<number[]>([0, 0, 0]);  // positions for 3 rows
  const direction = useRef<number[]>([1, -1, 1]); // direction for 3 rows (2nd row moving in reverse)
  const textWidth = useRef<number>(0);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
  
    textWidth.current = el.scrollWidth / 2;
  
    // Set initial positions to the middle of the array
    // This positions each row to start from the middle
    position.current = [
      textWidth.current / 2,
      textWidth.current / 2,
      textWidth.current / 2
    ];
  
    const updatePosition = () => {
      gsap.set(el.children[0], { x: -(position.current[0] % textWidth.current) }); // Row 1
      gsap.set(el.children[1], { x: -(position.current[1] % textWidth.current) }); // Row 2
      gsap.set(el.children[2], { x: -(position.current[2] % textWidth.current) }); // Row 3
    };
  
    // Call updatePosition immediately to set initial positions
    updatePosition();

    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;
      lastScrollY.current = currentY;

      // Set scroll direction for each row
      direction.current[0] = delta > 0 ? 1 : -1;  // Row 1 (default direction)
      direction.current[1] = delta > 0 ? -1 : 1;  // Row 2 (opposite direction)
      direction.current[2] = delta > 0 ? 1 : -1;  // Row 3 (default direction)

      // Update positions based on direction and scroll delta
      position.current[0] += delta * 1; // Row 1
      position.current[1] += delta * 1; // Row 2
      position.current[2] += delta * 1; // Row 3
      updatePosition();
    };

    const tick = () => {
      // Add passive movement even when not scrolling
      position.current[0] += direction.current[0] * 1.5; // Row 1
      position.current[1] += direction.current[1] * 1.5; // Row 2
      position.current[2] += direction.current[2] * 1.5; // Row 3
      updatePosition();
    };

    window.addEventListener('scroll', handleScroll);
    gsap.ticker.add(tick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      gsap.ticker.remove(tick);
    };
  }, []);

  return (
    <div className="overflow-hidden w-full text-[#464646] py-5">
      <div ref={wrapperRef}>
        {/* Row 1 */}
        <div className="flex gap-1 md:gap-3 whitespace-nowrap">
          {[...techStack, ...techStack].map((tech, idx) => (
            <div key={idx} className='flex items-center gap-1 md:gap-3'>
              <span className="text-2xl md:text-4xl lg:text-8xl font-bold tracking-[1px]">
                {tech}
              </span>
              <div className='bg-[#464646] h-2 w-2 sm:h-4 sm:w-4 md:h-6 md:w-6 rounded-full'></div>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex gap-1 md:gap-3 whitespace-nowrap mt-4">
          {[...techStack, ...techStack].map((tech, idx) => (
            <div key={idx} className='flex items-center gap-1 md:gap-3'>
              <span className="text-2xl md:text-4xl lg:text-8xl font-bold tracking-[1px]">
                {tech}
              </span>
              <div className='bg-[#464646] h-2 w-2 sm:h-4 sm:w-4 md:h-6 md:w-6 rounded-full'></div>
            </div>
          ))}
        </div>

        {/* Row 3 */}
        <div className="flex gap-1 md:gap-3 whitespace-nowrap mt-4">
          {[...techStack, ...techStack].map((tech, idx) => (
            <div key={idx} className='flex items-center gap-1 md:gap-3'>
              <span className="text-2xl md:text-4xl lg:text-8xl font-bold tracking-[1px]">
                {tech}
              </span>
              <div className='bg-[#464646] h-2 w-2 sm:h-4 sm:w-4 md:h-6 md:w-6 rounded-full'></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingText;
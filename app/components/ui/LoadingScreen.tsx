// components/LoadingScreen.tsx
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Typewriter } from 'react-simple-typewriter';


type LoadingScreenProps = {
  setLoading: (loading: boolean) => void;
};

const LoadingScreen: React.FC<LoadingScreenProps> = ({ setLoading }) => {
  const loadingRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counter = { value: 0 };
      gsap.to(counter, {
        value: 100,
        duration: 3,
        onUpdate: () => setProgress(Math.floor(counter.value)),
      });
      
      gsap.to(loadingRef.current, {
        y: "-100%",
        duration: 2,
        delay: 3.5,
        ease: "power2.inOut",
        onComplete: () => setLoading(false),
      });
    });
    return () => ctx.revert();
  }, [setLoading]);

  console.log("rendered")
  return (
    <div
      ref={loadingRef}
      className={`fixed top-0 left-0 w-screen h-screen bg-dark text-white z-50`}
    >
        <h1 className='p-10'>
            The Portfolio
        </h1>
      <div className='absolute bottom-10 md:bottom-5 flex items-end justify-between p-5 w-full text-primaryText'>
        <h1 className='flex-1  text-xl sm:text-3xl md:text-5xl lg:text-6xl'>
          <Typewriter
            words={["I build dynamic web applications, sleek user interfaces, and AI-driven solutions"]}
            loop={1}
            cursor
            cursorStyle='|'
            typeSpeed={20}
          />
        </h1>
        <div className='w-1/3 flex justify-end text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold'>
            {progress}%
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

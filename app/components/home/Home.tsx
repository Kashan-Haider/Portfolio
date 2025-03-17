"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../ui/Button";
import SlideUpAnimated from "../ui/SlideUpAnimated";
import FadeInAnimated from "../ui/FadeInAnimated";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  return (
    <div id="home" className="relative flex flex-col items-center justify-center h-screen w-screen overflow-hidden p-5">
      <div className="relative z-10 flex flex-col items-center justify-center">
        <FadeInAnimated delay={0.7}>
          <Image
            className="rounded-full mb-5 h-[112px] w-[112px]"
            src={"/profile-picture.jpg"}
            width={100}
            height={100}
            alt="profile picture"
          />
        </FadeInAnimated>
        
          <SlideUpAnimated delay={0.3}>
            <h1 className="text-3xl md:text-4xl lg:text-7xl text-center font-bold text-primaryText">
              Hello! I&apos;m Kashan
            </h1>
          </SlideUpAnimated>
        
        
          <SlideUpAnimated delay={0.3}>
            <h1 className="text-primaryText text-2xl md:text-3xl lg:text-7xl text-center pb-2">
              Software Engineer
            </h1>
          </SlideUpAnimated>
       
        
          <SlideUpAnimated delay={0.3}>
            <p className="text-primaryText text-xl mt-5 text-center">
              With a keen eye and a masterful touch, I craft websites into
              digital masterpieces
            </p>
          </SlideUpAnimated>
      
      </div>
      
        <SlideUpAnimated delay={0.3}>
          <Button title="Let's Talk" element="footer" />
        </SlideUpAnimated>
      
      <FadeInAnimated delay={0.3}>
        <div className="absolute -z-10 opacity-50 top-0 left-0  rounded-xl blur-[200px] w-[200px] h-[300px] md:w-[700px] md:h-[500px] bg-gradient-to-tl from-[#f50c0cf1] via-[#f5690cda] to-[#ffcea09f]"></div>
      </FadeInAnimated>
      <FadeInAnimated delay={1}>
        <div className="absolute -z-10 opacity-50 top-0 md:left-[20%] rounded-3xl blur-[100px] w-[300px] h-[300px] md:w-[800px] md:h-[600px] bg-gradient-to-br from-[#07277ed2] via-[#7b15a3c7] to-[#07277e7e]"></div>
      </FadeInAnimated>
      <FadeInAnimated delay={1.4}>
        <div className="absolute -z-10 top-0 -right-[10%] rotate-12 rounded-full blur-[100px] w-[100px] h-[100px] md:w-[600px] md:h-[600px] bg-primary opacity-10"></div>
      </FadeInAnimated>
    </div>
  );
};

export default Home;

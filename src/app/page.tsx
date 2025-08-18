'use client'

import dynamic from 'next/dynamic';
import { useEffect, useRef } from "react";
import { Typography } from '@material-tailwind/react';
import Typed from "typed.js";

// Dynamic imports for better code splitting and performance
const Computer = dynamic(() => import('@/components/Canvas/computers'), {
  loading: () => <div className="w-full h-1/2 flex justify-center items-center">Loading...</div>,
  ssr: false
});
const AboutMe = dynamic(() => import('@/parts/about-me/aboutMe'), {
  loading: () => <div className="min-h-[400px] flex justify-center items-center">Loading...</div>,
  ssr: false
});
const Experience = dynamic(() => import('@/parts/experiences/experience'), {
  loading: () => <div className="min-h-[400px] flex justify-center items-center">Loading...</div>,
  ssr: false
});
const Education = dynamic(() => import('@/parts/education/education'), {
  loading: () => <div className="min-h-[400px] flex justify-center items-center">Loading...</div>,
  ssr: false
});
const Portofolio = dynamic(() => import('@/parts/portofolio/portofolio'), {
  loading: () => <div className="min-h-[400px] flex justify-center items-center">Loading...</div>,
  ssr: false
});

// Greeting strings for the typed animation
const GREETING_STRINGS = ["Hello", "こんにちは", "안녕하세요", "Ciao", "Guten tag", "Nǐ hǎo"];

export default function Home() {
  const el = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!el.current) return;

    const typed = new Typed(el.current, {
      strings: GREETING_STRINGS,
      startDelay: 500,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 500,
      smartBackspace: true,
      showCursor: false,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div id="homeSection" className="flex flex-col-reverse h-screen md:pb-20 pb-0 md:my-0 justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex justify-center items-center w-full h-[50px]">
            <p className="font-extrabold md:text-5xl sm:text-2xl text-lg" ref={el}></p>
            <Typography className="font-extrabold md:text-5xl sm:text-2xl text-lg">, I'm Pandu Utomo</Typography>
          </div>
          <p className='tracking-wide mt-2 sm:mt-4 sm:text-base text-sm'>Computer Science Student | Full-stack Developer | 3D Artist</p>
        </div>
        <div className="w-full h-1/2 mb-10 flex justify-center items-center">
          <Computer />
        </div>
      </div>
      <div className='flex flex-col md:gap-24 sm:gap-[80px] gap-[70px] w-full h-full'>
        <div id="aboutMeSection">
          <AboutMe />
        </div>
        <div id='experienceSection'>
          <Experience />
        </div>
        <div id='educationSection'>
          <Education />
        </div>
        <div id='portofolioSection'>
          <Portofolio />
        </div>
      </div>
    </>
  );
}

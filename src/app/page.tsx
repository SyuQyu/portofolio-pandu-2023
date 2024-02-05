'use client'

import dynamic from 'next/dynamic';

const Computer = dynamic(() => import('@/components/Canvas/computers'));
const AboutMe = dynamic(() => import('@/parts/about-me/aboutMe'));
const Experience = dynamic(() => import('@/parts/experiences/experience'));
const Portofolio = dynamic(() => import('@/parts/portofolio/portofolio'));
import Typed from "typed.js";
import { useEffect, useRef, useState } from "react";
import { dummyData as data } from '@/contants/dummyDataTabs';
import { Typography } from '@material-tailwind/react';

export default function Home() {
  const [typedString, setTypedString] = useState(""); // State to hold the typed string

  const el = useRef(null);
  const elPhone = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Hello", "こんにちは", "안녕하세요", "Ciao", "Guten tag", "Nǐ hǎo"],
      startDelay: 500,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 500,
      smartBackspace: true,
      showCursor: false,
      loop: true,
      onStringTyped: (arrayPos, self) => {
        // Update the typedString state with the current typed string
      }
    });
    // const typedPhone = new Typed(elPhone.current, {
    //   strings: ["Hello", "こんにちは", "안녕하세요", "Ciao", "Guten tag", "Nǐ hǎo"],
    //   startDelay: 500,
    //   typeSpeed: 50,
    //   backSpeed: 50,
    //   backDelay: 500,
    //   smartBackspace: true,
    //   showCursor: false,
    //   loop: true,
    //   onStringTyped: (arrayPos, self) => {
    //     // Update the typedString state with the current typed string
    //   }
    // });

    return () => {
      typed.destroy();
      // typedPhone.destroy();
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
          <p className='tracking-wide mt-2 sm:mt-4 sm:text-base text-sm'>a tech whiz kid</p>
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
        <div id='portofolioSection'>
          <Portofolio />
        </div>
      </div>
    </>
  );
}

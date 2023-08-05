'use client'

import Computer from '@/components/Canvas/computers';
import Typed from "typed.js";
import { useEffect, useRef, useState } from "react";
import CustomTabs from '@/components/tabs/tabs';
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
      <div className="flex md:flex-row flex-col-reverse md:h-screen h-[80vh] md:pb-20 pb-0 md:my-0 mt-12 justify-center items-center">
        <div className="md:w-[55%] md:m-auto">
          <div className="flex justify-center items-center w-full">
            <Typography className="font-extrabold md:text-5xl sm:text-2xl text-lg" ref={el}></Typography>
            <Typography className="font-extrabold md:text-5xl sm:text-2xl text-lg">, I'm Pandu Utomo</Typography>
          </div>
        </div>
        <div className="md:w-[45%] w-full md:h-full h-[40vh] md:mb-0 mb-10 flex justify-center items-center">
          <Computer />
        </div>
        {/* <div className="md:w-[55%] md:hidden block m-auto">
          <div className="flex justify-center items-center w-full">
            <Typography className="font-extrabold sm:text-2xl text-lg" ref={elPhone}></Typography>
            <Typography className="font-extrabold sm:text-2xl text-lg">, I'm Pandu</Typography>
          </div>
        </div> */}
      </div>
      {/* <div className="block h-screen mb-24">
        <div className="w-full flex justify-center">
          <h1 className="text-2xl font-bold my-0">
            About Me
            <span className="border-b-2 border-white"></span>
          </h1>
        </div>
        <div className="w-full flex items-start">
          <CustomTabs dataTab={data} />
        </div>
      </div> */}
    </>
  );
}

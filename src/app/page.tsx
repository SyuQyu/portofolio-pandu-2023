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

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="flex h-[95vh] pb-20">
        <div className="w-[55%] m-auto">
          <div className="flex justify-center items-center w-full">
            <Typography className="font-extrabold text-5xl" ref={el}></Typography>
            <Typography className="font-extrabold text-5xl">, I'm Pandu Utomo</Typography>
          </div>
        </div>
        <div className="w-[45%] flex justify-center items-center">
          <Computer />
        </div>
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

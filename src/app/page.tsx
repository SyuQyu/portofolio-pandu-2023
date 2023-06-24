'use client'

import Computer from '@/components/Canvas/computers';
import Typed from "typed.js";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [typedString, setTypedString] = useState(""); // State to hold the typed string

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Hello", "こんにちは", "안녕하세요", "Ciao", "Guten tag", "Nǐ hǎo"],
      startDelay: 500,
      typeSpeed: 50,
      delaySpeed: 90,
      backSpeed: 50,
      backDelay: 500,
      smartBackspace: true,
      showCursor: false,
      loop: true,
      onStringTyped: (arrayPos, self) => {
        // Update the typedString state with the current typed string
        setTypedString(self.strings[arrayPos]);
      }
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex flex-wrap h-full">
      <div className="w-1/2 flex justify-center items-center font-extrabold text-5xl">
        <span ref={el}></span>
        <span>, I'm Pandu Utomo</span>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <Computer />
      </div>
    </div>
  );
}

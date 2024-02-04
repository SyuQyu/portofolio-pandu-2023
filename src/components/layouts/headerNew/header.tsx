'use client'
import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { motion, sync, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimension";
import { MenuToggle } from "./menuToggle";
import { Navigation } from "./navigation";
import clsx from "clsx";

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 100% 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 100% 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

const changeColorSpan = {
    open: { color: "#000000", transition: { duration: 0.5, delay: 0.5 } }, // Change color on open with transition
    closed: { color: "#f7444e", transition: { duration: 0.5, delay: 0.5 } } // Change color on closed with transition
};

const changeColorh1 = {
    open: { color: "#ffffff", transition: { duration: 0.5, delay: 0.5 } }, // Change color on open with transition
    closed: { color: "#000000", transition: { duration: 0.5, delay: 0.5 } } // Change color on closed with transition
};


const Header = ({ isOpen, toggleOpen }: any) => {
    // const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
    const [isOpenDelay, setIsOpenDelay] = useState(isOpen);

    useEffect(() => {
        // Add a delay of 1000 milliseconds (1 second) only when isOpenProp changes from false to true
        if (isOpen !== true) {
            const delay = 1000;

            const timeoutId = setTimeout(() => {
                setIsOpenDelay(isOpen);
            }, delay);

            // Clear the timeout if the component unmounts or if isOpenProp changes before the delay
            return () => clearTimeout(timeoutId);
        } else {
            // If isOpenProp is already true, update the state immediately
            setIsOpenDelay(isOpen);
        }
    }, [isOpen]);

    const [clientWindowHeight, setClientWindowHeight] = useState(0);

    const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
    const [padding, setPadding] = useState(30);
    const [boxShadow, setBoxShadow] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
        setClientWindowHeight(window.scrollY);
    };

    useEffect(() => {
        let backgroundTransparacyVar = clientWindowHeight / 600;

        if (backgroundTransparacyVar < 1) {
            let paddingVar = 30 - backgroundTransparacyVar * 20;
            let boxShadowVar = backgroundTransparacyVar * 0.1;
            setBackgroundTransparacy(backgroundTransparacyVar);
            setPadding(paddingVar);
            setBoxShadow(boxShadowVar);
        }
    }, [clientWindowHeight]);
    // console.log(backgroundTransparacy)

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
            className={clsx("w-full flex justify-between items-center fixed ", isOpenDelay ? "z-50 h-screen" : "z-10 h-[80px]")}
        >
            <div className="absolute top-0 w-full h-[80px]"
                style={{
                    background: `rgba(255, 255, 255, 0.4)`,
                    boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
                    backdropFilter: `blur(5px)`,
                }}
            />
            <motion.h1 variants={changeColorh1} className="md:text-2xl text-xl mt-[25px] ml-6 font-bold name z-50">PanduUtomo
                <motion.span
                    className="text-[#f7444e]"
                    variants={changeColorSpan}
                >
                    ();
                </motion.span>
            </motion.h1>
            <motion.div className="background" variants={sidebar} />
            <div className={clsx("w-full h-full block", isOpenDelay ? null : 'z-[-1] hidden')}>
                <Navigation toggle={toggleOpen} />
            </div>
            <MenuToggle toggle={toggleOpen} />
        </motion.nav>
    );
};

export default Header;
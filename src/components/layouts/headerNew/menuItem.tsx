import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        // display: 'none',
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ dataLink }: any, { toggle }: any) => {
    const handleScrollToId = (selectedId: any) => {
        const element = document.getElementById(selectedId);
        console.log("element", element, selectedId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <motion.li
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-full flex justify-center items-center"
            // onClick={}
            onClick={() => {handleScrollToId(dataLink.id); toggle;}}
        >
            <div className="icon-placeholder text-center">
                <p className="text-center text-white">
                    {dataLink.name}
                </p>
            </div>
        </motion.li>
    );
};

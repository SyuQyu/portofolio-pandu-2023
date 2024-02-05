import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./menuItem";

const variants = {
    open: {
        // zIndex: 50,
        transition: { staggerChildren: 0.07, delayChildren: 0.2, duration: 0.5 }
    },
    closed: {
        // zIndex: 10,
        transition: { staggerChildren: 0.05, staggerDirection: -1, duration: 0.5 }
    }
};

export const Navigation = ({ toggle }: any) => (
    <motion.ul variants={variants} className="w-full flex flex-col gap-6">
        {itemLinks.map((item, index) => (
            <div onClick={toggle}>
                <MenuItem dataLink={{ name: item.name, id: item.id }} key={index} />
            </div>
        ))}
    </motion.ul>
);

const itemLinks = [
    {
        name: "Home",
        id: "homeSection"
    },
    {
        name: "About",
        id: "aboutMeSection"
    },
    {
        name: "Experience",
        id: "experienceSection"
    },
    {
        name: "Portofolio",
        id: "portofolioSection"
    }
]

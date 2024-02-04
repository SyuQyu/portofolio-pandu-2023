'use client'
import Container from '@/components/common/container';
import Motion from '@/components/common/motion';
import SkillCards from '@/components/common/skillCards';
import ImageWithFallback from '@/components/common/imageWithFallback';
import { Coding, Design, Sosmed } from '@/contants/dataSkills';
import LineBar from '@/components/common/lineBar';
import CustomTabs from '@/components/tabs/tabs';
import Link from 'next/link'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Typography,
} from "@material-tailwind/react";
import { motion } from 'framer-motion';
export default function AboutMe() {
    const data = [
        {
            label: "Peluang.co",
            value: "peluang",
            title: "Full-stack Developer",
            dateStart: "Okt 2023",
            dateEnd: "-",
            untilNow: true,
            desc: "test",
            // (
            //     <ul>
            //         <li>Responsible for slicing the existing UI/UX into code using the Next.js framework.</li>
            //         <li>Connecting API from backend</li>
            //     </ul>
            // ),
        },
        {
            label: "Mudahdigital.id",
            value: "mudahdigital",
            title: "Maintainer",
            dateStart: "januari 2021",
            dateEnd: "-",
            untilNow: true,
            desc: "test",
            // (
            //     <ul>
            //         <li>Responsible for maintaining the website mudahdigital.id</li>
            //         <li>Responsible for the creation of mudahdigital.id products</li>
            //     </ul>
            // ),
        },
        {
            label: "MAXY Academy",
            value: "maxy",
            title: "Frontend Developer",
            dateStart: "september 2023",
            dateEnd: "2021",
            untilNow: false,
            desc: null,
        },
        // {
        //     label: "Peluang.co",
        //     value: "peluang",
        //     title: "Frontend Developer",
        //     dateStart: "2021",
        //     dateEnd: "2021",
        //     untilNow: false,
        //     desc: (
        //         <ul>
        //             <li>Responsible for slicing the existing UI/UX into code using the Next.js framework.</li>
        //             <li>Connecting API from backend</li>
        //         </ul>
        //     ),
        // },
        {
            label: "E-tech",
            value: "etech",
            title: "Full-stack Developer",
            dateStart: "Juni 2022",
            dateEnd: "September 2022",
            untilNow: false,
            desc: "test",
            // (
            //     <div  className='w-full h-full'>
            //         <p>Responsibilities:</p>
            //         <ul>
            //             <li>Refactoring existing code</li>
            //             <li>Implementing UI design to frontend using React.js</li>
            //             <li>Fixing and adding backend functionality</li>
            //             <li>Debugging endpoints from backend using Postman</li>
            //             <li>Adding tables in the database using MySQL</li>
            //         </ul>
            //     </div>
            // ),
        },
        {
            label: "PT. Brilyan Trimatra Utama",
            value: "brilyan",
            title: "Full-stack Developer",
            dateStart: "oktober 2019",
            dateEnd: "maret 2020",
            untilNow: false,
            desc: "test",
            // (
            //     <div  className='w-full h-full'>
            //         <p>Responsibilities:</p>
            //         <ul>
            //             <li>Refactoring existing code</li>
            //             <li>Implementing UI design to frontend using React.js</li>
            //             <li>Fixing and adding backend functionality</li>
            //             <li>Debugging endpoints from backend using Postman</li>
            //             <li>Adding tables in the database using MySQL</li>
            //         </ul>
            //     </div>
            // ),
        },
    ];
    return (
        <Container id="experienceSection" className="flex flex-col gap-4 justify-between items-center h-full">
            <motion.div
                className='flex flex-row justify-center items-center w-full gap-4'
            >
                <motion.h1
                    className="md:text-5xl sm:text-2xl text-lg font-bold flex-1 whitespace-nowrap"
                >
                    Experiences
                </motion.h1>
                <LineBar />
            </motion.div>
            <div className='grid grid-cols-1 gap-6 justify-center w-full'>
                <div className="flex md:flex-row flex-col justify-start items-center md:space-x-6 md:p-10 p-4 md:pt-0 pt-8 mt-10 rounded-lg w-full  bg-[#ececec] md:h-full lg:h-[75vh] xl:h-[65vh]">
        
                </div>
            </div>

        </Container >
    );
}
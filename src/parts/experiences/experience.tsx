'use client'
import dynamic from 'next/dynamic';

const Container = dynamic(() => import('@/components/common/container'));
const Motion = dynamic(() => import('@/components/common/motion'));
const SkillCards = dynamic(() => import('@/components/common/skillCards'));
const ImageWithFallback = dynamic(() => import('@/components/common/imageWithFallback'));
const CustomAccordion = dynamic(() => import('@/components/common/customAccordion'));
const LineBar = dynamic(() => import('@/components/common/lineBar'));
import { motion } from 'framer-motion';
import React from 'react';
export default function AboutMe() {
    const data = [
        {
            jobsPosition: 'Full-stack Developer',
            company: "Peluang.co",
            id: 1,
            tipe: "Part-time",
            image: "/image/company/peluang.jpg",
            dateStart: "2022-01-01",
            dateEnd: "2023-02-01",
            untilNow: false,
            desc: (
                <div className='flex flex-col gap-1 w-full'>
                    <p> - Responsible for slicing the existing UI/UX into code using the Next.js framework.</p>
                    <p> - Connecting API from backend</p>
                </div>
            )
        },
        {
            jobsPosition: "Maintainer",
            company: "Mudahdigital.id",
            id: 2,
            tipe: "self-employed",
            image: "/image/company/md.png",
            dateStart: "2021-01-01",
            dateEnd: "-",
            untilNow: true,
            desc: (
                <div className='flex flex-col gap-1 w-full'>
                    <p> - Responsible for maintaining the website mudahdigital.id</p>
                    <p> - Responsible for the creation of mudahdigital.id products</p>
                </div>
            )
        },
        {
            jobsPosition: "Frontend Developer",
            company: "MAXY Academy",
            id: 3,
            tipe: "Internship",
            image: "/image/company/maxy.jpg",
            dateStart: "2023-09-01",
            dateEnd: "2024-01-01",
            untilNow: false,
            desc: (
                "test"
            )
        },
        {
            jobsPosition: "Staff of Project and Research",
            company: "KSM Android UPN Veteran Jakarta",
            id: 4,
            tipe: "Organization",
            image: "/image/company/ksm.jpg",
            dateStart: "2022-12-01",
            dateEnd: "2023-12-01",
            untilNow: false,
            desc: (
                <div className='flex flex-col gap-1 w-full'>
                    <div className='w-full'>
                        <p className='font-semibold'>Mentor of Backend Basic Study Club</p>
                        <p>- Assigned to be a mentor who teaches mentees in the basic backend class</p>
                    </div>
                    <div className='w-full'>
                        <p className='font-semibold'>Mentor of Backend Internal Project</p>
                        <p>- Responsible of creating backend for KSM Internal Project Learning Management System (LMS)</p>
                        <p>- Responsible for overseeing the backend work.</p>
                    </div>
                    <div className='w-full'>
                        <p className='font-semibold'>Staff of Project and Research</p>
                    </div>
                </div>
            )
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
            jobsPosition: "Full-stack Developer",
            company: "E-tech",
            id: 5,
            tipe: "Internship",
            image: "none",
            dateStart: "2022-06-01",
            dateEnd: "2022-09-01",
            untilNow: false,
            desc: (
                <div>
                    <p>
                        responsibilities :
                    </p>
                    <div className='flex flex-col gap-1 w-full'>
                        <p> - Refactoring existing code</p>
                        <p> - Implementing UI design to frontend using React.js</p>
                        <p> - Fixing and adding backend functionapty</p>
                        <p> - Debugging endpoints from backend using Postman</p>
                        <p> - Adding tables in the database using MySQL</p>
                    </div>
                </div>
            )
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
            jobsPosition: "Full-stack Developer",
            company: "PT. Brilyan Trimatra Utama",
            id: 6,
            tipe: "Internship",
            image: "/image/company/brilyan.jpg",
            dateStart: "2019-10-01",
            dateEnd: "2020-03-01",
            untilNow: false,
            desc: (
                <div>
                    <p>
                        my main task is to make a accommodation website for PON XX, and the website Will be used for any atlet to find his hotel room.
                    </p>
                    <p>
                        responsibilities :
                    </p>
                    <div className='flex flex-col gap-1 w-full'>
                        <p>- Creating Frontend for Accommodation webiste</p>
                        <p>- Creating Backend for Accommodation website</p>
                    </div>
                </div>
            )
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
                <div className="flex md:flex-row flex-col justify-start items-center md:space-x-6 md:p-10 rounded-lg w-full">
                    <div className='w-full h-full flex flex-col gap-6'>
                        {
                            data.map((item, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <CustomAccordion
                                            jobsPosition={item.jobsPosition}
                                            company={item.company}
                                            id={item.id}
                                            tipe={item.tipe}
                                            image={item.image}
                                            dateStart={item.dateStart}
                                            dateEnd={item.dateEnd}
                                            untilNow={item.untilNow}
                                            desc={item.desc}
                                        />
                                    </React.Fragment>
                                )

                            })
                        }
                    </div>
                </div>
            </div>

        </Container >
    );
}
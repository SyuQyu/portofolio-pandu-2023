'use client'
import dynamic from 'next/dynamic';

// Importing components dynamically
const Container = dynamic(() => import('@/components/common/container'));
const Motion = dynamic(() => import('@/components/common/motion'));
const ImageWithFallback = dynamic(() => import('@/components/common/imageWithFallback'));
const LineBar = dynamic(() => import('@/components/common/lineBar'));
const Person = dynamic(() => import('@/components/Canvas/person'));

import { Coding, Design, Sosmed } from '@/contants/dataSkills';
import Link from 'next/link'
import {
    Typography,
} from "@material-tailwind/react";
import { motion } from 'framer-motion';
export default function AboutMe() {

    return (
        <Container id="aboutMeSection" className="flex flex-col gap-4 justify-between items-center h-full">
            <motion.div
                className='flex flex-row justify-center items-center w-full gap-4'
            >
                <motion.h1
                    className="md:text-5xl sm:text-2xl text-lg font-bold flex-1 whitespace-nowrap"
                >
                    About Me
                </motion.h1>
                <LineBar />
            </motion.div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-6 justify-center w-full'>
                <div className='w-full h-full'>
                    <Person />
                </div>
                <div className="flex md:flex-row flex-col justify-center items-center md:space-x-6 md:p-10 p-4 md:pt-0 pt-8 mt-10 rounded-lg w-full sticky top-0 -z-0 bg-[#ececec] md:h-full lg:h-[75vh] xl:h-[65vh]">
                    <div className="w-full md:mt-8 mt-0 flex flex-col justify-center items-center">
                        <div className="w-full flex flex-col justify-center">
                            <Motion direction="x" transitionData={{ delay: .5 }}>
                                <div className="flex flex-row justify-start items-center w-full mb-4 space-x-4">
                                    <Typography className="md:text-xl text-base font-semibold">
                                        Introduction
                                    </Typography>
                                    <div className='w-full h-[3px] bg-[#002c3e]/30 rounded-full' />
                                </div>
                            </Motion>
                            <Motion direction="x" transitionData={{ delay: .6 }}>
                                <Typography className="mb-4 md:text-base text-sm">
                                    Hey! I'm Pandu Utomo, a tech enthusiast pursuing a Computer Science degree at Universitas Pembangunan Nasional Veteran Jakarta. I'm all about conquering the coding wilderness, specializing in web development and 3D environment design. Whether it's making browsers blush with my web wizardry or crafting virtual wonders, I'm on a mission to shape the digital future—one line of code at a time. Join me on this tech-tastic adventure!
                                </Typography>
                            </Motion>
                        </div>
                        <div className="w-full flex flex-col justify-center">
                            <Motion direction="x" transitionData={{ delay: .5 }}>
                                <div className="flex flex-row justify-start items-center w-full mb-4 space-x-4">
                                    <Typography variant="h5" className="md:text-xl text-base font-semibold w-auto whitespace-nowrap">
                                        Social Media
                                    </Typography>
                                    <div className='w-full h-[3px] bg-[#002c3e]/30 rounded-full' />
                                </div>
                            </Motion>
                            <Motion direction="x" transitionData={{ delay: .6 }} className="grid md:grid-cols-4 grid-cols-3 justify-center items-center md:gap-4 gap-4">
                                {
                                    Sosmed?.map((data, index) =>
                                        <Link href={data.link} key={index}>
                                            <div className="flex flex-row space-x-4 w-full">
                                                <ImageWithFallback
                                                    priority={true}
                                                    src={data.image}
                                                    alt={`Image for ${data.name}`}
                                                    width={0}
                                                    height={0}
                                                    sizes='100vw'
                                                    className='sm:w-[32px] sm:h-[32px] w-[20px] h-[20px] object-contain'
                                                />
                                                <Typography className=" m-auto md:text-base text-sm" textGradient>
                                                    {data.name}
                                                </Typography>
                                            </div>
                                        </Link>
                                    )
                                }
                            </Motion>
                        </div>
                    </div>
                </div>
            </div>

        </Container >
    );
}
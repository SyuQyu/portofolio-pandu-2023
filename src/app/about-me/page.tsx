'use client'
import Container from '@/components/common/container';
import Motion from '@/components/common/motion';
import SkillCards from '@/components/common/skillCards';
import ImageWithFallback from '@/components/common/imageWithFallback';
import { Coding, Design, Sosmed } from '@/contants/dataSkills';
import Link from 'next/link'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    Avatar,
} from "@material-tailwind/react";
import { motion } from 'framer-motion';
export default function AboutMe() {
    const textMotion = {
        rest: {
            color: "grey",
            y: 10,
            transition: {
                duration: .6,
                type: "spring",
                ease: "easeIn"
            }
        },
        hover: {
            color: "blue",
            y: 0,
            transition: {
                duration: 0.6,
                type: "spring",
                ease: "easeOut"
            }
        }
    };

    const slashMotion = {
        rest: { opacity: 0, ease: "easeOut", duration: 0.4, type: "spring" },
        hover: {
            opacity: 1,
            transition: {
                duration: 0.4,
                type: "spring",
                ease: "easeIn"
            }
        }
    };

    return (
        <Container>
            <Motion direction="x" transitionData={{ delay: .4 }}>
                <div className="flex w-full mb-6 space-x-4 mt-12">
                    <div className="relative w-[5%]">
                        <div className="h-[1px] w-full bg-anzac-200 absolute top-3"></div>
                    </div>
                    <div className="w-3/4">
                        <Typography className="text-anzac-50 md:text-xl text-base font-semibold" textGradient>
                            About Me
                        </Typography>
                    </div>
                </div>
            </Motion>
            <div className="flex md:flex-row flex-col md:space-x-6 bg-gray-800/50 md:p-10 p-4 md:pt-0 pt-8 rounded-lg" data-aos="zoom-in-up">
                <div className="md:w-1/3 w-full md:mb-0 mb-8 items-center justify-center flex">
                    <Card
                        shadow={false}
                        className="relative grid h-[35rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
                    >
                        <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
                        >
                            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                        </CardHeader>
                        <CardBody className="relative px-6 md:px-12">
                            <Typography className="md:text-xl text-base font-semibold text-white">
                                Pandu Utomo
                            </Typography>
                            <Typography className="md:text-base text-sm mb-4 text-white">
                                Website Developer / 3D Environment Artist
                            </Typography>
                        </CardBody>
                    </Card>
                </div>
                <div className="md:w-2/3 w-full md:mt-8 mt-0 flex flex-col justify-center items-center">
                    <div className="w-full m-auto flex flex-col justify-center">
                        <Motion direction="x" transitionData={{ delay: .5 }}>
                            <div className="flex w-full mb-4 space-x-4">
                                <Typography className="md:text-xl text-base font-semibold text-anzac-50" textGradient>
                                    Introduction
                                </Typography>
                                <div className="relative w-full">
                                    <div className="h-[1px] w-full bg-anzac-200 absolute top-3"></div>
                                </div>
                            </div>
                        </Motion>
                        <Motion direction="x" transitionData={{ delay: .6 }}>
                            <Typography className="mb-4 text-white md:text-base text-sm">
                                Hello there! My name is Pandu Utomo, and I am currently an undergraduate student pursuing a degree in Computer Science with a major in Informatics at Universitas Pembangunan Nasional Veteran Jakarta. I have always been deeply fascinated by the world of technology and its potential to shape the future. My primary areas of interest lie in web development and 3D environment design.
                            </Typography>
                            <Typography className="mb-4 text-white md:text-base text-sm">
                                Over the course of my academic journey, I have delved into the intricacies of programming, software development, and data analysis, all of which have contributed to my growing expertise in the field of computer science. Web development, in particular, has captured my imagination, and I find great joy in crafting interactive and visually appealing websites that seamlessly blend form and function.
                            </Typography>
                            <Typography className="mb-4 text-white md:text-base text-sm">
                                Additionally, my passion for 3D environment design has allowed me to explore the realm of virtual landscapes and immersive experiences. Combining creativity with technical skills, I have enjoyed experimenting with various design tools to build captivating virtual environments.
                            </Typography>
                            <Typography className="mb-4 text-white md:text-base text-sm">
                                Besides my academic pursuits, I have gained practical experience in web development through internships and personal projects, totaling approximately one year of hands-on experience. This exposure has provided me with invaluable insights into the real-world challenges and problem-solving techniques that developers face.
                            </Typography>
                            <Typography className="mb-4 text-white md:text-base text-sm">
                                As I continue my education and exploration in the ever-evolving world of technology, my goal is to become a proficient and innovative professional in the field of web development and 3D design. I look forward to contributing my skills and creativity to projects that make a positive impact on people's lives and the digital landscape.
                            </Typography>
                        </Motion>
                    </div>
                    <div className="w-full m-auto flex flex-col justify-center">
                        <Motion direction="x" transitionData={{ delay: .5 }}>
                            <div className="flex w-full mb-4 space-x-4">
                                <Typography variant="h5" className="md:text-xl text-base font-semibold text-anzac-50 md:w-[20%] w-[50%]" textGradient>
                                    Social Media
                                </Typography>
                                <div className="relative w-full">
                                    <div className="h-[1px] w-full bg-anzac-200 absolute top-3"></div>
                                </div>
                            </div>
                        </Motion>
                        <Motion direction="x" transitionData={{ delay: .6 }} className="md:flex grid md:grid-cols-0 grid-cols-2 md:space-x-6 md:gap-0 gap-4">
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
                                            <Typography className="text-white m-auto md:text-base text-sm" textGradient>
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
            <div className="mt-10">
                <Motion direction="x" transitionData={{ delay: .4 }}>
                    <div className="flex w-full mb-6 space-x-4">
                        <div className="relative w-[5%]">
                            <div className="h-[1px] w-full bg-anzac-200 absolute top-3"></div>
                        </div>
                        <div className="w-3/4">
                            <Typography className="md:text-xl text-base font-semibold text-anzac-50" textGradient>
                                Skills Programming
                            </Typography>
                        </div>
                    </div>
                </Motion>
            </div>
            <Motion direction="y" transitionData={{ delay: .6 }}>
                <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-between items-center' data-aos='fade-up'>
                    {
                        Coding?.map((data, index) =>
                            <SkillCards key={index} >
                                <motion.div initial="rest" whileHover="hover" animate="rest" className="border-solid border-2 p-4 justify-center items-center border-anzac-200 rounded-md flex flex-row shadow-lg shadow-anzac-200/30 space-x-6 px-8 m-6">
                                    <div>
                                        <ImageWithFallback
                                            priority={true}
                                            src={data.image}
                                            alt={`Image for ${data.name}`}
                                            width={0}
                                            height={0}
                                            sizes='100vw'
                                            className='sm:w-[32px] sm:h-[32px] w-[20px] h-[20px] object-contain'
                                        />
                                    </div>
                                    <div>
                                        <motion.div variants={textMotion}>
                                            <Typography className="md:text-base text-sm text-white">
                                                {data.name}
                                            </Typography>
                                        </motion.div>
                                        <motion.div
                                            variants={slashMotion}
                                        >
                                            <Typography variant="small" className="text-white">
                                                {data.profiency}
                                            </Typography>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </SkillCards>
                        )
                    }
                </div>
            </Motion>
            <div className="mt-10">
                <Motion direction="x" transitionData={{ delay: .4 }}>
                    <div className="flex w-full mb-6 space-x-4" data-aos='fade-up'>
                        <div className="relative w-[5%]">
                            <div className="h-[1px] w-full bg-anzac-200 absolute top-3"></div>
                        </div>
                        <div className="w-3/4">
                            <Typography className="text-anzac-50 md:text-xl text-base font-semibold" textGradient>
                                Skills 3D & Design
                            </Typography>
                        </div>
                    </div>
                </Motion>
            </div>
            <Motion direction="y" transitionData={{ delay: .6 }}>
                <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-between items-center' data-aos='fade-up'>
                    {
                        Design?.map((data, index) =>
                            <SkillCards key={index} >
                                <motion.div initial="rest" whileHover="hover" animate="rest" className="border-solid border-2 p-4 justify-center items-center border-anzac-200 rounded-md flex flex-row shadow-lg shadow-anzac-200/30 space-x-6 px-8 m-6">
                                    <div>
                                        <ImageWithFallback
                                            priority={true}
                                            src={data.image}
                                            alt={`Image for ${data.name}`}
                                            width={0}
                                            height={0}
                                            sizes='100vw'
                                            className='sm:w-[32px] sm:h-[32px] w-[20px] h-[20px] object-contain'
                                        />
                                    </div>
                                    <div>
                                        <motion.div variants={textMotion}>
                                            <Typography variant="paragraph" className=" text-white">
                                                {data.name}
                                            </Typography>
                                        </motion.div>
                                        <motion.div
                                            variants={slashMotion}
                                        >
                                            <Typography variant="small" className="text-white">
                                                {data.profiency}
                                            </Typography>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </SkillCards>
                        )
                    }
                </div>
            </Motion>
        </Container >
    );
}
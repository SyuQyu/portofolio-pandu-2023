'use client'
import Container from '@/components/common/container';
import Motion from '@/components/common/motion';
import SkillCards from '@/components/common/skillCards';
import ImageWithFallback from '@/components/common/imageWithFallback';
import { Skills } from '@/contants/dataSkills';
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
                <div className="flex w-full mb-6 space-x-4">
                    <div className="relative w-[5%]">
                        <div className="h-[1px] w-full bg-anzac-200 absolute top-3"></div>
                    </div>
                    <div className="w-3/4">
                        <Typography variant="h5" className="text-anzac-50" textGradient>
                            About Me
                        </Typography>
                    </div>
                </div>
            </Motion>
            <div className="flex space-x-6 bg-gray-800/50 p-10 rounded-lg">
                <div className="w-1/3 items-center">
                    <Card
                        shadow={false}
                        className="relative grid h-[30rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
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
                            <Typography variant="h5" className=" text-white">
                                Pandu Utomo
                            </Typography>
                            <Typography variant="small" className="mb-4 text-white">
                                Website Developer / 3D Environment Artist
                            </Typography>
                        </CardBody>
                    </Card>
                </div>
                <div className="w-2/3 m-auto flex flex-col justify-center">
                    <Motion direction="x" transitionData={{ delay: .6 }}>
                        <Typography variant="paragraph" className="mb-4 text-white">
                            Hello there! My name is Pandu Utomo, and I am currently an undergraduate student pursuing a degree in Computer Science with a major in Informatics at Universitas Pembangunan Nasional Veteran Jakarta. I have always been deeply fascinated by the world of technology and its potential to shape the future. My primary areas of interest lie in web development and 3D environment design.
                        </Typography>
                        <Typography variant="paragraph" className="mb-4 text-white">
                            Over the course of my academic journey, I have delved into the intricacies of programming, software development, and data analysis, all of which have contributed to my growing expertise in the field of computer science. Web development, in particular, has captured my imagination, and I find great joy in crafting interactive and visually appealing websites that seamlessly blend form and function.
                        </Typography>
                        <Typography variant="paragraph" className="mb-4 text-white">
                            Additionally, my passion for 3D environment design has allowed me to explore the realm of virtual landscapes and immersive experiences. Combining creativity with technical skills, I have enjoyed experimenting with various design tools to build captivating virtual environments.
                        </Typography>
                        <Typography variant="paragraph" className="mb-4 text-white">
                            Besides my academic pursuits, I have gained practical experience in web development through internships and personal projects, totaling approximately one year of hands-on experience. This exposure has provided me with invaluable insights into the real-world challenges and problem-solving techniques that developers face.
                        </Typography>
                        <Typography variant="paragraph" className="mb-4 text-white">
                            As I continue my education and exploration in the ever-evolving world of technology, my goal is to become a proficient and innovative professional in the field of web development and 3D design. I look forward to contributing my skills and creativity to projects that make a positive impact on people's lives and the digital landscape.
                        </Typography>
                    </Motion>
                </div>
            </div>
            <div className="mt-10">
                <Motion direction="x" transitionData={{ delay: .4 }}>
                    <div className="flex w-full mb-6 space-x-4">
                        <div className="relative w-[5%]">
                            <div className="h-[1px] w-full bg-anzac-200 absolute top-3"></div>
                        </div>
                        <div className="w-3/4">
                            <Typography variant="h5" className="text-anzac-50" textGradient>
                                Skills Programming
                            </Typography>
                        </div>
                    </div>
                </Motion>
            </div>
            <Motion direction="y" transitionData={{ delay: .6 }}>
                <div className='grid grid-cols-6 justify-between items-center'>
                    {
                        Skills?.map((data, index) =>
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
                                            className='w-[32px] sm:h-[32px] object-cover'
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
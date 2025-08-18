'use client'
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Typography } from "@material-tailwind/react";
import { motion } from 'framer-motion';
import { Sosmed } from '@/contants/dataSkills';

// Dynamic imports for better performance
const Container = dynamic(() => import('@/components/common/container'));
const Motion = dynamic(() => import('@/components/common/motion'));
const ImageWithFallback = dynamic(() => import('@/components/common/imageWithFallback'));
const LineBar = dynamic(() => import('@/components/common/lineBar'));
const Person = dynamic(() => import('@/components/Canvas/person'), {
    loading: () => <div className="w-full h-full flex justify-center items-center">Loading 3D Model...</div>
});

// Component-level constants
const ABOUT_ME_CONTENT = {
    title: "About Me",
    introduction: "Professional Summary",
    socialMedia: "Connect With Me",
    description: "Computer Science student at Universitas Pembangunan Nasional Veteran Jakarta with 3+ years of hands-on experience in full-stack web development. Proven track record in delivering high-quality web applications using modern technologies including React.js, Next.js, Node.js, and Express.js. Passionate about creating innovative digital solutions and experienced in both individual and team-based development environments. Currently maintaining a GPA of 3.65 while actively contributing to real-world projects and mentoring fellow students in backend development.",
    // highlights: [
    //     "3+ years experience in full-stack web development",
    //     "Proficient in React.js, Next.js, Node.js, and modern JavaScript",
    //     "Experience with 3D modeling and WebGL using Blender and Three.js",
    //     "Strong background in database design (MySQL, MongoDB)",
    //     "Active mentor and project leader in academic organizations",
    //     "Currently maintaining GPA 3.65/4.00"
    // ]
} as const;

export default function AboutMe() {
    return (
        <Container id="aboutMeSection" className="flex flex-col gap-4 justify-between items-center h-full">
            <motion.div className='flex flex-row justify-center items-center w-full gap-4'>
                <motion.h1 className="md:text-5xl sm:text-2xl text-lg font-bold flex-1 whitespace-nowrap">
                    {ABOUT_ME_CONTENT.title}
                </motion.h1>
                <LineBar />
            </motion.div>

            <div className='grid md:grid-cols-2 grid-cols-1 gap-6 justify-center w-full'>
                <div className='w-full h-full'>
                    <Person />
                </div>

                <div className="flex md:flex-row flex-col justify-center items-center md:space-x-6 md:p-10 p-4 md:pt-0 pt-8 mt-10 rounded-lg w-full sticky top-0 -z-0 bg-[#ececec] md:h-full lg:h-[75vh] xl:h-[65vh]">
                    <div className="w-full md:mt-8 mt-0 flex flex-col justify-center items-center">
                        {/* Introduction Section */}
                        <IntroductionSection />

                        {/* Social Media Section */}
                        <SocialMediaSection />
                    </div>
                </div>
            </div>
        </Container>
    );
}

// Extracted components for better organization and performance
function IntroductionSection() {
    return (
        <div className="w-full flex flex-col justify-center">
            <Motion direction="x" transitionData={{ delay: .5 }}>
                <div className="flex flex-row justify-start items-center w-full mb-4 space-x-4">
                    <Typography className="md:text-xl text-base font-semibold">
                        {ABOUT_ME_CONTENT.introduction}
                    </Typography>
                    <div className='w-full h-[3px] bg-[#002c3e]/30 rounded-full' />
                </div>
            </Motion>
            <Motion direction="x" transitionData={{ delay: .6 }}>
                <Typography className="mb-4 md:text-base text-sm text-justify">
                    {ABOUT_ME_CONTENT.description}
                </Typography>
            </Motion>
            {/* <Motion direction="x" transitionData={{ delay: .7 }}>
                <div className="mt-4">
                    <Typography className="md:text-lg text-base font-semibold mb-2">
                        Key Highlights:
                    </Typography>
                    <ul className="space-y-1">
                        {ABOUT_ME_CONTENT.highlights.map((highlight, index) => (
                            <li key={index} className="md:text-sm text-xs flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                <span>{highlight}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </Motion> */}
        </div>
    );
}

function SocialMediaSection() {
    return (
        <div className="w-full flex flex-col justify-center">
            <Motion direction="x" transitionData={{ delay: .5 }}>
                <div className="flex flex-row justify-start items-center w-full mb-4 space-x-4">
                    <Typography variant="h5" className="md:text-xl text-base font-semibold w-auto whitespace-nowrap">
                        {ABOUT_ME_CONTENT.socialMedia}
                    </Typography>
                    <div className='w-full h-[3px] bg-[#002c3e]/30 rounded-full' />
                </div>
            </Motion>
            <Motion direction="x" transitionData={{ delay: .6 }} className="grid md:grid-cols-4 grid-cols-3 justify-center items-center md:gap-4 gap-4">
                {Sosmed?.map((data, index) => (
                    <SocialMediaItem key={index} data={data} />
                ))}
            </Motion>
        </div>
    );
}

function SocialMediaItem({ data }: { data: { name: string; image: string; link: string } }) {
    return (
        <Link href={data.link} className="flex flex-row space-x-4 w-full">
            <ImageWithFallback
                priority={true}
                src={data.image}
                alt={`${data.name} icon`}
                width={0}
                height={0}
                sizes='100vw'
                className='sm:w-[32px] sm:h-[32px] w-[20px] h-[20px] object-contain'
            />
            <Typography className="m-auto md:text-base text-sm" textGradient>
                {data.name}
            </Typography>
        </Link>
    );
}
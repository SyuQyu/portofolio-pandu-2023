'use client'
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import React, { useMemo } from 'react';

// Dynamic imports for performance optimization
const Container = dynamic(() => import('@/components/common/container'));
const CustomAccordion = dynamic(() => import('@/components/common/customAccordion'));
const LineBar = dynamic(() => import('@/components/common/lineBar'));

// Types for better type safety
interface ExperienceItem {
    jobsPosition: string;
    company: string;
    id: number;
    tipe: string;
    image: string;
    dateStart: string;
    dateEnd: string;
    untilNow: boolean;
    desc: React.ReactNode;
}

// Experience data - moved outside component for better performance
const EXPERIENCE_DATA: ExperienceItem[] = [
    {
        jobsPosition: 'Web Developer',
        company: "Barrakusuma Spatial Teknologi",
        id: 1,
        tipe: "Freelance · 2 months",
        image: "/image/company/barras.jpg", // Using existing image as placeholder
        dateStart: "2025-07-01",
        dateEnd: "-",
        untilNow: true,
        desc: (
            <div className='flex flex-col gap-3 w-full'>
                <p className="text-sm text-gray-600 mb-2">Remote</p>
                <div className="space-y-2">
                    <p>• Developing modern web applications using Next.js and Kotlin integration</p>
                    <p>• Implementing responsive design and optimizing user experience across devices</p>
                    <p>• Collaborating with spatial technology team to create innovative digital solutions</p>
                    <p>• Maintaining high code quality standards and following best practices</p>
                    <p>• Working with modern tech stack to deliver scalable applications</p>
                </div>
                <div className="mt-2">
                    <p className="text-xs text-gray-500">Skills: Next.js · Kotlin · Web Development · Responsive Design</p>
                </div>
            </div>
        )
    },
    {
        jobsPosition: 'Frontend Developer',
        company: "CrescentRating",
        id: 2,
        tipe: "Remote · 1 year",
        image: "/image/company/cr.jpg", // Using existing image as placeholder
        dateStart: "2024-01-01",
        dateEnd: "2024-12-01",
        untilNow: false,
        desc: (
            <div className='flex flex-col gap-3 w-full'>
                <p className="text-sm text-gray-600 mb-2">Remote</p>
                <div className="space-y-2">
                    <p>• Collaborated on the development of a new website for Crescent Rating, ensuring smooth transitions and enhanced functionality</p>
                    <p>• Actively contributed to identifying and resolving bugs, improving the overall user experience</p>
                    <p>• Sliced and implemented the user interface (UI) provided by the UI/UX team to align with the new website design</p>
                    <p>• Successfully migrated the UI from the old website to the new platform, ensuring consistency and improved design</p>
                    <p>• Assisted the team in creating and delivering presentations to showcase project progress and key deliverables</p>
                </div>
                <div className="mt-2">
                    <p className="text-xs text-gray-500">Skills: Next.js · PHP · Frontend Development · UI/UX Implementation · Bug Resolution</p>
                </div>
            </div>
        )
    },
    {
        jobsPosition: 'Full-stack Developer',
        company: "Peluang.co",
        id: 3,
        tipe: "Part-time · 6 months",
        image: "/image/company/peluang.jpg",
        dateStart: "2024-03-01",
        dateEnd: "2024-08-01",
        untilNow: false,
        desc: (
            <div className='flex flex-col gap-3 w-full'>
                <p className="text-sm text-gray-600 mb-2">Jakarta, Indonesia · Remote</p>
                <div className="space-y-2">
                    <p>• Developed and maintained scalable web applications using Next.js, React.js, and Node.js</p>
                    <p>• Implemented responsive UI/UX designs and integrated RESTful APIs with 99% uptime</p>
                    <p>• Collaborated with cross-functional teams of 5+ developers to deliver high-quality software solutions</p>
                    <p>• Optimized application performance resulting in 40% faster page load times</p>
                    <p>• Participated in code reviews and maintained clean, well-documented codebase</p>
                </div>
                <div className="mt-2">
                    <p className="text-xs text-gray-500">Skills: React.js · Next.js · Node.js · JavaScript · TypeScript · API Integration</p>
                </div>
            </div>
        )
    },
    {
        jobsPosition: "Frontend Developer",
        company: "MAXY Academy",
        id: 4,
        tipe: "Internship · 4 months",
        image: "/image/company/maxy.jpg",
        dateStart: "2023-09-01",
        dateEnd: "2024-01-01",
        untilNow: false,
        desc: (
            <div className='flex flex-col gap-3 w-full'>
                <p className="text-sm text-gray-600 mb-2">Jakarta, Indonesia · On-site</p>
                <div className="space-y-2">
                    <p>• Built responsive web interfaces for educational platform serving 500+ students</p>
                    <p>• Collaborated with design team to implement pixel-perfect UI components using React.js</p>
                    <p>• Ensured cross-browser compatibility and optimized user experience across devices</p>
                    <p>• Reduced development time by 30% through reusable component architecture</p>
                    <p>• Participated in daily standups and sprint planning sessions</p>
                </div>
                <div className="mt-2">
                    <p className="text-xs text-gray-500">Skills: React.js · CSS3 · HTML5 · JavaScript · Responsive Design · UI/UX Implementation</p>
                </div>
            </div>
        )
    },
    {
        jobsPosition: "Staff of Project and Research",
        company: "KSM Android UPN Veteran Jakarta",
        id: 5,
        tipe: "Organization · 1 year",
        image: "/image/company/ksm.jpg",
        dateStart: "2022-12-01",
        dateEnd: "2023-12-01",
        untilNow: false,
        desc: (
            <div className='flex flex-col gap-3 w-full'>
                <p className="text-sm text-gray-600 mb-2">Jakarta, Indonesia · On-site</p>
                <div className='space-y-3'>
                    <div className='w-full'>
                        <p className='font-semibold text-gray-800 mb-1'>Backend Development Mentor</p>
                        <div className="space-y-1 ml-2">
                            <p>• Mentored 20+ students in backend development fundamentals</p>
                            <p>• Conducted weekly workshops on Node.js, Express.js, and database management</p>
                            <p>• Developed comprehensive curriculum for backend development bootcamp</p>
                        </div>
                    </div>
                    <div className='w-full'>
                        <p className='font-semibold text-gray-800 mb-1'>Lead Backend Developer - LMS Project</p>
                        <div className="space-y-1 ml-2">
                            <p>• Led development of Learning Management System backend serving 100+ users</p>
                            <p>• Implemented RESTful APIs and designed scalable database architecture</p>
                            <p>• Managed team of 3 junior developers and conducted code reviews</p>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <p className="text-xs text-gray-500">Skills: Node.js · Express.js · MySQL · REST APIs · Team Leadership · Mentoring</p>
                </div>
            </div>
        )
    },
    {
        jobsPosition: "Founder & Full-stack Developer",
        company: "Mudahdigital.id",
        id: 6,
        tipe: "Self-employed · 4+ years",
        image: "/image/company/md.png",
        dateStart: "2021-01-01",
        dateEnd: "-",
        untilNow: true,
        desc: (
            <div className='flex flex-col gap-3 w-full'>
                <p className="text-sm text-gray-600 mb-2">Jakarta, Indonesia · Remote</p>
                <div className="space-y-2">
                    <p>• Founded and maintain digital services platform serving 50+ clients</p>
                    <p>• Develop and deploy web applications using modern tech stack</p>
                    <p>• Manage end-to-end project lifecycle from ideation to deployment</p>
                    <p>• Provide technical consultation and client support services</p>
                    <p>• Generated consistent revenue through digital product development</p>
                </div>
                <div className="mt-2">
                    <p className="text-xs text-gray-500">Skills: Full-stack Development · Project Management · Client Relations · Entrepreneurship</p>
                </div>
            </div>
        )
    },
];

export default function Experience() {
    // Memoize the experience data to prevent unnecessary re-renders
    const experienceData = useMemo(() => EXPERIENCE_DATA, []);

    return (
        <Container id="experienceSection" className="flex flex-col gap-4 justify-between items-center h-full">
            <motion.div className='flex flex-row justify-center items-center w-full gap-4'>
                <motion.h1 className="md:text-5xl sm:text-2xl text-lg font-bold flex-1 whitespace-nowrap">
                    Experiences
                </motion.h1>
                <LineBar />
            </motion.div>

            <div className='grid grid-cols-1 gap-6 justify-center w-full'>
                <div className="flex md:flex-row flex-col justify-start items-center md:space-x-6 md:p-10 rounded-lg w-full">
                    <div className='w-full h-full flex flex-col gap-6'>
                        {experienceData.map((item) => (
                            <CustomAccordion
                                key={item.id}
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
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    );
}
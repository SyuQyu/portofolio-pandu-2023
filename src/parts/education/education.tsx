'use client'
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import React from 'react';
import { Typography } from '@material-tailwind/react';

// Dynamic imports for performance optimization
const Container = dynamic(() => import('@/components/common/container'));
const LineBar = dynamic(() => import('@/components/common/lineBar'));

// Types for education data
interface EducationItem {
    institution: string;
    degree: string;
    field: string;
    gpa: string;
    startDate: string;
    endDate: string;
    location: string;
    activities: string[];
}

// Education data
const EDUCATION_DATA: EducationItem[] = [
    {
        institution: "Universitas Pembangunan Nasional Veteran Jakarta",
        degree: "Bachelor's Degree",
        field: "Computer Science",
        gpa: "3.65/4.00",
        startDate: "2020",
        endDate: "2024",
        location: "Jakarta, Indonesia",
        activities: [
            "KSM Android UPN - Staff of Project and Research",
            "Backend Development Mentor",
            "Active in programming competitions and hackathons"
        ]
    }
];

export default function Education() {
    return (
        <Container id="educationSection" className="flex flex-col gap-4 justify-between items-center h-full">
            <motion.div className='flex flex-row justify-center items-center w-full gap-4'>
                <motion.h1 className="md:text-5xl sm:text-2xl text-lg font-bold flex-1 whitespace-nowrap">
                    Education
                </motion.h1>
                <LineBar />
            </motion.div>

            <div className='grid grid-cols-1 gap-6 justify-center w-full'>
                <div className="flex md:flex-row flex-col justify-start items-center md:space-x-6 md:p-10 p-6 rounded-lg w-full bg-white shadow-md">
                    <div className='w-full h-full flex flex-col gap-6'>
                        {EDUCATION_DATA.map((item, index) => (
                            <div key={index} className="border-l-4 border-blue-500 pl-6 py-4">
                                <div className="flex flex-col space-y-2">
                                    <Typography className="text-xl font-bold text-gray-800">
                                        {item.institution}
                                    </Typography>
                                    <Typography className="text-lg font-semibold text-gray-700">
                                        {item.degree} in {item.field}
                                    </Typography>
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                        <span>{item.startDate} - {item.endDate}</span>
                                        <span>•</span>
                                        <span>{item.location}</span>
                                        <span>•</span>
                                        <span className="font-semibold text-blue-600">GPA: {item.gpa}</span>
                                    </div>

                                    {/* <div className="mt-4">
                                        <Typography className="font-semibold text-gray-800 mb-2">
                                            Activities and Societies:
                                        </Typography>
                                        <ul className="space-y-1">
                                            {item.activities.map((activity, actIndex) => (
                                                <li key={actIndex} className="text-sm text-gray-700 flex items-start">
                                                    <span className="text-blue-600 mr-2">•</span>
                                                    <span>{activity}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    );
}

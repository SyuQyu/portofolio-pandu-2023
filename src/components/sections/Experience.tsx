'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';

const EXPERIENCES = [
    {
        role: "Full-stack Developer",
        company: "Freelance",
        period: "2023 - Present",
        description: "Developing modern web applications using Next.js and React technology stack. Delivering high-quality code and immersive user experiences."
    },
    {
        role: "3D Artist",
        company: "Personal Projects",
        period: "2022 - Present",
        description: "Creating realistic and stylized 3D environments using Blender. Specializing in hard-surface modeling and procedural texturing."
    },
    {
        role: "Computer Science Student",
        company: "University",
        period: "2021 - Present",
        description: "Focusing on Software Engineering and Computer Graphics. Active member of tech communities."
    }
];

export const Experience = () => {
    return (
        <section id="experienceSection" className="py-20 relative px-6">
            <SectionHeading title="Experience" subtitle="My professional journey" />

            <div className="max-w-4xl mx-auto relative">
                {/* Vertical Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-blue to-accent-purple transform -translate-x-1/2 hidden md:block" />

                <div className="space-y-12">
                    {EXPERIENCES.map((exp, index) => (
                        <motion.div
                            key={index}
                            className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex-1 w-full relative z-10">
                                <GlassCard className="relative overflow-hidden group">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-accent-blue transition-all duration-300 group-hover:w-2" />
                                    <h3 className="text-xl font-bold text-white mb-1 pl-2">{exp.role}</h3>
                                    <h4 className="text-accent-purple mb-2 pl-2">{exp.company}</h4>
                                    <p className="text-gray-400 text-sm mb-4 pl-2 font-mono">{exp.period}</p>
                                    <p className="text-gray-300 pl-2">{exp.description}</p>
                                </GlassCard>
                            </div>

                            {/* Timeline Dot */}
                            <div className="w-8 h-8 rounded-full bg-primary-dark border-4 border-accent-blue z-20 hidden md:block lg:absolute lg:left-1/2 lg:-translate-x-1/2 shadow-[0_0_15px_rgba(0,212,255,0.5)]" />

                            <div className="flex-1 hidden md:block" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

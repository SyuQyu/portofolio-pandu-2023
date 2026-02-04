'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';

const EXPERIENCES = [
    {
        role: "Web Developer",
        company: "Barrakusuma Spatial Teknologi",
        period: "July 2025 - Present",
        description: "Developing modern web applications using Next.js and Kotlin integration. Implementing responsive design and optimizing user experience across devices."
    },
    {
        role: "Frontend Developer",
        company: "CrescentRating",
        period: "Jan 2024 - Dec 2024",
        description: "Collaborated on the development of a new website, ensuring smooth transitions and enhanced functionality."
    },
    {
        role: "Full-stack Developer",
        company: "Peluang.co",
        period: "Mar 2024 - Aug 2024",
        description: "Developed and maintained scalable web applications using Next.js, React.js, and Node.js. Optimized application performance, achieving 40% faster load times."
    },
    {
        role: "Frontend Developer",
        company: "MAXY Academy",
        period: "Sep 2023 - Jan 2024",
        description: "Built responsive web interfaces for a learning platform serving 500+ students. Implemented pixel-perfect UI components and layouts using React.js."
    },
    {
        role: "Staff of Project and Research",
        company: "KSM Android UPN Veteran Jakarta",
        period: "Dec 2022 - Dec 2023",
        description: "Served as a Backend Development Mentor. Led backend development for a Learning Management System (LMS) used by 100+ students."
    },
    {
        role: "Founder & Full-stack Developer",
        company: "Mudahdigital.id",
        period: "Jan 2021 - Present",
        description: "Founded and managed a digital services platform serving 50+ clients. Managed the entire project lifecycle for various digital solutions."
    }
];

export const Experience = () => {
    return (
        <section id="experienceSection" className="py-20 relative px-6">
            <SectionHeading title="Experience" subtitle="My professional journey" />

            <div className="max-w-4xl mx-auto relative">
                {/* Vertical Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--accent-primary)] to-[var(--accent-secondary)] transform -translate-x-1/2 hidden md:block" />

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
                                    <div className="absolute top-0 left-0 w-1 h-full bg-[var(--accent-primary)] transition-all duration-300 group-hover:w-2" />
                                    <h3 className="text-xl font-bold text-[var(--foreground)] mb-1 pl-2">{exp.role}</h3>
                                    <h4 className="text-[var(--accent-secondary)] mb-2 pl-2">{exp.company}</h4>
                                    <p className="text-[var(--foreground-muted)] text-sm mb-4 pl-2 font-mono">{exp.period}</p>
                                    <p className="text-[var(--foreground-secondary)] pl-2">{exp.description}</p>
                                </GlassCard>
                            </div>

                            {/* Timeline Dot */}
                            <div className="w-8 h-8 rounded-full bg-[var(--background)] border-4 border-[var(--accent-primary)] z-20 hidden md:block lg:absolute lg:left-1/2 lg:-translate-x-1/2 shadow-[0_0_15px_var(--glow-color)]" />

                            <div className="flex-1 hidden md:block" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

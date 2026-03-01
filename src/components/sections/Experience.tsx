'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';

const EXPERIENCES = [
    {
        role: "Fullstack Web Developer",
        company: "Eesel",
        period: "September 2025 - Present",
        description: "I support Eesel AI's customer-facing engineering work by investigating and fixing bugs, implementing small feature enhancements, and troubleshooting customer configurations and integrations. I also refine and maintain AI prompts to improve response quality."
    },
    {
        role: "Fullstack Web Developer",
        company: "CrescentRating",
        period: "September 2024 - Present",
        description: "Collaborated on the development of a new website for Crescent Rating and contributed to resolving bugs. My accomplishments included slicing the user interface, converting the existing UI, and bug fixing in backend."
    },
    {
        role: "Undergraduate in Computer Science (3.9/4.00)",
        company: "Universitas Pembangunan Nasional Veteran Jakarta",
        period: "August 2021 - July 2025",
        description: "Undergraduate studies focusing on Computer Science."
    },
    {
        role: "Fullstack Web Developer Part Time",
        company: "Peluang.co",
        period: "October 2023 - March 2024",
        description: "Collaborated on the development of a website product aimed at helping a franchise advertise their business on Peluang.co. Contributions included slicing the UI using Next.js, Tailwind, and Schdn UI, and implementing backend services and APIs."
    },
    {
        role: "Staff project and research division",
        company: "Kelompok Studi Mahasiswa Android",
        period: "December 2022 - December 2023",
        description: "Participated in creating learning materials named learning ammo, Android Hackathon, Internal Project Development as back-end mentor, and Study Club as Basic back-end mentor."
    },
    {
        role: "Fullstack Web Developer",
        company: "Etech",
        period: "June 2022 - September 2022",
        description: "Collaborated to develop a comprehensive website encompassing both front-end and back-end components. Implemented the UI design using React.js and created APIs using Express.js."
    },
    {
        role: "Rekayasa Perangkat Lunak",
        company: "SMK Negeri 1 Kota Bekasi",
        period: "July 2018 - July 2021",
        description: "Vocational high school education focusing on Software Engineering."
    },
    {
        role: "Fullstack Web Developer Intern",
        company: "PT. Brilyan Trimatra Utama",
        period: "October 2019 - March 2020",
        description: "Participated in an internship program creating an accommodation website for PON XX 2020. Developed APIs using Express.js and implemented the UI using React.js."
    }
];

export const Experience = () => {
    return (
        <section id="experienceSection" className="py-20 relative px-6">
            <SectionHeading title="Experience & Education" subtitle="My professional and academic journey" />

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

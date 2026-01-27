'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GradientButton } from '@/components/ui/GradientButton';
import { codingPortfolio, threeDPortfolio } from '@/contants/portofolio';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Card with 3D Flip Effect
const ProjectCard = ({ item }: { item: any }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="relative w-full h-[300px] cursor-pointer perspective-1000 group"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <motion.div
                className="w-full h-full relative preserve-3d transition-all duration-500"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
            >
                {/* Front Face */}
                <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-lg border border-[var(--glass-border)] bg-[var(--surface)]">
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/90 via-transparent to-transparent flex flex-col justify-end p-6">
                        <h3 className="text-xl font-bold text-[var(--foreground)] mb-1">{item.title}</h3>
                        <p className="text-[var(--accent-primary)] text-sm">{item.subtitle}</p>
                    </div>
                </div>

                {/* Back Face */}
                <div
                    className="absolute inset-0 backface-hidden rounded-xl bg-[var(--surface)] p-6 flex flex-col justify-between border border-[var(--accent-secondary)]/30 shadow-[0_0_20px_var(--glow-color)]"
                    style={{ transform: 'rotateY(180deg)' }}
                >
                    <div>
                        <h3 className="text-xl font-bold text-[var(--accent-secondary)] mb-2">{item.title}</h3>
                        <p className="text-[var(--foreground-secondary)] text-sm mb-4 line-clamp-4">{item.description}</p>
                    </div>

                    <div className="flex gap-4">
                        {item.projectLink?.github && (
                            <a
                                href={item.projectLink.github}
                                target="_blank"
                                rel="noreferrer"
                                className="p-2 rounded-full bg-[var(--glass-bg)] hover:bg-[var(--surface-hover)] text-[var(--foreground)] transition-colors"
                            >
                                <FaGithub size={20} />
                            </a>
                        )}
                        {item.projectLink?.hosting && (
                            <a
                                href={item.projectLink.hosting}
                                target="_blank"
                                rel="noreferrer"
                                className="p-2 rounded-full bg-[var(--glass-bg)] hover:bg-[var(--surface-hover)] text-[var(--foreground)] transition-colors"
                            >
                                <FaExternalLinkAlt size={18} />
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export const Projects = () => {
    const [activeTab, setActiveTab] = useState<'coding' | '3d'>('coding');
    const items = activeTab === 'coding' ? codingPortfolio : threeDPortfolio;

    return (
        <section id="portofolioSection" className="py-20 relative px-6">
            <SectionHeading title="Portfolio" subtitle="Showcase of my latest work" />

            <div className="flex justify-center gap-4 mb-12">
                <GradientButton
                    variant={activeTab === 'coding' ? 'primary' : 'outline'}
                    onClick={() => setActiveTab('coding')}
                >
                    Coding
                </GradientButton>
                <GradientButton
                    variant={activeTab === '3d' ? 'primary' : 'outline'}
                    onClick={() => setActiveTab('3d')}
                >
                    3D Arts
                </GradientButton>
            </div>

            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            >
                <AnimatePresence mode="popLayout">
                    {items.map((item: any) => (
                        <motion.div
                            key={item.id}
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ProjectCard item={item} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
};

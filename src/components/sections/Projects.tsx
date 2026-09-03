'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectModal } from '@/components/ui/ProjectModal';
import { staggerParent, staggerChild, EASE } from '@/lib/motion';
import { catalogueProjects, type Project } from '@/contants/projectCuration';
import { selectedWork } from '@/contants/selectedWork';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';

const summaryOf = (p: Project) => {
    const text = p.description || p.detail || '';
    if (!text) return 'Open for the detail.';
    const firstSentence = text.split(/(?<=[.!?])\s/)[0];
    return firstSentence.length > 150 ? firstSentence.slice(0, 147).trimEnd() + '…' : firstSentence;
};

// One shipped site. The screenshot IS the evidence, so nothing is laid over it
// and nothing is cropped away by a cell that fights its aspect: every capture
// is 16:10, and the plate is 16:10.
const WorkPlate = ({ project, onOpen, lead = false }: { project: Project; onOpen: () => void; lead?: boolean }) => (
    <motion.button
        type="button"
        onClick={onOpen}
        variants={staggerChild}
        whileHover="hover"
        className="group block w-full text-left focus-visible:outline-none"
    >
        <motion.div
            className="relative aspect-[16/10] w-full overflow-hidden rounded-[4px] border border-[var(--line)] bg-[var(--plate)] transition-colors group-hover:border-[var(--foreground)] group-focus-visible:border-[var(--signal)]"
            variants={{ rest: { y: 0 }, hover: { y: -5 } }}
            initial="rest"
            transition={{ duration: 0.5, ease: EASE }}
        >
            <motion.div
                className="absolute inset-0"
                variants={{ rest: { scale: 1 }, hover: { scale: 1.02 } }}
                initial="rest"
                transition={{ duration: 0.7, ease: EASE }}
            >
                <Image
                    src={project.image as string}
                    alt={project.imageAlt || project.name}
                    fill
                    sizes={lead ? '(max-width: 768px) 100vw, 1150px' : '(max-width: 768px) 100vw, 50vw'}
                    className="object-cover object-top"
                />
            </motion.div>
        </motion.div>

        {/* Caption sits on the paper below the plate, never over the capture. */}
        <div className="mt-5 flex items-start justify-between gap-6">
            <div className="min-w-0">
                <div className="flex items-center gap-3 font-mono text-label-xs uppercase tracking-[0.16em] text-[var(--foreground-muted)]">
                    <span className="truncate">{project.language}</span>
                    {project.gated ? (
                        <span className="shrink-0">Private system</span>
                    ) : (
                        <span className="flex shrink-0 items-center gap-1.5 text-[var(--signal-ink)]">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--signal)]" /> Live
                        </span>
                    )}
                </div>

                <h3
                    className="mt-3 font-display font-black uppercase leading-[0.98] tracking-[-0.01em] text-[var(--foreground)]"
                    style={{ fontSize: lead ? 'clamp(1.5rem, 3vw, 2.25rem)' : 'clamp(1.15rem, 2vw, 1.5rem)' }}
                >
                    {project.name}
                </h3>

                <p
                    className="mt-3 text-sm leading-relaxed text-[var(--foreground-secondary)]"
                    style={{ maxWidth: lead ? '42rem' : '28rem' }}
                >
                    {summaryOf(project)}
                </p>

                {project.stack && project.stack.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                        {project.stack.map((t) => (
                            <li
                                key={t}
                                className="rounded-full border border-[var(--line-strong)] px-3 py-1 font-mono text-label-sm tracking-wide text-[var(--foreground-secondary)]"
                            >
                                {t}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <span className="mt-1 hidden shrink-0 items-center gap-2 font-mono text-label-sm uppercase tracking-[0.18em] text-[var(--foreground)] transition-colors group-hover:text-[var(--signal-ink)] sm:inline-flex">
                Details
                <FaArrowRight size={10} className="transition-transform group-hover:translate-x-1" />
            </span>
        </div>
    </motion.button>
);

export const Projects = () => {
    const [selected, setSelected] = useState<Project | null>(null);
    const [showAll, setShowAll] = useState(false);

    const [lead, ...others] = selectedWork;
    const rest = catalogueProjects;
    const visible = showAll ? rest : rest.slice(0, 12);

    return (
        <section id="portofolioSection" className="relative py-24 md:py-32 px-6">
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    title="Selected work"
                    number="/ Shipped"
                    subtitle="Client systems and company sites running in production. Every plate is a capture of the live build — open any for the detail."
                />

                <motion.div
                    className="flex flex-col gap-14 md:gap-20"
                    variants={staggerParent(0.08)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.08 }}
                >
                    <WorkPlate project={lead} lead onOpen={() => setSelected(lead)} />

                    <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-x-10 md:gap-y-16">
                        {others.map((p) => (
                            <WorkPlate key={p.id} project={p} onOpen={() => setSelected(p)} />
                        ))}
                    </div>
                </motion.div>

                {/* The GitHub side: everything else, as a plain index. */}
                <div className="mt-24 md:mt-32">
                    <div className="flex items-baseline justify-between border-t border-[var(--line-strong)] pt-6">
                        <h3 className="font-display text-xl font-black uppercase tracking-tight text-[var(--foreground)] md:text-2xl">
                            More on GitHub
                        </h3>
                        <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--foreground-muted)]">
                            {rest.length} repos
                        </span>
                    </div>

                    <motion.ul
                        key={showAll ? 'all' : 'some'}
                        variants={staggerParent(0.03)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.05 }}
                    >
                        {visible.map((p) => (
                            <motion.li key={p.id} variants={staggerChild} className="border-b border-[var(--line)]">
                                <button
                                    type="button"
                                    onClick={() => setSelected(p)}
                                    className="group grid w-full grid-cols-[1fr_auto] items-center gap-4 py-4 text-left sm:grid-cols-[1fr_120px_auto]"
                                >
                                    <span className="truncate font-mono text-sm text-[var(--foreground)] transition-colors group-hover:text-[var(--signal-ink)]">
                                        {p.name}
                                    </span>
                                    <span className="hidden font-mono text-label-sm uppercase tracking-[0.14em] text-[var(--foreground-muted)] sm:block">
                                        {p.language || 'Other'}
                                    </span>
                                    <span className="flex items-center gap-3 justify-self-end text-[var(--foreground-muted)]">
                                        {p.live && <FaExternalLinkAlt size={11} className="transition-colors group-hover:text-[var(--signal-ink)]" />}
                                        <FaGithub size={14} className="transition-colors group-hover:text-[var(--foreground)]" />
                                    </span>
                                </button>
                            </motion.li>
                        ))}
                    </motion.ul>

                    {rest.length > 12 && (
                        <button
                            onClick={() => setShowAll((s) => !s)}
                            className="mt-8 font-mono text-label-md uppercase tracking-[0.18em] text-[var(--signal-ink)] transition-colors hover:text-[var(--foreground)]"
                        >
                            {showAll ? 'Show fewer' : `Show all ${rest.length}`}
                        </button>
                    )}
                </div>
            </div>

            <ProjectModal project={selected} onClose={() => setSelected(null)} />
        </section>
    );
};

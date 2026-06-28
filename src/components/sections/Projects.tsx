'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectModal } from '@/components/ui/ProjectModal';
import { staggerParent, staggerChild } from '@/lib/motion';
import { featuredProjects, catalogueProjects, type Project } from '@/contants/projectCuration';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';

const summaryOf = (p: Project) => {
    const text = p.description || p.detail || '';
    if (!text) return 'Open for the code and detail.';
    const firstSentence = text.split(/(?<=[.!?])\s/)[0];
    return firstSentence.length > 120 ? firstSentence.slice(0, 117).trimEnd() + '…' : firstSentence;
};

export const Projects = () => {
    const [selected, setSelected] = useState<Project | null>(null);
    const [showAll, setShowAll] = useState(false);

    const featured = featuredProjects;
    const rest = catalogueProjects;
    const visible = showAll ? rest : rest.slice(0, 12);

    return (
        <section id="portofolioSection" className="relative py-24 md:py-32 px-6">
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    title="Selected work"
                    number="/ From GitHub"
                    subtitle="Live products and experiments, pulled straight from my GitHub. Open any for the detail."
                />

                {/* Featured — clickable project cards */}
                <motion.div
                    className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
                    variants={staggerParent(0.06)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.1 }}
                >
                    {featured.map((p) => (
                        <motion.button
                            key={p.id}
                            type="button"
                            onClick={() => setSelected(p)}
                            variants={staggerChild}
                            whileHover={{ y: -5 }}
                            transition={{ type: 'spring', stiffness: 350, damping: 24 }}
                            className="group flex h-full flex-col rounded-[5px] border border-[var(--line)] bg-[var(--surface)] p-6 text-left transition-colors hover:border-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--signal)]"
                        >
                            <div className="flex items-center justify-between gap-3 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-[var(--foreground-muted)]">
                                <span>{p.language || 'Project'}</span>
                                {p.live ? (
                                    <span className="flex items-center gap-1.5 text-[var(--signal-ink)]">
                                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--signal)]" /> Live
                                    </span>
                                ) : p.stars > 0 ? (
                                    <span>★ {p.stars}</span>
                                ) : null}
                            </div>

                            <h3 className="mt-5 font-display text-xl font-black uppercase leading-[0.98] tracking-[-0.01em] text-[var(--foreground)]">
                                {p.name}
                            </h3>
                            <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--foreground-secondary)]">
                                {summaryOf(p)}
                            </p>

                            <span className="mt-6 inline-flex items-center gap-2 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-[var(--foreground)] transition-colors group-hover:text-[var(--signal-ink)]">
                                View details
                                <FaArrowRight size={10} className="transition-transform group-hover:translate-x-1" />
                            </span>
                        </motion.button>
                    ))}
                </motion.div>

                {/* Catalogue — the rest of the repos, also clickable */}
                <div className="mt-20 md:mt-28">
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
                                    <span className="hidden font-mono text-[0.68rem] uppercase tracking-[0.14em] text-[var(--foreground-muted)] sm:block">
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
                            className="mt-8 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-[var(--signal-ink)] transition-colors hover:text-[var(--foreground)]"
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

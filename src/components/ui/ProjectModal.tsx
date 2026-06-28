'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import type { Project } from '@/contants/projectCuration';

const EASE = [0.16, 1, 0.3, 1] as const;

interface Props {
    project: Project | null;
    onClose: () => void;
}

// Detail view for a project. Rendered fixed (escapes the section's stacking /
// overflow), with a backdrop, Esc-to-close, and scroll lock while open.
export const ProjectModal = ({ project, onClose }: Props) => {
    useEffect(() => {
        if (!project) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', onKey);
        const lenis = (window as any).lenis;
        lenis?.stop?.();
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', onKey);
            lenis?.start?.();
            document.body.style.overflow = '';
        };
    }, [project, onClose]);

    const meta = project
        ? [project.language, project.stars > 0 ? `★ ${project.stars}` : null, project.year ? `Updated ${project.year}` : null]
              .filter(Boolean)
              .join('  ·  ')
        : '';

    return (
        <AnimatePresence>
            {project && (
                <motion.div
                    className="fixed inset-0 z-[95] flex items-end justify-center px-4 py-6 sm:items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                >
                    <motion.button
                        type="button"
                        aria-label="Close"
                        onClick={onClose}
                        className="absolute inset-0 bg-[var(--foreground)]/45 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-label={project.name}
                        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-[6px] border border-[var(--line)] bg-[var(--background)] p-7 shadow-[var(--shadow-lift)] md:p-10"
                        initial={{ opacity: 0, y: 48, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 32, scale: 0.98 }}
                        transition={{ duration: 0.45, ease: EASE }}
                    >
                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="Close detail"
                            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-[3px] border border-[var(--line)] text-[var(--foreground-secondary)] transition-colors hover:border-[var(--foreground)] hover:text-[var(--foreground)]"
                        >
                            <FaTimes size={14} />
                        </button>

                        <div className="flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[var(--foreground-muted)]">
                            {project.live && (
                                <span className="flex items-center gap-1.5 text-[var(--signal-ink)]">
                                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--signal)]" /> Live
                                </span>
                            )}
                            <span>{meta}</span>
                        </div>

                        <h3
                            className="mt-4 max-w-[18ch] font-display font-black uppercase leading-[0.95] tracking-[-0.02em] text-[var(--foreground)]"
                            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.5rem)' }}
                        >
                            {project.name}
                        </h3>

                        <p className="mt-5 leading-relaxed text-[var(--foreground-secondary)]">
                            {project.detail ||
                                'A source-only project. Open the repository for the code and commit history.'}
                        </p>

                        {project.topics.length > 0 && (
                            <ul className="mt-6 flex flex-wrap gap-2">
                                {project.topics.map((t) => (
                                    <li
                                        key={t}
                                        className="rounded-full border border-[var(--line-strong)] px-3 py-1 font-mono text-[0.65rem] tracking-wide text-[var(--foreground)]"
                                    >
                                        {t}
                                    </li>
                                ))}
                            </ul>
                        )}

                        <div className="mt-8 flex flex-wrap gap-3">
                            {project.live && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-[3px] bg-[var(--signal)] px-5 py-3 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-[var(--ink-on-signal)] transition-colors hover:bg-[var(--foreground)] hover:text-[var(--background)]"
                                >
                                    <FaExternalLinkAlt size={12} /> Visit live
                                </a>
                            )}
                            {project.links.map((l) => (
                                <a
                                    key={l.href}
                                    href={l.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-[3px] border border-[var(--foreground)] px-5 py-3 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-[var(--foreground)] transition-colors hover:bg-[var(--foreground)] hover:text-[var(--background)]"
                                >
                                    <FaGithub size={13} /> {l.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useSpring } from 'framer-motion';
import { KineticHeading } from '@/components/ui/KineticHeading';
import { Sparkle } from '@/components/ui/Sparkle';
import { EASE, staggerParent, staggerChild } from '@/lib/motion';

interface Position {
    role: string;
    period: string;
    responsibilities?: string[];
    accomplishments?: string[];
}

// One employer, not one job title. Two stints at the same company stay under a
// single heading the way they actually happened, instead of reading down the
// timeline as two unrelated employers.
interface Role {
    company: string;
    logo?: string;
    mono?: string;
    /** Employment type and location, where that is part of the story. */
    meta?: string;
    positions: Position[];
}

interface Education {
    institution: string;
    degree: string;
    period: string;
    logo?: string;
    mono?: string;
    summary: string;
    note?: string;
}

const WORK: Role[] = [
    {
        company: 'CrescentRating',
        logo: '/image/company/cr.jpg',
        positions: [
            {
                role: 'Fullstack Web Developer',
                period: 'Sep 2024 to Present',
                responsibilities: [
                    "Slice the UI/UX team's designs into a new company website.",
                    'Convert the existing site from the old build to the new one and wire up backend connections.',
                ],
                accomplishments: [
                    'Resolved front-end and back-end bugs to keep the new site stable.',
                    'Presented progress and deliverables to the team.',
                ],
            },
        ],
    },
    {
        company: 'PT Implementasi Teknologi Indonesia',
        logo: '/image/company/itid.jpg',
        meta: 'Freelance · Bekasi, West Java · Remote',
        positions: [
            {
                role: 'Fullstack Developer',
                period: 'Feb 2026 to Apr 2026',
                // TODO: bullets pending — this role's description is collapsed on
                // LinkedIn, and PHP / Laravel are the only two of its six skills
                // visible there. Nothing invented in the meantime.
            },
            {
                role: 'Frontend Developer',
                period: 'Nov 2025 to Feb 2026',
                responsibilities: [
                    'Design and build the OILS (One Integrated Logistic System) admin dashboard in Next.js and Tailwind CSS across a four-month active development cycle for Patra Logistik, a logistics subsidiary of PT Pertamina (Persero).',
                    'Integrate and validate the REST API endpoints behind the dashboard with Postman, keeping data accurate and consistent across every module.',
                ],
                accomplishments: [
                    'Shipped 15+ validated REST endpoints and responsive UI across desktop, tablet and mobile for operational staff working from multiple locations.',
                    'Worked in a three-person cross-functional team (2 front-end, 1 back-end) on a GitLab branching and merge-request workflow, keeping a clean source history through the project lifecycle.',
                ],
            },
        ],
    },
    {
        company: 'Barrakusuma Spatial Teknologi Indonesia',
        logo: '/image/company/barras.jpg',
        positions: [
            {
                role: 'Fullstack Web Developer',
                period: 'Jul 2025 to Nov 2025',
                responsibilities: [
                    'Build an interactive government dashboard to monitor and analyse forest data, with responsive Nuxt.js interfaces.',
                    'Integrate geospatial processing with PostGIS and PostgreSQL for spatial analysis and accurate mapping.',
                ],
                accomplishments: [
                    'Implemented 3D map visualization for deeper insight into forest areas and spatial patterns.',
                    'Delivered scalable, high-performance solutions for large geospatial datasets, collaborating remotely with stakeholders.',
                ],
            },
        ],
    },
    {
        company: 'Peluang.co',
        logo: '/image/company/peluang.jpg',
        positions: [
            {
                role: 'Fullstack Web Developer · Part-time',
                period: 'Oct 2023 to Mar 2024',
                responsibilities: [
                    'Build the franchise-advertising product UI in Next.js, Tailwind and shadcn UI, down to mobile.',
                    'Implement backend services, APIs and the supporting database.',
                ],
                accomplishments: [
                    'Delivered a responsive product franchises use to advertise their business on Peluang.co.',
                ],
            },
        ],
    },
    {
        company: 'Etech',
        mono: 'ET',
        positions: [
            {
                role: 'Fullstack Web Developer',
                period: 'Jun 2022 to Sep 2022',
                responsibilities: [
                    'Implement the UI in React.js and build Express.js APIs from a designed database.',
                ],
                accomplishments: [
                    'Refactored front-end and back-end code to improve performance and maintainability.',
                ],
            },
        ],
    },
    {
        company: 'PT. Brilyan Trimatra Utama',
        logo: '/image/company/brilyan.jpg',
        positions: [
            {
                role: 'Fullstack Web Developer · Intern',
                period: 'Oct 2019 to Mar 2020',
                responsibilities: [
                    'Build an accommodation website for PON XX 2020 with a React.js interface.',
                    'Develop Express.js APIs from a structured database design.',
                ],
                accomplishments: ['Delivered the accommodation platform within the internship program.'],
            },
        ],
    },
];

const EDUCATION: Education[] = [
    {
        institution: 'UPN Veteran Jakarta',
        degree: 'B.Sc. Computer Science · GPA 3.9 / 4.00',
        period: 'Aug 2021 to Jul 2025',
        mono: 'UPN',
        summary:
            'Undergraduate in Computer Science, graduating near the top of the class while working professionally throughout the degree.',
        note: 'Also active in Kelompok Studi Mahasiswa Android as Project & Research staff (2022 to 2023), creating learning materials and mentoring back-end study clubs.',
    },
    {
        institution: 'SMK Negeri 1 Kota Bekasi',
        degree: 'Software Engineering',
        period: 'Jul 2018 to Jul 2021',
        mono: 'SMK',
        summary: 'Vocational program focused on software-engineering fundamentals.',
    },
];

const Mark = ({ logo, mono, alt, size = 'md' }: { logo?: string; mono?: string; alt: string; size?: 'sm' | 'md' }) => {
    const box = size === 'sm' ? 'h-8 w-8' : 'h-9 w-9';
    const px = size === 'sm' ? 32 : 36;
    return (
        <span className={`flex ${box} shrink-0 items-center justify-center overflow-hidden rounded-[3px] border border-[var(--line)] bg-[var(--surface)]`}>
            {logo ? (
                <Image src={logo} alt={alt} width={px} height={px} className="h-full w-full object-cover" />
            ) : (
                <span className="font-mono text-label-xs tracking-wider text-[var(--foreground-secondary)]">{mono}</span>
            )}
        </span>
    );
};

const BulletList = ({ heading, items }: { heading: string; items: string[] }) => (
    <div className="mt-5">
        <h4 className="font-mono text-label-sm font-medium uppercase tracking-[0.2em] text-[var(--foreground)]">
            {heading}
        </h4>
        <motion.ul className="mt-3 space-y-2.5" variants={staggerParent(0.06)}>
            {items.map((it) => (
                <motion.li
                    key={it}
                    variants={staggerChild}
                    className="flex gap-3 text-[var(--foreground-secondary)] leading-relaxed"
                >
                    <span className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-[var(--signal)]" />
                    <span>{it}</span>
                </motion.li>
            ))}
        </motion.ul>
    </div>
);

export const Experience = () => {
    const olRef = useRef<HTMLOListElement>(null);
    const [track, setTrack] = useState({ top: 0, height: 0 });

    const { scrollYProgress } = useScroll({ target: olRef, offset: ['start 0.85', 'end 0.6'] });
    const lineScale = useSpring(scrollYProgress, { stiffness: 80, damping: 28, restDelta: 0.001 });

    useEffect(() => {
        const ol = olRef.current;
        if (!ol) return;
        const compute = () => {
            const nodes = ol.querySelectorAll<HTMLElement>('[data-node]');
            if (nodes.length < 2) return;
            const olTop = ol.getBoundingClientRect().top;
            const first = nodes[0].getBoundingClientRect();
            const last = nodes[nodes.length - 1].getBoundingClientRect();
            const top = first.top - olTop + first.height / 2;
            const bottom = last.top - olTop + last.height / 2;
            setTrack({ top, height: bottom - top });
        };
        compute();
        const ro = new ResizeObserver(compute);
        ro.observe(ol);
        return () => ro.disconnect();
    }, []);

    return (
        <section id="experienceSection" className="relative py-20 md:py-28">
            <KineticHeading text="Experience" />

            <div className="mx-auto max-w-6xl px-6 pt-12 md:pt-20">
                {/* WORK */}
                <div className="grid grid-cols-1 gap-y-10 md:grid-cols-[260px_1fr] md:gap-x-12">
                    <motion.div
                        className="md:sticky md:top-28 md:self-start"
                        initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.8, ease: EASE }}
                    >
                        <div className="h-px w-12 bg-[var(--signal)]" />
                        <h2
                            className="mt-5 font-display font-black uppercase leading-[0.9] tracking-[-0.03em] text-[var(--foreground)]"
                            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                        >
                            My work<br />experience
                        </h2>
                        <p className="mt-4 max-w-[24ch] text-sm leading-relaxed text-[var(--foreground-secondary)]">
                            The roles I&apos;ve held and what came of them, most recent first.
                        </p>
                    </motion.div>

                    <ol ref={olRef} className="relative">
                        <div
                            aria-hidden
                            className="pointer-events-none absolute left-6 w-px -translate-x-1/2 md:left-7"
                            style={{ top: track.top, height: track.height }}
                        >
                            <div className="absolute inset-0 bg-[var(--line-strong)] opacity-20" />
                            <motion.div
                                className="absolute inset-x-0 top-0 h-full origin-top bg-[var(--signal)]"
                                style={{ scaleY: lineScale }}
                            />
                        </div>

                        {WORK.map((exp, i) => {
                            const n = String(i + 1).padStart(2, '0');
                            return (
                                <li
                                    key={i}
                                    className="relative grid grid-cols-[48px_1fr] gap-x-5 pb-14 last:pb-0 md:grid-cols-[56px_1fr] md:gap-x-8"
                                >
                                    <div className="relative flex justify-center">
                                        <motion.span
                                            data-node
                                            className="z-10 flex h-12 w-12 items-center justify-center rounded-full border bg-[var(--background)] font-mono text-sm font-medium"
                                            initial={{ scale: 0.5, opacity: 0, borderColor: 'var(--line-strong)', color: 'var(--foreground-muted)' }}
                                            whileInView={{ scale: 1, opacity: 1, borderColor: 'var(--signal)', color: 'var(--foreground)' }}
                                            viewport={{ once: false, amount: 0.8 }}
                                            transition={{ duration: 0.5, ease: EASE }}
                                        >
                                            {n}
                                        </motion.span>
                                    </div>

                                    <motion.div
                                        className="pt-1"
                                        variants={staggerParent(0.08)}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: false, amount: 0.3 }}
                                    >
                                        <motion.div variants={staggerChild} className="flex flex-wrap items-center gap-x-4 gap-y-2">
                                            <Mark logo={exp.logo} mono={exp.mono} alt={exp.company} />
                                            <h3 className="font-display text-2xl font-bold leading-none tracking-tight text-[var(--foreground)]">
                                                {exp.company}
                                            </h3>
                                        </motion.div>

                                        {exp.meta && (
                                            <motion.p
                                                variants={staggerChild}
                                                className="mt-2 font-mono text-label-sm uppercase tracking-[0.14em] text-[var(--foreground-muted)]"
                                            >
                                                {exp.meta}
                                            </motion.p>
                                        )}

                                        {/* A second stint at the same employer is set off by a rule
                                            rather than a second timeline node — one company, one node. */}
                                        <div className={exp.positions.length > 1 ? 'mt-5 space-y-8 border-l border-[var(--line)] pl-5' : ''}>
                                            {exp.positions.map((pos) => (
                                                <div key={pos.role + pos.period}>
                                                    <motion.p
                                                        variants={staggerChild}
                                                        className={`flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-label-md uppercase tracking-[0.12em] text-[var(--foreground-secondary)] ${
                                                            exp.positions.length > 1 ? '' : 'mt-3'
                                                        }`}
                                                    >
                                                        <span className="text-[var(--foreground)]">{pos.role}</span>
                                                        <Sparkle className="h-3 w-3 shrink-0 text-[var(--signal)]" />
                                                        <span className="tabular-nums">{pos.period}</span>
                                                    </motion.p>

                                                    {pos.responsibilities && (
                                                        <motion.div variants={staggerChild}>
                                                            <BulletList heading="Key Responsibilities" items={pos.responsibilities} />
                                                        </motion.div>
                                                    )}
                                                    {pos.accomplishments && (
                                                        <motion.div variants={staggerChild}>
                                                            <BulletList heading="Accomplishments" items={pos.accomplishments} />
                                                        </motion.div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                </li>
                            );
                        })}
                    </ol>
                </div>

                {/* EDUCATION */}
                <div className="mt-24 border-t border-[var(--line-strong)] pt-12 md:mt-32">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.6 }}
                        transition={{ duration: 0.7, ease: EASE }}
                    >
                        <h2
                            className="font-display font-black uppercase leading-none tracking-[-0.03em] text-[var(--foreground)]"
                            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.5rem)' }}
                        >
                            Education
                        </h2>
                    </motion.div>

                    <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-12">
                        {EDUCATION.map((e) => (
                            <motion.div
                                key={e.institution}
                                initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
                                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.7, ease: EASE }}
                            >
                                <div className="flex items-center gap-4">
                                    <Mark logo={e.logo} mono={e.mono} alt={e.institution} />
                                    <p className="font-mono text-label-md uppercase tracking-[0.14em] text-[var(--foreground-secondary)] tabular-nums">
                                        {e.period}
                                    </p>
                                </div>
                                <h3 className="mt-5 font-display text-2xl font-bold leading-tight tracking-tight text-[var(--foreground)]">
                                    {e.institution}
                                </h3>
                                <p className="mt-1 font-medium text-[var(--signal-ink)]">{e.degree}</p>
                                <p className="mt-3 max-w-[48ch] leading-relaxed text-[var(--foreground-secondary)]">
                                    {e.summary}
                                </p>

                                {e.note && (
                                    <p className="mt-4 max-w-[48ch] text-sm leading-relaxed text-[var(--foreground-muted)]">
                                        {e.note}
                                    </p>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

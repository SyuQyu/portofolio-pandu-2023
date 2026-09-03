'use client';

import { motion } from 'framer-motion';

const TOOLKIT = [
    'TypeScript', 'JavaScript', 'React', 'Next.js', 'Nuxt.js', 'React Native',
    'Node.js', 'Express', 'Python', 'Tailwind', 'shadcn UI', 'Material UI',
    'HTML', 'CSS', 'MySQL', 'PostgreSQL', 'PostGIS', 'Prisma', 'Git',
    'Three.js', 'Blender',
];

const SOFT = ['Public Speaking', 'Leadership', 'Teamwork'];

const FACTS: [string, string][] = [
    ['Now', 'Full-Stack Developer, CrescentRating'],
    ['Study', 'B.Sc. Computer Science, UPN Veteran Jakarta'],
    ['Result', 'GPA 3.9 / 4.0 · 2021 to 2025'],
    ['Base', 'Indonesia · works with teams everywhere'],
];

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
};

export const About = () => {
    return (
        <section id="aboutMeSection" className="relative py-20 md:py-28">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid grid-cols-1 gap-y-10 md:grid-cols-[260px_1fr] md:gap-x-12">
                    {/* Sticky section label */}
                    <div className="md:sticky md:top-28 md:self-start">
                        <div className="h-px w-12 bg-[var(--signal)]" />
                        <h2
                            className="mt-5 font-display font-black uppercase leading-[0.9] tracking-[-0.03em] text-[var(--foreground)]"
                            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                        >
                            Who<br />am I?
                        </h2>
                        <p className="mt-4 max-w-[24ch] text-sm leading-relaxed text-[var(--foreground-secondary)]">
                            The engineer behind the renders.
                        </p>
                    </div>

                    {/* Content */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                        <p className="font-display text-2xl md:text-[2rem] leading-[1.18] tracking-[-0.01em] text-[var(--foreground)]">
                            I&apos;m a full-stack developer who also models, lights and renders in
                            Blender, so the products I ship and the worlds behind them speak the
                            same language.
                        </p>

                        <div className="mt-8 space-y-5 text-[var(--foreground-secondary)] leading-relaxed [hyphens:auto] text-justify">
                            <p>
                                I run independent projects end to end and move just as easily inside a
                                team. Most weeks that means React and Next.js on the front, Node and a
                                real database behind it, and an eye trained on the details most people
                                skim past: motion, type, the half-pixel that makes an interface feel
                                deliberate.
                            </p>
                            <p>
                                The 3D work isn&apos;t a hobby bolted on. It&apos;s where the instinct
                                for light, depth and composition comes from, and it is the same instinct
                                I bring back into the browser with WebGL and Three.js.
                            </p>
                        </div>

                        {/* Facts */}
                        <dl className="mt-12 divide-y divide-[var(--line)] border-y border-[var(--line)]">
                            {FACTS.map(([k, v]) => (
                                <div key={k} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-8">
                                    <dt className="w-24 shrink-0 font-mono text-label-xs uppercase tracking-[0.2em] text-[var(--foreground-muted)]">
                                        {k}
                                    </dt>
                                    <dd className="text-[var(--foreground)]">{v}</dd>
                                </div>
                            ))}
                        </dl>

                        {/* Toolkit chips */}
                        <div className="mt-12">
                            <h3 className="font-mono text-label-sm uppercase tracking-[0.22em] text-[var(--foreground-muted)]">
                                The toolkit
                            </h3>
                            <ul className="mt-5 flex flex-wrap gap-2.5">
                                {TOOLKIT.map((t, i) => (
                                    <motion.li
                                        key={t}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ duration: 0.35, delay: Math.min(i * 0.025, 0.4) }}
                                        className="rounded-full border border-[var(--line-strong)] px-4 py-1.5 text-sm text-[var(--foreground)] transition-colors hover:border-[var(--signal)] hover:text-[var(--signal-ink)]"
                                    >
                                        {t}
                                    </motion.li>
                                ))}
                            </ul>
                            <p className="mt-5 font-mono text-label-md uppercase tracking-[0.14em] text-[var(--foreground-secondary)]">
                                Beyond the stack: {SOFT.join(' · ')}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

'use client';

import { motion } from 'framer-motion';
import { GradientButton } from '@/components/ui/GradientButton';
import { Magnetic } from '@/components/ui/Magnetic';
import { scrollToSection } from '@/components/SmoothScroll';

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

const META: [string, string][] = [
    ['This is', "Pandu's portfolio"],
    ['Role', 'Developer & 3D Artist'],
    ['Located', 'Indonesia'],
    ['Available', '2026 · open to work'],
];

const NAME = ['Pandu', 'Utomo'];

// staggered container for the whole hero
const stage = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};
// masked slide-up for the name words
const word = {
    hidden: { y: '115%' },
    show: { y: 0, transition: { duration: 1, ease: EASE_OUT_EXPO } },
};
// soft blur-fade-up for supporting elements
const rise = {
    hidden: { opacity: 0, y: 26, filter: 'blur(6px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: EASE_OUT_EXPO } },
};
const fadeItem = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export const Hero = () => {
    return (
        <section
            id="homeSection"
            className="relative w-full min-h-screen flex items-center px-6 pt-32 pb-20 md:pt-36"
        >
            <motion.div
                className="w-full max-w-7xl mx-auto"
                variants={stage}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
            >
                {/* Metadata label row */}
                <motion.dl
                    className="mb-14 flex flex-wrap gap-x-10 gap-y-5 border-b border-[var(--line)] pb-8"
                    variants={fadeItem}
                >
                    {META.map(([label, value]) => (
                        <div key={label}>
                            <dt className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-[var(--foreground-muted)]">
                                {label}
                            </dt>
                            <dd className="mt-1.5 font-mono text-[0.78rem] uppercase tracking-[0.08em] text-[var(--foreground)]">
                                {value}
                            </dd>
                        </div>
                    ))}
                </motion.dl>

                {/* Name — the headline */}
                <h1
                    className="font-display font-black uppercase leading-[0.86] tracking-[-0.035em] text-[var(--foreground)]"
                    style={{ fontSize: 'clamp(2.75rem, 11vw, 7rem)' }}
                >
                    {NAME.map((w, i) => (
                        <span key={w} className="block overflow-hidden pb-[0.05em] -mb-[0.05em] md:inline-block md:pr-[0.18em]">
                            <motion.span variants={word} className="block md:inline-block">
                                {w}
                                {i === NAME.length - 1 && <span className="text-[var(--signal)]">.</span>}
                            </motion.span>
                        </span>
                    ))}
                </h1>

                {/* Role line */}
                <motion.p
                    variants={rise}
                    className="mt-6 font-display font-medium uppercase tracking-tight text-[var(--foreground-secondary)]"
                    style={{ fontSize: 'clamp(1.05rem, 2.4vw, 1.6rem)' }}
                >
                    Full-Stack Developer &amp; 3D Artist
                </motion.p>

                {/* Intro under a rule */}
                <motion.div variants={rise} className="mt-10 max-w-2xl border-t border-[var(--line)] pt-7">
                    <p className="text-base md:text-lg leading-relaxed text-[var(--foreground-secondary)]">
                        I build production web apps with React and Next.js, and the rendered 3D
                        environments that make them impossible to forget. Engineering rigor with a
                        renderer&apos;s eye.
                    </p>
                </motion.div>

                {/* One clear action + a quiet secondary */}
                <motion.div variants={rise} className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
                    <Magnetic>
                        <GradientButton onClick={() => scrollToSection('#portofolioSection')}>
                            View selected work
                        </GradientButton>
                    </Magnetic>
                    <button
                        onClick={() => scrollToSection('#contactSection')}
                        className="signal-link font-mono text-[0.72rem] uppercase tracking-[0.18em]"
                    >
                        or get in touch
                    </button>
                </motion.div>

                {/* Scroll cue */}
                <motion.div
                    variants={fadeItem}
                    className="mt-16 flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.25em] text-[var(--foreground-muted)]"
                >
                    <motion.span
                        aria-hidden
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        ↓
                    </motion.span>
                    Scroll to explore
                </motion.div>
            </motion.div>
        </section>
    );
};

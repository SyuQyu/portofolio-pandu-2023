'use client';

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';
import { GradientButton } from '@/components/ui/GradientButton';
import { Magnetic } from '@/components/ui/Magnetic';
import { scrollToSection } from '@/components/SmoothScroll';

const ROLE_STRINGS = ['interactive experiences.', 'full-stack applications.', '3D worlds.', 'contemporary interfaces.'];

// Signature ease from the reference site
const EASE = [0.6, 0.01, -0.05, 0.95] as const;

// The intro overlay takes ~2.2s + 0.9s slide-up; hero starts as it lifts
const INTRO_DELAY = 2.9;

const HEADLINE_LINES = ['Full-Stack', 'Developer', '& 3D Artist'];

const container = {
    hidden: { opacity: 1 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: INTRO_DELAY } },
};

const maskedLine = {
    hidden: { y: '110%' },
    show: { y: 0, transition: { duration: 1, ease: EASE } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

export const Hero = () => {
    const el = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (!el.current) return;

        const typed = new Typed(el.current, {
            strings: ROLE_STRINGS,
            startDelay: (INTRO_DELAY + 1) * 1000,
            typeSpeed: 40,
            backSpeed: 25,
            backDelay: 1800,
            smartBackspace: true,
            showCursor: true,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section id="homeSection" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            {/* Grid overlay — the 3D environment is the global fixed scene behind the page */}
            <div className="absolute inset-0 hero-grid pointer-events-none" />

            {/* HUD micro-labels */}
            <motion.div
                className="absolute top-24 left-6 right-6 max-w-7xl mx-auto hidden md:flex justify-between font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--foreground-muted)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: INTRO_DELAY + 0.6 }}
            >
                <span>Portfolio — 2026</span>
                <span>Based in Indonesia</span>
                <span>Code × 3D</span>
            </motion.div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
                <motion.div variants={container} initial="hidden" animate="show">
                    <div className="overflow-hidden mb-8">
                        <motion.p
                            variants={maskedLine}
                            className="font-mono text-xs md:text-sm tracking-[0.35em] uppercase text-[var(--foreground-secondary)]"
                        >
                            ( Pandu Utomo )
                        </motion.p>
                    </div>

                    <h1 className="font-display text-[13vw] md:text-8xl lg:text-9xl font-black uppercase leading-[0.95] tracking-tight text-[var(--foreground)] mb-8">
                        {HEADLINE_LINES.map((line) => (
                            <span key={line} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
                                <motion.span variants={maskedLine} className="block">
                                    {line === '& 3D Artist' ? (
                                        <span className="text-gradient drop-shadow-[0_0_35px_var(--glow-color)]">{line}</span>
                                    ) : (
                                        line
                                    )}
                                </motion.span>
                            </span>
                        ))}
                    </h1>

                    <motion.div variants={fadeUp} className="font-mono text-sm md:text-base text-[var(--foreground-secondary)] mb-10 min-h-[24px]">
                        <span className="text-[var(--foreground-muted)]">crafting </span>
                        <span className="text-[var(--foreground)]" ref={el}></span>
                    </motion.div>

                    <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
                        <Magnetic>
                            <GradientButton onClick={() => scrollToSection('#portofolioSection')}>
                                Explore Work
                            </GradientButton>
                        </Magnetic>
                        <Magnetic>
                            <GradientButton variant="outline" onClick={() => scrollToSection('#contactSection')}>
                                Contact
                            </GradientButton>
                        </Magnetic>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom HUD bar */}
            <motion.div
                className="absolute bottom-8 left-6 right-6 max-w-7xl mx-auto flex items-end justify-between font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--foreground-muted)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: INTRO_DELAY + 0.8 }}
            >
                <span className="hidden md:block">3+ Years / 20+ Projects</span>
                <motion.div
                    className="flex flex-col items-center gap-2 mx-auto md:mx-0"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <div className="w-[24px] h-[40px] rounded-3xl border border-[var(--foreground-muted)] flex justify-center items-start p-1.5">
                        <motion.div
                            className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]"
                            animate={{ y: [0, 14, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
                        />
                    </div>
                    <span>Scroll</span>
                </motion.div>
                <span className="hidden md:block">Hover the core</span>
            </motion.div>
        </section>
    );
};

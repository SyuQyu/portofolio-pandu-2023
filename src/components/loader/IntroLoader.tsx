'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

// Signature ease from the reference site — slow build, sharp settle
const EASE = [0.6, 0.01, -0.05, 0.95] as const;

interface IntroLoaderProps {
    onComplete: () => void;
}

// Cinematic intro: masked name reveal + growing line, then the whole
// overlay slides up (exit) to unveil the page.
export const IntroLoader = ({ onComplete }: IntroLoaderProps) => {
    useEffect(() => {
        const t = setTimeout(onComplete, 2200);
        return () => clearTimeout(t);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[90] bg-[var(--background)] flex flex-col items-center justify-center"
            exit={{ y: '-100%' }}
            transition={{ duration: 0.9, ease: EASE }}
        >
            <div className="overflow-hidden">
                <motion.h1
                    className="font-display text-5xl md:text-8xl font-black uppercase tracking-tight text-[var(--foreground)]"
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, ease: EASE }}
                >
                    Pandu Utomo
                </motion.h1>
            </div>

            <motion.div
                className="h-px w-64 md:w-[28rem] my-5 origin-left bg-gradient-to-r from-[var(--accent-primary)] via-[var(--accent-secondary)] to-[var(--accent-tertiary)]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.4, ease: EASE, delay: 0.3 }}
            />

            <div className="overflow-hidden">
                <motion.p
                    className="font-mono text-xs md:text-sm uppercase tracking-[0.35em] text-[var(--foreground-secondary)]"
                    initial={{ y: '-110%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease: EASE, delay: 0.6 }}
                >
                    Full-Stack Developer &amp; 3D Artist
                </motion.p>
            </div>
        </motion.div>
    );
};

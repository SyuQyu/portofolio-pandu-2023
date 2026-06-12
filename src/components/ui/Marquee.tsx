'use client';

import { motion } from 'framer-motion';

const ITEMS = [
    'Full-Stack Development',
    '3D Art & Animation',
    'React / Next.js',
    'Three.js / WebGL',
    'UI Engineering',
    'Blender',
];

// Infinite scrolling text strip — the row is duplicated so -50% loops seamlessly
export const Marquee = () => {
    const row = [...ITEMS, ...ITEMS];

    return (
        <div className="relative overflow-hidden py-6 border-y border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-sm">
            <motion.div
                className="flex gap-10 whitespace-nowrap w-max"
                animate={{ x: ['0%', '-50%'] }}
                transition={{ duration: 32, ease: 'linear', repeat: Infinity }}
            >
                {row.map((text, i) => (
                    <span
                        key={i}
                        className="flex items-center gap-10 font-display text-2xl md:text-4xl font-black uppercase tracking-tight text-[var(--foreground)]"
                    >
                        {text}
                        <span className="text-gradient">✦</span>
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

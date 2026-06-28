'use client';

import { motion } from 'framer-motion';
import { Sparkle } from '@/components/ui/Sparkle';

interface KineticHeadingProps {
    text: string;
    /** marquee duration in seconds; larger = slower */
    speed?: number;
}

// A giant horizontally-scrolling section title — the reference's signature
// divider. Alternating filled / outlined words keep it textural rather than a
// loud solid band; a vermilion star carries the brand between repeats.
// Decorative only (aria-hidden); the real heading lives in SectionHeading.
export const KineticHeading = ({ text, speed = 30 }: KineticHeadingProps) => {
    const reps = Array.from({ length: 4 });
    const unit = (offset: number) =>
        reps.map((_, i) => {
            const idx = offset + i;
            const filled = idx % 2 === 0;
            return (
                <span key={`${offset}-${i}`} className="flex items-center gap-6 md:gap-10">
                    <span
                        className="font-display font-black uppercase leading-none tracking-[-0.03em]"
                        style={
                            filled
                                ? { fontSize: 'clamp(2.75rem, 10vw, 7.5rem)', color: 'var(--foreground)' }
                                : {
                                      fontSize: 'clamp(2.75rem, 10vw, 7.5rem)',
                                      color: 'transparent',
                                      WebkitTextStroke: '1.4px var(--foreground)',
                                  }
                        }
                    >
                        {text}
                    </span>
                    <Sparkle className="w-7 h-7 md:w-11 md:h-11 shrink-0 text-[var(--signal)]" />
                </span>
            );
        });

    return (
        <div className="relative w-full overflow-hidden py-2 md:py-4 select-none" aria-hidden>
            <motion.div
                className="flex w-max items-center gap-6 md:gap-10"
                animate={{ x: ['0%', '-50%'] }}
                transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
            >
                {unit(0)}
                {unit(4)}
            </motion.div>
        </div>
    );
};

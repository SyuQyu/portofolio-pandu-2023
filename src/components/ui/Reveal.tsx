'use client';

import { motion, type Variants } from 'framer-motion';
import { ReactNode } from 'react';
import { riseIn, blurRise, clipReveal, scaleIn } from '@/lib/motion';

type Preset = 'rise' | 'blur' | 'clip' | 'scale';

const PRESETS: Record<Preset, Variants> = {
    rise: riseIn,
    blur: blurRise,
    clip: clipReveal,
    scale: scaleIn,
};

interface RevealProps {
    children: ReactNode;
    preset?: Preset;
    delay?: number;
    amount?: number;
    className?: string;
}

// Scroll-triggered entrance for a block. Fires once when in view; honors
// reduced motion via the app-level <MotionConfig reducedMotion="user">.
export const Reveal = ({ children, preset = 'blur', delay = 0, amount = 0.18, className }: RevealProps) => {
    const base = PRESETS[preset];
    const show = base.show as Record<string, unknown>;
    const variants: Variants = delay
        ? {
              hidden: base.hidden,
              show: { ...show, transition: { ...(show.transition as object), delay } },
          }
        : base;

    return (
        <motion.div
            className={className}
            variants={variants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount }}
        >
            {children}
        </motion.div>
    );
};

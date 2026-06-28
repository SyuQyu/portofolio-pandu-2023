'use client';

import { useRef, ReactNode, MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

interface MagneticProps {
    children: ReactNode;
    strength?: number;
}

// Pulls its child toward the cursor while hovered
export const Magnetic = ({ children, strength = 0.35 }: MagneticProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const reduce = useReducedMotion();
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const sx = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 });
    const sy = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 });

    // No magnetic pull for reduced-motion users — the element stays put.
    if (reduce) {
        return <div className="inline-block">{children}</div>;
    }

    const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        x.set((e.clientX - rect.left - rect.width / 2) * strength);
        y.set((e.clientY - rect.top - rect.height / 2) * strength);
    };

    const reset = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={onMouseMove}
            onMouseLeave={reset}
            style={{ x: sx, y: sy }}
            className="inline-block"
        >
            {children}
        </motion.div>
    );
};

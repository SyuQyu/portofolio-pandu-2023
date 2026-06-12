'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Glow ring + dot that follow the pointer. Only mounts on fine-pointer devices,
// and keeps the native cursor visible for accessibility.
export const CustomCursor = () => {
    const [enabled, setEnabled] = useState(false);
    const [active, setActive] = useState(false);

    const mx = useMotionValue(-100);
    const my = useMotionValue(-100);
    const rx = useSpring(mx, { stiffness: 250, damping: 22, mass: 0.6 });
    const ry = useSpring(my, { stiffness: 250, damping: 22, mass: 0.6 });

    useEffect(() => {
        if (!window.matchMedia('(pointer: fine)').matches) return;
        setEnabled(true);

        const move = (e: MouseEvent) => {
            mx.set(e.clientX);
            my.set(e.clientY);
        };
        const over = (e: MouseEvent) => {
            setActive(!!(e.target as Element).closest?.('a, button, [role="button"]'));
        };

        window.addEventListener('mousemove', move, { passive: true });
        window.addEventListener('mouseover', over, { passive: true });
        return () => {
            window.removeEventListener('mousemove', move);
            window.removeEventListener('mouseover', over);
        };
    }, [mx, my]);

    if (!enabled) return null;

    return (
        <>
            <motion.div
                aria-hidden
                className="fixed top-0 left-0 z-[100] pointer-events-none w-10 h-10 rounded-full border border-[var(--accent-primary)]/60 shadow-[0_0_20px_var(--glow-color)]"
                style={{ x: rx, y: ry, translateX: '-50%', translateY: '-50%' }}
                animate={{ scale: active ? 1.8 : 1, opacity: active ? 0.5 : 1 }}
                transition={{ duration: 0.2 }}
            />
            <motion.div
                aria-hidden
                className="fixed top-0 left-0 z-[100] pointer-events-none w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]"
                style={{ x: mx, y: my, translateX: '-50%', translateY: '-50%' }}
            />
        </>
    );
};

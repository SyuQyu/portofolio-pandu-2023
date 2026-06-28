'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode, useRef, MouseEvent } from 'react';

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

// Glass panel with mouse-driven 3D tilt and a blur-in entrance
export const GlassCard = ({ children, className, hoverEffect = true }: GlassCardProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);
    const sx = useSpring(rotateX, { stiffness: 180, damping: 18 });
    const sy = useSpring(rotateY, { stiffness: 180, damping: 18 });

    const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!hoverEffect || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        rotateY.set(px * 8);
        rotateX.set(-py * 8);
    };

    const reset = () => {
        rotateX.set(0);
        rotateY.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={onMouseMove}
            onMouseLeave={reset}
            style={{ rotateX: sx, rotateY: sy, transformPerspective: 900 }}
            className={cn(
                "rounded-2xl p-6 transition-colors duration-300",
                "bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)]",
                hoverEffect && "hover:shadow-[0_0_25px_var(--glow-color)] hover:border-[var(--accent-primary)]/40",
                className
            )}
            initial={{ opacity: 0, y: 40, scale: 0.97, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    );
};

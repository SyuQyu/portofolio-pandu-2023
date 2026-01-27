import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export const GlassCard = ({ children, className, hoverEffect = true }: GlassCardProps) => {
    return (
        <motion.div
            className={cn(
                "rounded-2xl p-6 transition-all duration-300",
                "bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)]",
                hoverEffect && "hover:shadow-[0_0_25px_var(--glow-color)] hover:border-[var(--accent-primary)]/40",
                className
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};

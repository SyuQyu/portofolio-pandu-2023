import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes } from 'react';

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
}

// Monochrome studio-style button: flat pill, mono uppercase label, inverts on hover
export const GradientButton = ({
    children,
    className,
    variant = 'primary',
    ...props
}: GradientButtonProps) => {
    const baseStyles = "relative px-8 py-3 rounded-full font-mono text-sm uppercase tracking-[0.15em] transition-all duration-300 overflow-hidden group";

    const variants = {
        primary: cn(
            "text-white border border-transparent",
            "bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]",
            "shadow-[0_0_20px_var(--glow-color)]",
            "hover:shadow-[0_0_35px_var(--glow-color)]"
        ),
        secondary: cn(
            "text-[var(--foreground)]",
            "bg-[var(--surface)] backdrop-blur",
            "border border-[var(--glass-border)]",
            "hover:bg-[var(--surface-hover)]"
        ),
        outline: cn(
            "text-[var(--foreground)] bg-transparent",
            "border border-[var(--foreground)]",
            "hover:bg-[var(--foreground)] hover:text-[var(--background)]"
        )
    };

    return (
        <motion.button
            className={cn(baseStyles, variants[variant], className)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            {...props as any}
        >
            <span className="relative z-10">{children}</span>
        </motion.button>
    );
};

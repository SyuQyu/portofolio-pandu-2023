import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes } from 'react';

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
}

export const GradientButton = ({
    children,
    className,
    variant = 'primary',
    ...props
}: GradientButtonProps) => {
    const baseStyles = "relative px-8 py-3 rounded-full font-bold transition-all duration-300 overflow-hidden group";

    const variants = {
        primary: cn(
            "text-white",
            "bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]",
            "shadow-[0_0_20px_var(--glow-color)]",
            "hover:shadow-[0_0_30px_var(--glow-color)]"
        ),
        secondary: cn(
            "text-[var(--foreground)]",
            "bg-[var(--surface)] backdrop-blur",
            "border border-[var(--glass-border)]",
            "hover:bg-[var(--surface-hover)]"
        ),
        outline: cn(
            "text-[var(--accent-primary)]",
            "border-2 border-[var(--accent-primary)]",
            "hover:bg-[var(--accent-primary)]/10"
        )
    };

    return (
        <motion.button
            className={cn(baseStyles, variants[variant], className)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            {...props as any}
        >
            <span className="relative z-10">{children}</span>
            {variant === 'primary' && (
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-secondary)] to-[var(--accent-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}
        </motion.button>
    );
};

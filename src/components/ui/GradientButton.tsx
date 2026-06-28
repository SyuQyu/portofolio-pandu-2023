import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes } from 'react';

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
}

// Studio-monograph button: flat rectangular block, mono uppercase label.
// Primary is a solid vermilion field; outline inverts to ink on hover.
// (Name kept as GradientButton for back-compat; there is no gradient.)
export const GradientButton = ({
    children,
    className,
    variant = 'primary',
    ...props
}: GradientButtonProps) => {
    const base =
        'group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-[3px] font-mono text-[0.7rem] uppercase tracking-[0.18em] font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--signal)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]';

    const variants = {
        primary: 'bg-[var(--signal)] text-[var(--ink-on-signal)] hover:bg-[var(--foreground)] hover:text-[var(--background)]',
        secondary:
            'bg-[var(--surface)] text-[var(--foreground)] border border-[var(--line)] hover:bg-[var(--surface-hover)]',
        outline:
            'bg-transparent text-[var(--foreground)] border border-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)]',
    };

    return (
        <motion.button
            className={cn(base, variants[variant], className)}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 22 }}
            {...(props as any)}
        >
            <span className="relative z-10">{children}</span>
            {variant !== 'secondary' && (
                <span
                    aria-hidden
                    className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-1"
                >
                    →
                </span>
            )}
        </motion.button>
    );
};

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
        primary: "text-white bg-gradient-to-r from-accent-blue to-accent-purple shadow-[0_0_15px_rgba(0,212,255,0.4)] hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]",
        secondary: "text-white bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20",
        outline: "text-accent-blue border-2 border-accent-blue hover:bg-accent-blue/10"
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
                <div className="absolute inset-0 bg-gradient-to-r from-accent-purple to-accent-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}
        </motion.button>
    );
};

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    number?: string;
    className?: string;
    center?: boolean;
}

// Signature ease shared with the intro loader and hero reveals
const EASE_OUT_EXPO = [0.6, 0.01, -0.05, 0.95] as const;

export const SectionHeading = ({ title, subtitle, number, className, center = false }: SectionHeadingProps) => {
    return (
        <div className={cn('mb-16', center && 'text-center', className)}>
            {/* Rule line grows in from the left */}
            <motion.div
                className="h-px w-full bg-gradient-to-r from-[var(--accent-primary)] via-[var(--accent-secondary)] to-transparent origin-left mb-6"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
            />
            <div className={cn('flex items-baseline gap-6', center && 'justify-center')}>
                {number && (
                    <motion.span
                        className="font-mono text-sm text-[var(--accent-primary)] tracking-widest"
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.35 }}
                    >
                        ({number})
                    </motion.span>
                )}
                {/* Masked slide-up reveal */}
                <div className="overflow-hidden">
                    <motion.h2
                        className="font-display text-5xl md:text-7xl font-extrabold uppercase tracking-tight leading-none text-[var(--foreground)]"
                        initial={{ y: '110%' }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
                    >
                        {title}
                    </motion.h2>
                </div>
            </div>
            {subtitle && (
                <motion.p
                    className={cn(
                        'mt-4 font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-[var(--foreground-muted)]',
                        center ? 'mx-auto max-w-2xl' : 'md:ml-[4.5rem]'
                    )}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.45 }}
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
};

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    /** Optional catalogue index — only pass where an ordered sequence is real. */
    number?: string;
    className?: string;
    center?: boolean;
}

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

// Studio-monograph section opener: a full-width ink rule, then an oversized
// grotesque title with an optional plain-language descriptor set to the side.
// No tracked-uppercase eyebrow, no per-section numbering by default.
export const SectionHeading = ({ title, subtitle, number, className, center = false }: SectionHeadingProps) => {
    return (
        <div className={cn('mb-14 md:mb-20', center && 'text-center', className)}>
            <motion.div
                className="h-px w-full bg-[var(--line-strong)] origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1, ease: EASE_OUT_EXPO }}
            />

            <div
                className={cn(
                    'mt-6 flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-12',
                    center && 'items-center md:flex-col md:items-center'
                )}
            >
                <div className="overflow-hidden">
                    <motion.h2
                        className="font-display font-black uppercase leading-[0.88] tracking-[-0.03em] text-[var(--foreground)]"
                        style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}
                        initial={{ y: '108%' }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.9, ease: EASE_OUT_EXPO }}
                    >
                        {title}
                    </motion.h2>
                </div>

                {(subtitle || number) && (
                    <motion.div
                        className={cn(
                            'flex shrink-0 flex-col gap-2 md:items-end md:text-right',
                            center && 'md:items-center md:text-center'
                        )}
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
                    >
                        {number && (
                            <span className="font-mono text-xs tracking-[0.25em] text-[var(--signal-ink)]">
                                {number}
                            </span>
                        )}
                        {subtitle && (
                            <p className="max-w-xs text-sm leading-relaxed text-[var(--foreground-secondary)]">
                                {subtitle}
                            </p>
                        )}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

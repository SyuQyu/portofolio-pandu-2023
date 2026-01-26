import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    className?: string;
    center?: boolean;
}

export const SectionHeading = ({ title, subtitle, className, center = true }: SectionHeadingProps) => {
    return (
        <div className={cn("mb-12", center && "text-center", className)}>
            <motion.h2
                className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-blue via-purple-500 to-accent-purple"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {title}
            </motion.h2>
            {subtitle && (
                <motion.p
                    className="mt-4 text-gray-400 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    {subtitle}
                </motion.p>
            )}
            <motion.div
                className={cn("h-1 w-24 bg-gradient-to-r from-accent-blue to-accent-purple mt-6 rounded-full", center && "mx-auto")}
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
            />
        </div>
    );
};

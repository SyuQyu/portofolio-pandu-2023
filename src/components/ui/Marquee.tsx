'use client';

import { motion } from 'framer-motion';

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

// A fixed, full-bleed signal band — the page's one drenched interval between
// the hero and the rest. Theme-consistent (vermilion reads the same in Studio
// and Cinema), and a deliberate brand statement, not a scrolling buzzword strip.
// (Name kept as Marquee for back-compat with page.tsx; nothing scrolls.)
export const Marquee = () => {
    return (
        <section className="relative w-full overflow-hidden bg-[var(--signal)] text-[var(--ink-on-signal)]">
            <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-14 md:flex-row md:items-end md:justify-between md:py-20">
                <div className="overflow-hidden">
                    <motion.h2
                        className="font-display font-black uppercase leading-[0.88] tracking-[-0.035em]"
                        style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}
                        initial={{ y: '108%' }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{ duration: 0.9, ease: EASE_OUT_EXPO }}
                    >
                        Code <span className="font-light">×</span> 3D
                    </motion.h2>
                </div>

                <motion.p
                    className="max-w-sm text-base font-medium leading-relaxed md:text-right"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.6 }}
                    transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
                >
                    The rare engineer who also models, lights and renders the worlds his
                    software lives in.
                </motion.p>
            </div>
        </section>
    );
};

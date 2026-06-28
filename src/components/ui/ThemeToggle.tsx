'use client';

import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

// Minimal Studio/Cinema switch — gallery daylight vs. darkened screening room.
export const ThemeToggle = () => {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return <div className="w-10 h-10 rounded-[3px] border border-[var(--line)]" />;
    }

    const isDark = resolvedTheme === 'dark';

    return (
        <motion.button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="relative w-10 h-10 rounded-[3px] border border-[var(--line)] flex items-center justify-center overflow-hidden text-[var(--foreground)] hover:border-[var(--foreground)] transition-colors"
            whileTap={{ scale: 0.94 }}
            aria-label={`Switch to ${isDark ? 'Studio (light)' : 'Cinema (dark)'} theme`}
        >
            <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                    <motion.svg
                        key="moon"
                        width="17" height="17" viewBox="0 0 24 24" fill="none"
                        initial={{ y: 14, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -14, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor" />
                    </motion.svg>
                ) : (
                    <motion.svg
                        key="sun"
                        width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        initial={{ y: 14, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -14, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        <circle cx="12" cy="12" r="4.2" fill="currentColor" stroke="none" />
                        {[...Array(8)].map((_, i) => (
                            <line key={i} x1="12" y1="1.6" x2="12" y2="4" transform={`rotate(${i * 45} 12 12)`} />
                        ))}
                    </motion.svg>
                )}
            </AnimatePresence>
        </motion.button>
    );
};

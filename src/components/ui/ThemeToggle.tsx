'use client';

import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export const ThemeToggle = () => {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="w-12 h-12 rounded-full bg-white/10 animate-pulse" />
        );
    }

    const isDark = resolvedTheme === 'dark';

    return (
        <motion.button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="relative w-12 h-12 rounded-full bg-gradient-to-br from-white/10 to-white/5 dark:from-white/10 dark:to-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 flex items-center justify-center overflow-hidden group hover:scale-110 transition-transform"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
            {/* Glow effect */}
            <div className={`absolute inset-0 rounded-full transition-all duration-500 ${isDark ? 'bg-cyan-500/20' : 'bg-amber-400/30'}`} />

            <AnimatePresence mode="wait">
                {isDark ? (
                    <motion.div
                        key="moon"
                        initial={{ rotate: -90, scale: 0, opacity: 0 }}
                        animate={{ rotate: 0, scale: 1, opacity: 1 }}
                        exit={{ rotate: 90, scale: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="relative"
                    >
                        {/* Moon */}
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="text-cyan-300 drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]"
                        >
                            <path
                                d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="1"
                            />
                        </svg>
                        {/* Stars around moon */}
                        <motion.div
                            className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-cyan-300 rounded-full"
                            animate={{ opacity: [0.5, 1, 0.5], scale: [0.8, 1.2, 0.8] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.div
                            className="absolute top-1 -left-2 w-1 h-1 bg-purple-300 rounded-full"
                            animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                        />
                    </motion.div>
                ) : (
                    <motion.div
                        key="sun"
                        initial={{ rotate: 90, scale: 0, opacity: 0 }}
                        animate={{ rotate: 0, scale: 1, opacity: 1 }}
                        exit={{ rotate: -90, scale: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="relative"
                    >
                        {/* Sun */}
                        <motion.svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.8)]"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        >
                            <circle cx="12" cy="12" r="5" fill="currentColor" />
                            {/* Sun rays */}
                            {[...Array(8)].map((_, i) => (
                                <motion.line
                                    key={i}
                                    x1="12"
                                    y1="1"
                                    x2="12"
                                    y2="4"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    transform={`rotate(${i * 45} 12 12)`}
                                    animate={{ opacity: [0.6, 1, 0.6] }}
                                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                                />
                            ))}
                        </motion.svg>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.button>
    );
};

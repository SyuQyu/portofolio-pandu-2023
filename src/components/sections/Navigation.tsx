'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { GradientButton } from '@/components/ui/GradientButton';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { scrollToSection as smoothScrollTo } from '@/components/SmoothScroll';

const NAV_ITEMS = [
    { name: 'About', href: '#aboutMeSection' },
    { name: 'Experience', href: '#experienceSection' },
    { name: 'Work', href: '#portofolioSection' },
    { name: '3D', href: '#playgroundSection' },
    { name: 'Contact', href: '#contactSection' },
];

export const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        smoothScrollTo(href);
        setMobileMenuOpen(false);
    };

    return (
        <>
            <motion.nav
                className={cn(
                    'fixed top-0 left-0 right-0 z-50 border-b transition-[background-color,border-color,padding] duration-300',
                    scrolled
                        ? 'border-[var(--line)] bg-[var(--background)]/85 backdrop-blur-xl py-3'
                        : 'border-transparent bg-transparent py-5'
                )}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
                    <a
                        href="#homeSection"
                        onClick={(e) => go(e, '#homeSection')}
                        className="group flex items-baseline gap-2 font-display text-lg font-black uppercase tracking-tight text-[var(--foreground)]"
                    >
                        Pandu Utomo
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--signal)] transition-transform group-hover:scale-150" />
                    </a>

                    {/* Desktop */}
                    <div className="hidden items-center gap-8 md:flex">
                        {NAV_ITEMS.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => go(e, item.href)}
                                className="group relative font-mono text-label-md uppercase tracking-[0.18em] text-[var(--foreground-secondary)] transition-colors hover:text-[var(--foreground)]"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--signal)] transition-[width] duration-300 group-hover:w-full" />
                            </a>
                        ))}
                        <ThemeToggle />
                        <GradientButton variant="outline" className="px-5 py-2.5" onClick={() => window.open('/resume.pdf', '_blank')}>
                            Resume
                        </GradientButton>
                    </div>

                    {/* Mobile toggle */}
                    <div className="flex items-center gap-3 md:hidden">
                        <ThemeToggle />
                        <button
                            className="flex h-10 w-10 items-center justify-center rounded-[3px] border border-[var(--line)] text-[var(--foreground)]"
                            onClick={() => setMobileMenuOpen((o) => !o)}
                            aria-label="Toggle menu"
                        >
                            <div className="flex h-4 w-5 flex-col justify-between">
                                <span className={cn('h-0.5 w-full bg-current transition-transform duration-300', mobileMenuOpen && 'translate-y-[7px] rotate-45')} />
                                <span className={cn('h-0.5 w-full bg-current transition-opacity duration-300', mobileMenuOpen && 'opacity-0')} />
                                <span className={cn('h-0.5 w-full bg-current transition-transform duration-300', mobileMenuOpen && '-translate-y-[7px] -rotate-45')} />
                            </div>
                        </button>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 flex flex-col justify-center gap-2 bg-[var(--background)] px-8 md:hidden"
                        initial={{ opacity: 0, y: '-100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-100%' }}
                        transition={{ type: 'spring', damping: 26, stiffness: 220 }}
                    >
                        {NAV_ITEMS.map((item, i) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => go(e, item.href)}
                                className="border-b border-[var(--line)] py-4 font-display text-4xl font-black uppercase tracking-tight text-[var(--foreground)]"
                                initial={{ opacity: 0, x: -24 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.06 * i }}
                            >
                                {item.name}
                            </motion.a>
                        ))}
                        <GradientButton className="mt-8 self-start" onClick={() => window.open('/resume.pdf', '_blank')}>
                            Download Resume
                        </GradientButton>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

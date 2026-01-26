'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { GradientButton } from '@/components/ui/GradientButton';

const NAV_ITEMS = [
    { name: 'Home', href: '#homeSection' },
    { name: 'About', href: '#aboutMeSection' },
    { name: 'Experience', href: '#experienceSection' },
    { name: 'Portfolio', href: '#portofolioSection' },
    { name: 'Contact', href: '#contactSection' },
];

export const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    return (
        <>
            <motion.nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                    scrolled ? "bg-primary-dark/80 backdrop-blur-xl border-white/10 py-4" : "bg-transparent py-6"
                )}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <a
                        href="#homeSection"
                        className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-blue to-accent-purple"
                        onClick={(e) => scrollToSection(e, '#homeSection')}
                    >
                        PU
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {NAV_ITEMS.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-blue transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                        <GradientButton variant="outline" className="px-6 py-2 text-sm" onClick={() => window.open('/resume.pdf', '_blank')}>
                            Resume
                        </GradientButton>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <span className={cn("w-full h-0.5 bg-white transition-all", mobileMenuOpen && "rotate-45 translate-y-2")} />
                            <span className={cn("w-full h-0.5 bg-white transition-all", mobileMenuOpen && "opacity-0")} />
                            <span className={cn("w-full h-0.5 bg-white transition-all", mobileMenuOpen && "-rotate-45 -translate-y-2.5")} />
                        </div>
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 bg-primary-dark/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-8"
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 20 }}
                    >
                        {NAV_ITEMS.map((item, index) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className="text-2xl font-bold text-white hover:text-accent-blue transition-colors"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index }}
                            >
                                {item.name}
                            </motion.a>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <GradientButton onClick={() => window.open('/resume.pdf', '_blank')}>
                                Resume
                            </GradientButton>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

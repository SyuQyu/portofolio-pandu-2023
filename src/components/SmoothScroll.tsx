'use client';

import { ReactNode, useEffect } from 'react';
import Lenis from 'lenis';

// Lenis smooth scrolling — gives the whole page a weighted, buttery scroll.
// The instance is exposed on window so nav links can use lenis.scrollTo().
const prefersReducedMotion = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const SmoothScroll = ({ children }: { children: ReactNode }) => {
    useEffect(() => {
        // Reduced-motion users keep native scrolling — Lenis' weighted easing
        // is exactly the kind of motion the preference asks us to drop.
        if (prefersReducedMotion()) return;

        const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
        (window as any).lenis = lenis;

        let raf: number;
        const loop = (time: number) => {
            lenis.raf(time);
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);

        return () => {
            cancelAnimationFrame(raf);
            lenis.destroy();
            delete (window as any).lenis;
        };
    }, []);

    return <>{children}</>;
};

// Smooth-scroll helper that prefers Lenis and falls back to native.
// Honors reduced motion by jumping instantly instead of animating the scroll.
export const scrollToSection = (selector: string) => {
    const reduce = prefersReducedMotion();
    const lenis = (window as any).lenis;
    if (lenis && !reduce) {
        lenis.scrollTo(selector, { duration: 1.4 });
    } else {
        document.querySelector(selector)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
    }
};

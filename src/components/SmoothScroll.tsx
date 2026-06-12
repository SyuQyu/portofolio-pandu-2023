'use client';

import { ReactNode, useEffect } from 'react';
import Lenis from 'lenis';

// Lenis smooth scrolling — gives the whole page a weighted, buttery scroll.
// The instance is exposed on window so nav links can use lenis.scrollTo().
export const SmoothScroll = ({ children }: { children: ReactNode }) => {
    useEffect(() => {
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

// Smooth-scroll helper that prefers Lenis and falls back to native
export const scrollToSection = (selector: string) => {
    const lenis = (window as any).lenis;
    if (lenis) {
        lenis.scrollTo(selector, { duration: 1.4 });
    } else {
        document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
    }
};

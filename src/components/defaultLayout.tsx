'use client';
import { useState, useEffect, lazy } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, MotionConfig, useReducedMotion } from 'framer-motion';

import { Navigation } from '@/components/sections/Navigation';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { SmoothScroll } from '@/components/SmoothScroll';
import { IntroLoader } from '@/components/loader/IntroLoader';

const Footer = lazy(() => import('./layouts/footer/footer'));

const INTRO_SEEN_KEY = 'introSeen';

export default function DefaultLayout({ children }: Props) {
    const pathname = usePathname();
    const prefersReduced = useReducedMotion();
    const [mounted, setMounted] = useState(false);
    const [introDone, setIntroDone] = useState(false);

    // Decide intro visibility only after mount so we can read sessionStorage and
    // the resolved motion preference without an SSR/hydration mismatch.
    useEffect(() => setMounted(true), []);

    const introSeen = mounted && sessionStorage.getItem(INTRO_SEEN_KEY) === '1';
    // First visit of the session, on the home route, for motion-OK users only.
    const showIntro = mounted && pathname === '/' && !introDone && !introSeen && !prefersReduced;

    const finishIntro = () => {
        try {
            sessionStorage.setItem(INTRO_SEEN_KEY, '1');
        } catch {
            /* private mode / storage disabled — intro simply replays, harmless */
        }
        setIntroDone(true);
    };

    return (
        // reducedMotion="user" makes every Framer animation respect the OS
        // setting: transform/layout moves are dropped, opacity crossfades stay.
        <MotionConfig reducedMotion="user">
            <SmoothScroll>
                <AnimatePresence>
                    {showIntro && <IntroLoader onComplete={finishIntro} />}
                </AnimatePresence>

                <ScrollProgress />
                <CustomCursor />
                <Navigation />

                <AnimatePresence mode="wait" initial={false}>
                    <main className='main'>{children}</main>
                </AnimatePresence>
                <Footer />
            </SmoothScroll>
        </MotionConfig>
    );
}

type Props = {
    children: React.ReactNode;
};

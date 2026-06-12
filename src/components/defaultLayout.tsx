'use client';
import { useState, lazy } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';

import { Navigation } from '@/components/sections/Navigation';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { GlobalScene } from '@/components/3d/GlobalScene';
import { SmoothScroll } from '@/components/SmoothScroll';
import { IntroLoader } from '@/components/loader/IntroLoader';

const Footer = lazy(() => import('./layouts/footer/footer'));

export default function DefaultLayout({ children }: Props) {
    const pathname = usePathname();
    const [introDone, setIntroDone] = useState(false);
    const showIntro = pathname === '/' && !introDone;

    return (
        <SmoothScroll>
            <AnimatePresence>
                {showIntro && <IntroLoader onComplete={() => setIntroDone(true)} />}
            </AnimatePresence>

            <GlobalScene />
            <ScrollProgress />
            <CustomCursor />
            <Navigation />

            <AnimatePresence mode="wait" initial={false}>
                <main className='main'>{children}</main>
            </AnimatePresence>
            <Footer />
        </SmoothScroll>
    );
}

type Props = {
    children: React.ReactNode;
};

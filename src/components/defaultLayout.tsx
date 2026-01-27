'use client';
import { useEffect, useState, lazy, Suspense } from 'react';
import { Html, useProgress } from "@react-three/drei";
import { usePathname } from 'next/navigation';
import { AnimatePresence, useCycle } from 'framer-motion';

// Importing components using dynamic import
// AOS removed
// import AOS from 'aos';
// import 'aos/dist/aos.css';

import { Navigation } from '@/components/sections/Navigation';

const Footer = lazy(() => import('./layouts/footer/footer'));
const Loader = lazy(() => import('@/components/loader/loader'));

export default function DefaultLayout({ children }: Props) {
    const pathname = usePathname()
    const { progress } = useProgress();

    // AOS removed
    /*
    useEffect(() => {
        AOS.init({});
    }, []);
    */

    const showLoader = pathname === '/';
    return (
        <body id='layout-default'>
            {showLoader && (
                <div className={`fixed top-0 left-0 w-screen h-screen bg-[var(--background)] justify-center items-center z-50 ${progress === 100 ? 'opacity-0 hidden' : 'opacity-100 flex'} transition-all duration-1000`}>
                    <Loader />
                </div>
            )}
            <Navigation />

            <AnimatePresence mode="wait" initial={false}>
                <main className='main'>{children}</main>
            </AnimatePresence>
            <Footer />
        </body>
    );
}

type Props = {
    children: React.ReactNode;
};

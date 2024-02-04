'use client';
import { useEffect, useState, lazy, Suspense } from 'react';
import { Html, useProgress } from "@react-three/drei";
import { usePathname } from 'next/navigation';
import { AnimatePresence, useCycle } from 'framer-motion';

// Importing components using dynamic import
import AOS from 'aos';
import 'aos/dist/aos.css';

const MenuOverlay = lazy(() => import('./layouts/menuOverlay/menuOverlay'));
const Footer = lazy(() => import('./layouts/footer/footer'));
const Loader = lazy(() => import('@/components/loader/loader'));
const Header = lazy(() => import('./layouts/headerNew/header'));

export default function DefaultLayout({ children }: Props) {
    const pathname = usePathname()
    const [navbarOpen, setNavbarOpen] = useState(false);
    const { progress } = useProgress();
    const [isOpen, toggleOpen] = useCycle(false, true);
    useEffect(() => {
        AOS.init({});
    }, []);
    const showLoader = pathname === '/';
    return (
        <body id='layout-default' className={`${isOpen ? 'h-screen overflow-hidden' : null}`}>
            {showLoader && (
                <div className={`fixed top-0 left-0 w-screen h-screen bg-[#f7444e] justify-center items-center z-50 ${progress === 100 ? 'opacity-0 hidden' : 'opacity-100 flex'} transition-all duration-1000`}>
                    <Loader />
                </div>
            )}
            <Header isOpen={isOpen} toggleOpen={toggleOpen} />
            <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
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

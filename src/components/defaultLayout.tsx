'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Header from './layouts/header/header';
import MenuOverlay from './layouts/menuOverlay/menuOverlay';
import Footer from './layouts/footer/footer';
import { Html, useProgress } from "@react-three/drei";
import Loader from '@/components/loader/loader';
import { usePathname } from 'next/navigation'
import { AnimatePresence } from 'framer-motion'
export default function DefaultLayout({ children }: Props) {
    const pathname = usePathname()
    const [navbarOpen, setNavbarOpen] = useState(false);
    const { progress } = useProgress();
    useEffect(() => {
        AOS.init({});
    }, []);
    const showLoader = pathname === '/';
    return (
        <body id='layout-default'>
            {showLoader && (
                <div className={`fixed top-0 left-0 w-screen h-screen bg-anzac-200 justify-center items-center z-50 ${progress === 100 ? 'opacity-0 hidden' : 'opacity-100 flex'} transition-all duration-1000`}>
                    <Loader />
                </div>
            )}
            <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
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

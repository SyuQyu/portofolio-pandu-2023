'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Header from './layouts/header/header';
import MenuOverlay from './layouts/menuOverlay/menuOverlay';
import Footer from './layouts/footer/footer';

export default function DefaultLayout({ children }: Props) {
    const [navbarOpen, setNavbarOpen] = useState(false);

    useEffect(() => {
        AOS.init({});
    }, []);

    return (
        <body id='layout-default'>
            <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
            <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
            <main className='main'>{children}</main>
            <Footer />
        </body>
    );
}

type Props = {
    children: React.ReactNode;
};

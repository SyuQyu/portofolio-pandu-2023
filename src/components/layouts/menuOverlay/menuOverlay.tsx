import clsx from 'clsx';
import Link from 'next/link';

export default function Header({ className, navbarOpen, setNavbarOpen }: any) {
    return (
        <nav
            className={`fixed flex top-0 left-0 w-full py-10 px-20 z-10 h-screen pt-24 bg-cloud-500 text-white bg-opacity-100 transform delay-100 transition-all duration-300 ${navbarOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
                }`}
        >
            <ul className="flex flex-col items-start">
                <li className="nav-li">
                    <Link
                        href="/"
                        className="nav-link"
                        onClick={() => {
                            setNavbarOpen(false);
                        }}
                    >
                        <p className="text-black">3D Gallery</p>
                    </Link>
                </li>
                <li className="nav-li">
                    <Link
                        href="/"
                        className="nav-link"
                        onClick={() => {
                            setNavbarOpen(false);
                        }}
                    >
                        <p className="text-black">Programming</p>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

type Props = {
    className?: string;
};

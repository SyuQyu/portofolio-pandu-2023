import clsx from 'clsx';
import Link from 'next/link';

export default function Header({ className, navbarOpen, setNavbarOpen }: MenuProps) {
    return (
        <nav
            className={`fixed flex top-0 right-0 w-full py-10 px-20 z-10 h-screen pt-24 bg-anzac-200 text-white bg-opacity-100 transform delay-100 transition-all duration-300 ${navbarOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
                }`}
        >
            <ul className="flex flex-col mx-auto mt-10 text-center"> {/* Updated className and added inline styles */}
                <li className="nav-li">
                    <Link
                        href="/"
                        className="nav-link"
                        onClick={() => {
                            setNavbarOpen(false);
                        }}
                    >
                        <p className="text-black">Home</p>
                    </Link>
                </li>
                <li className="nav-li">
                    <Link
                        href="/about-me"
                        className="nav-link"
                        onClick={() => {
                            setNavbarOpen(false);
                        }}
                    >
                        <p className="text-black">About Me</p>
                    </Link>
                </li>
                <li className="nav-li">
                    <Link
                        href="/portofolio-3d"
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
                        href="/portofolio-coding"
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

type MenuProps = {
    className?: string,
    navbarOpen?: boolean,
    setNavbarOpen?: any,
};


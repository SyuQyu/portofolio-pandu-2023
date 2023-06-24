import clsx from 'clsx';
import Link from 'next/link';

export default function Header({ className, navbarOpen, setNavbarOpen }: any) {
    return (
        <header className="w-full fixed top-0 left-0 py-10 px-20 flex z-20">
            <div className={`${navbarOpen ? 'text-black' : 'text-white'} flex-grow z-20 `}>
                <h1 className="text-2xl font-bold my-0 transition-colors duration-300">Ndu.dev</h1>
            </div>
            <button
                className="flex top-0 right-0 z-20 relative w-10 h-10 text-white focus:outline-none"
                onClick={() => setNavbarOpen(!navbarOpen)}
            >
                <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                    <span
                        className={`absolute h-0.5 w-5 ${navbarOpen ? 'bg-black' : 'bg-white'} transform transition duration-300 ease-in-out ${navbarOpen ? "rotate-45 delay-200" : "-translate-y-1.5"
                            }`}
                    ></span>
                    <span
                        className={`absolute h-0.5 ${navbarOpen ? 'bg-black' : 'bg-white'} transform transition-all duration-200 ease-in-out ${navbarOpen ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"
                            }`}
                    ></span>
                    <span
                        className={`absolute h-0.5 w-5 ${navbarOpen ? 'bg-black' : 'bg-white'} transform transition duration-300 ease-in-out ${navbarOpen ? "-rotate-45 delay-200" : "translate-y-1.5"
                            }`}
                    ></span>
                </div>
            </button>
        </header>
    );
}

type Props = {
    className?: string;
};

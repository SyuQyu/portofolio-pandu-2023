import { Archivo, Poppins, Roboto_Mono } from 'next/font/google';

export const ARCHIVO = Archivo({
    weight: ['400', '500', '700', '800', '900'],
    subsets: ['latin'],
    variable: '--font-archivo',
    display: 'swap',
});

export const POPPINS = Poppins({
    weight: ['200', '300', '400', '500', '700'],
    subsets: ['latin'],
    variable: '--font-poppins',
    display: 'swap',
});

export const ROBOTO_MONO = Roboto_Mono({
    subsets: ['latin'],
    variable: '--font-roboto-mono',
    display: 'swap',
});

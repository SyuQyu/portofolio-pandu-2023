'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaWhatsapp, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const NAV = [
    { name: 'Work', href: '#portofolioSection' },
    { name: '3D', href: '#playgroundSection' },
    { name: 'About', href: '#aboutMeSection' },
    { name: 'Contact', href: '#contactSection' },
];

const SOCIAL = [
    { icon: FaEnvelope, href: 'mailto:pandu.utomo.2002@gmail.com', label: 'Email' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/pandu-utomo/', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/SyuQyu', label: 'GitHub' },
    { icon: FaWhatsapp, href: 'https://wa.me/6282137138687', label: 'WhatsApp' },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[var(--foreground)] px-6 pt-16 pb-8 text-[var(--background)]">
            <motion.div
                className="mx-auto max-w-7xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="font-display text-3xl font-black uppercase leading-none tracking-tight">
                            Pandu Utomo
                        </p>
                        <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--background)]/65">
                            Full-stack developer &amp; 3D artist building software and the worlds it lives in.
                        </p>
                    </div>

                    <nav className="flex flex-wrap gap-x-8 gap-y-3">
                        {NAV.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-[var(--background)]/70 transition-colors hover:text-[var(--signal)]"
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    <div className="flex gap-3">
                        {SOCIAL.map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target={href.startsWith('http') ? '_blank' : undefined}
                                rel="noreferrer"
                                aria-label={label}
                                className="flex h-10 w-10 items-center justify-center rounded-[3px] border border-[var(--background)]/20 text-[var(--background)]/80 transition-colors hover:border-[var(--signal)] hover:text-[var(--signal)]"
                            >
                                <Icon size={15} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-12 flex flex-col gap-2 border-t border-[var(--background)]/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-[var(--background)]/55">
                        © {year} Pandu Utomo · All rights reserved
                    </span>
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-[var(--background)]/55">
                        Built with Next.js · Three.js · a renderer&apos;s eye
                    </span>
                </div>
            </motion.div>
        </footer>
    );
}

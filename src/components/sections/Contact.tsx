'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { GradientButton } from '@/components/ui/GradientButton';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

const CHANNELS = [
    { icon: FaEnvelope, label: 'Email', value: 'pandu.utomo.2002@gmail.com', href: 'mailto:pandu.utomo.2002@gmail.com' },
    { icon: FaWhatsapp, label: 'WhatsApp', value: '+62 821-3713-8687', href: 'https://wa.me/6282137138687' },
    { icon: FaLinkedin, label: 'LinkedIn', value: 'in/pandu-utomo', href: 'https://www.linkedin.com/in/pandu-utomo/' },
    { icon: FaGithub, label: 'GitHub', value: 'github.com/SyuQyu', href: 'https://github.com/SyuQyu' },
    { icon: FaMapMarkerAlt, label: 'Based in', value: 'Indonesia · remote-friendly', href: undefined },
];

const fieldClass =
    'w-full rounded-[3px] border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--foreground-secondary)] outline-none transition-colors focus:border-[var(--signal)] focus:ring-1 focus:ring-[var(--signal)]';

export const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thanks, message noted. (Demo form)');
    };

    return (
        <section id="contactSection" className="py-24 md:py-32 relative px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 32, filter: 'blur(8px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.85, ease: EASE_OUT_EXPO }}
                >
                    <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--signal-ink)]">Let&apos;s talk</p>
                    <h2
                        className="mt-5 max-w-[16ch] font-display font-black uppercase leading-[0.86] tracking-[-0.035em] text-[var(--foreground)]"
                        style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)' }}
                    >
                        Build something worth remembering.
                    </h2>
                    <p className="mt-6 max-w-[52ch] text-base md:text-lg leading-relaxed text-[var(--foreground-secondary)]">
                        Hiring, a freelance build, or just a sharp idea that needs both code and craft.
                        The inbox is open and replies are quick.
                    </p>
                </motion.div>

                <div className="mt-14 grid grid-cols-1 gap-12 border-t border-[var(--line-strong)] pt-12 lg:grid-cols-2 lg:gap-20">
                    {/* Channels */}
                    <motion.div
                        className="flex flex-col"
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
                    >
                        <ul className="divide-y divide-[var(--line)]">
                            {CHANNELS.map(({ icon: Icon, label, value, href }) => {
                                const inner = (
                                    <>
                                        <span className="flex w-28 shrink-0 items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--foreground-muted)]">
                                            <Icon size={13} className="text-[var(--signal)]" /> {label}
                                        </span>
                                        <span className="text-[var(--foreground)] transition-colors group-hover:text-[var(--signal-ink)]">
                                            {value}
                                        </span>
                                    </>
                                );
                                return (
                                    <li key={label}>
                                        {href ? (
                                            <a
                                                href={href}
                                                target={href.startsWith('http') ? '_blank' : undefined}
                                                rel="noreferrer"
                                                className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-6"
                                            >
                                                {inner}
                                            </a>
                                        ) : (
                                            <div className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-6">
                                                {inner}
                                            </div>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                        <a
                            href="mailto:pandu.utomo.2002@gmail.com"
                            className="mt-auto pt-10 font-display text-2xl md:text-3xl font-black uppercase tracking-tight text-[var(--foreground)] hover:text-[var(--signal)] transition-colors"
                        >
                            Say hello →
                        </a>
                    </motion.div>

                    {/* Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-5"
                        initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: EASE_OUT_EXPO }}
                    >
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <label className="flex flex-col gap-2">
                                <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--foreground-muted)]">Name</span>
                                <input
                                    type="text"
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    className={fieldClass}
                                    placeholder="Your name"
                                />
                            </label>
                            <label className="flex flex-col gap-2">
                                <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--foreground-muted)]">Email</span>
                                <input
                                    type="email"
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    className={fieldClass}
                                    placeholder="you@email.com"
                                />
                            </label>
                        </div>
                        <label className="flex flex-col gap-2">
                            <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--foreground-muted)]">Message</span>
                            <textarea
                                rows={6}
                                value={formState.message}
                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                className={`${fieldClass} resize-none`}
                                placeholder="What are you building?"
                            />
                        </label>
                        <GradientButton type="submit" className="self-start">
                            Send message
                        </GradientButton>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

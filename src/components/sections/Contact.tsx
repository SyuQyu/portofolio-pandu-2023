'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { GradientButton } from '@/components/ui/GradientButton';
import { useState } from 'react';

export const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Helper logic here or toast
        alert('Message sent! (Simulation)');
    };

    return (
        <section id="contactSection" className="py-20 relative px-6">
            <SectionHeading title="Get In Touch" subtitle="Let's build something amazing together" />

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <GlassCard className="flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4">Contact Information</h3>
                    <p className="text-[var(--foreground-secondary)] mb-6">
                        Feel free to reach out for collaborations, freelance work, or just to say hi!
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-[var(--foreground-secondary)]">
                            <span className="w-10 h-10 rounded-full bg-[var(--accent-primary)]/20 flex items-center justify-center text-[var(--accent-primary)]">✉️</span>
                            <a href="mailto:pandu@example.com" className="hover:text-[var(--foreground)] transition-colors">pandu@example.com</a>
                        </div>
                        <div className="flex items-center gap-3 text-[var(--foreground-secondary)]">
                            <span className="w-10 h-10 rounded-full bg-[var(--accent-secondary)]/20 flex items-center justify-center text-[var(--accent-secondary)]">📍</span>
                            <span>Indonesia</span>
                        </div>
                    </div>
                </GlassCard>

                <GlassCard>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-[var(--foreground-muted)] mb-1">Name</label>
                            <input
                                type="text"
                                value={formState.name}
                                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                className="w-full bg-[var(--surface)] border border-[var(--glass-border)] rounded-lg px-4 py-2 focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] outline-none transition-all text-[var(--foreground)]"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-[var(--foreground-muted)] mb-1">Email</label>
                            <input
                                type="email"
                                value={formState.email}
                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                className="w-full bg-[var(--surface)] border border-[var(--glass-border)] rounded-lg px-4 py-2 focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] outline-none transition-all text-[var(--foreground)]"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-[var(--foreground-muted)] mb-1">Message</label>
                            <textarea
                                rows={4}
                                value={formState.message}
                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                className="w-full bg-[var(--surface)] border border-[var(--glass-border)] rounded-lg px-4 py-2 focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] outline-none transition-all text-[var(--foreground)] resize-none"
                                placeholder="Your message..."
                            />
                        </div>
                        <GradientButton type="submit" className="w-full">
                            Send Message
                        </GradientButton>
                    </form>
                </GlassCard>
            </div>
        </section>
    );
};

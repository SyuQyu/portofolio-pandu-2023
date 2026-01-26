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
                    <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
                    <p className="text-gray-300 mb-6">
                        Feel free to reach out for collaborations, freelance work, or just to say hi!
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-gray-300">
                            <span className="w-10 h-10 rounded-full bg-accent-blue/20 flex items-center justify-center text-accent-blue">✉️</span>
                            <a href="mailto:pandu@example.com" className="hover:text-white transition-colors">pandu@example.com</a>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                            <span className="w-10 h-10 rounded-full bg-accent-purple/20 flex items-center justify-center text-accent-purple">📍</span>
                            <span>Indonesia</span>
                        </div>
                    </div>
                </GlassCard>

                <GlassCard>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                            <input
                                type="text"
                                value={formState.name}
                                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-2 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all text-white"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                            <input
                                type="email"
                                value={formState.email}
                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-2 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all text-white"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                            <textarea
                                rows={4}
                                value={formState.message}
                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-2 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all text-white resize-none"
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

'use client';

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';
import { SceneCanvas } from '@/components/3d/SceneCanvas';
import { ParticleBackground } from '@/components/3d/ParticleBackground';
import { FloatingShapes } from '@/components/3d/FloatingShapes';
import { GradientButton } from '@/components/ui/GradientButton';

const GREETING_STRINGS = ["Hello", "こんにちは", "안녕하세요", "Ciao", "Guten tag", "Nǐ hǎo"];

export const Hero = () => {
    const el = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (!el.current) return;

        const typed = new Typed(el.current, {
            strings: GREETING_STRINGS,
            startDelay: 500,
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 1500,
            smartBackspace: true,
            showCursor: true,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section className="relative w-full h-screen flex justify-center items-center overflow-hidden">
            {/* 3D Background */}
            <SceneCanvas className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-dark to-primary-light">
                <ParticleBackground />
                <FloatingShapes />
            </SceneCanvas>

            {/* Content */}
            <div className="z-10 text-center px-4 w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex justify-center items-center mb-4 min-h-[60px]">
                        <span className="font-extrabold md:text-6xl sm:text-4xl text-3xl text-accent-blue" ref={el}></span>
                        <span className="font-extrabold md:text-6xl sm:text-4xl text-3xl text-white ml-2">, I&apos;m Pandu Utomo</span>
                    </div>

                    <p className="text-gray-300 md:text-xl text-lg tracking-wide mb-8 max-w-2xl mx-auto">
                        Computer Science Student | Full-stack Developer | 3D Artist
                    </p>

                    <div className="flex gap-4 justify-center">
                        <GradientButton onClick={() => document.getElementById('aboutMeSection')?.scrollIntoView({ behavior: 'smooth' })}>
                            View Work
                        </GradientButton>
                        <GradientButton variant="outline" onClick={() => document.getElementById('contactSection')?.scrollIntoView({ behavior: 'smooth' })}>
                            Contact Me
                        </GradientButton>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <div className="w-[35px] h-[64px] rounded-3xl border-4 border-gray-500 flex justify-center items-start p-2">
                    <motion.div
                        className="w-3 h-3 rounded-full bg-accent-blue mb-1"
                        animate={{ y: [0, 24, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                    />
                </div>
            </motion.div>
        </section>
    );
};

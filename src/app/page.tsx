'use client';

import dynamic from 'next/dynamic';
import { Hero } from '@/components/sections/Hero';
import { Marquee } from '@/components/ui/Marquee';

const About = dynamic(() => import('@/components/sections/About').then(mod => mod.About), {
  loading: () => <div className="min-h-[400px] flex justify-center items-center text-[var(--foreground-muted)] font-mono text-xs uppercase tracking-[0.2em]">Loading About...</div>,
  ssr: false
});

const Experience = dynamic(() => import('@/components/sections/Experience').then(mod => mod.Experience), {
  loading: () => <div className="min-h-[400px] flex justify-center items-center text-[var(--foreground-muted)] font-mono text-xs uppercase tracking-[0.2em]">Loading Experience...</div>,
  ssr: false
});

const Projects = dynamic(() => import('@/components/sections/Projects').then(mod => mod.Projects), {
  loading: () => <div className="min-h-[400px] flex justify-center items-center text-[var(--foreground-muted)] font-mono text-xs uppercase tracking-[0.2em]">Loading Portfolio...</div>,
  ssr: false
});

const Gallery3D = dynamic(() => import('@/components/sections/Gallery3D').then(mod => mod.Gallery3D), {
  loading: () => <div className="min-h-[400px] flex justify-center items-center text-[var(--foreground-muted)] font-mono text-xs uppercase tracking-[0.2em]">Loading 3D Gallery...</div>,
  ssr: false
});

const Contact = dynamic(() => import('@/components/sections/Contact').then(mod => mod.Contact), {
  loading: () => <div className="min-h-[200px] flex justify-center items-center text-[var(--foreground-muted)] font-mono text-xs uppercase tracking-[0.2em]">Loading Contact...</div>,
  ssr: false
});

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <div className='flex flex-col w-full'>
        <About />
        <Experience />
        <Projects />
        <Gallery3D />
        <Contact />
      </div>
    </>
  );
}

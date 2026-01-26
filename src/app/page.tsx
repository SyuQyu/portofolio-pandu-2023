'use client';

import dynamic from 'next/dynamic';
import { Hero } from '@/components/sections/Hero';

const About = dynamic(() => import('@/components/sections/About').then(mod => mod.About), {
  loading: () => <div className="min-h-[400px] flex justify-center items-center text-gray-400">Loading About...</div>,
  ssr: false
});

const Experience = dynamic(() => import('@/components/sections/Experience').then(mod => mod.Experience), {
  loading: () => <div className="min-h-[400px] flex justify-center items-center text-gray-400">Loading Experience...</div>,
  ssr: false
});

const Projects = dynamic(() => import('@/components/sections/Projects').then(mod => mod.Projects), {
  loading: () => <div className="min-h-[400px] flex justify-center items-center text-gray-400">Loading Portfolio...</div>,
  ssr: false
});

const Gallery3D = dynamic(() => import('@/components/sections/Gallery3D').then(mod => mod.Gallery3D), {
  loading: () => <div className="min-h-[400px] flex justify-center items-center text-gray-400">Loading 3D Gallery...</div>,
  ssr: false
});

const Contact = dynamic(() => import('@/components/sections/Contact').then(mod => mod.Contact), {
  loading: () => <div className="min-h-[200px] flex justify-center items-center text-gray-400">Loading Contact...</div>,
  ssr: false
});

export default function Home() {
  return (
    <>
      <Hero />
      <div className='flex flex-col w-full h-full overflow-hidden'>
        <About />
        <Experience />
        <Projects />
        <Gallery3D />
        <Contact />
      </div>
    </>
  );
}

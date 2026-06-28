'use client';

import { useState, Suspense, ReactNode } from 'react';
import Image from 'next/image';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Float, MeshDistortMaterial, Sparkles } from '@react-three/drei';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { KineticHeading } from '@/components/ui/KineticHeading';
import { threeDPortfolio } from '@/contants/portofolio';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const COLORS = ['#e8431f', '#00d4ff', '#8b5cf6', '#10b981', '#fbbf24'];

interface ShapeDef {
    name: string;
    geometry: ReactNode;
    distort?: boolean;
}

const SHAPES: ShapeDef[] = [
    { name: 'Torus Knot', geometry: <torusKnotGeometry args={[1, 0.32, 220, 32]} /> },
    { name: 'Crystal', geometry: <icosahedronGeometry args={[1.4, 0]} /> },
    { name: 'Plasma', geometry: <sphereGeometry args={[1.4, 64, 64]} />, distort: true },
];

const Showpiece = ({ shape, color }: { shape: ShapeDef; color: string }) => (
    <Float speed={1.8} rotationIntensity={0.8} floatIntensity={0.8}>
        <mesh castShadow>
            {shape.geometry}
            {shape.distort ? (
                <MeshDistortMaterial color={color} distort={0.45} speed={2.5} roughness={0.1} metalness={0.7} emissive={color} emissiveIntensity={0.15} />
            ) : (
                <meshStandardMaterial color={color} roughness={0.08} metalness={0.9} emissive={color} emissiveIntensity={0.12} />
            )}
        </mesh>
    </Float>
);

// First render leads the gallery as a wide cinematic plate.
const LEAD = threeDPortfolio[10]; // Medieval Throne Room
const GRID = threeDPortfolio.filter((_, i) => i !== 10);

export const Gallery3D = () => {
    const [shapeIdx, setShapeIdx] = useState(0);
    const [color, setColor] = useState(COLORS[0]);

    return (
        <section id="playgroundSection" className="py-20 md:py-28 relative">
            <KineticHeading text="Render" speed={26} />
            <div className="max-w-7xl mx-auto px-6 pt-12 md:pt-20">
                <SectionHeading
                    title="3D & rendering"
                    number="/ The art"
                    subtitle="Environment studies in Blender, plus a live WebGL scene you can spin yourself."
                />

                {/* The live render — proof the 3D is real, not a video */}
                <motion.div
                    className="relative w-full overflow-hidden rounded-[4px] border border-[var(--line)]"
                    initial={{ opacity: 0, scale: 0.96, filter: 'blur(8px)' }}
                    whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    viewport={{ once: false, amount: 0.25 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    style={{ background: '#16120f' }}
                >
                    <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                        <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-white/55">
                            Live render · WebGL
                        </span>
                        <span className="flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-white/55">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#e8431f]" /> Real-time
                        </span>
                    </div>

                    <div className="relative h-[460px] w-full md:h-[560px]">
                        <Canvas shadows camera={{ position: [0, 1.5, 7], fov: 45 }} gl={{ antialias: true, alpha: true }} dpr={[1, 2]}>
                            <Suspense fallback={null}>
                                <ambientLight intensity={0.3} />
                                <spotLight position={[6, 8, 4]} angle={0.4} penumbra={1} intensity={1.4} castShadow />
                                <pointLight position={[-6, -2, -4]} intensity={0.8} color={color} />
                                <Showpiece shape={SHAPES[shapeIdx]} color={color} />
                                <Sparkles count={70} scale={7} size={2} speed={0.3} color={color} opacity={0.5} />
                                <ContactShadows position={[0, -2.2, 0]} opacity={0.5} scale={12} blur={2.5} far={4} />
                                <Environment preset="city" />
                                <OrbitControls autoRotate autoRotateSpeed={1.2} enablePan={false} minDistance={4} maxDistance={12} />
                            </Suspense>
                        </Canvas>

                        <p className="pointer-events-none absolute right-5 top-4 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-white/45">
                            drag to orbit · scroll to zoom
                        </p>

                        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 flex-col items-center gap-4">
                            <div className="flex gap-1 rounded-[3px] border border-white/15 bg-black/40 p-1 backdrop-blur-sm">
                                {SHAPES.map((shape, i) => (
                                    <button
                                        key={shape.name}
                                        onClick={() => setShapeIdx(i)}
                                        className={cn(
                                            'rounded-[2px] px-4 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.14em] transition-colors',
                                            i === shapeIdx ? 'bg-white text-black' : 'text-white/60 hover:text-white'
                                        )}
                                    >
                                        {shape.name}
                                    </button>
                                ))}
                            </div>
                            <div className="flex gap-2.5">
                                {COLORS.map((c) => (
                                    <button
                                        key={c}
                                        aria-label={`Paint the render ${c}`}
                                        onClick={() => setColor(c)}
                                        className={cn(
                                            'h-5 w-5 rounded-full transition-transform hover:scale-125',
                                            color === c && 'ring-2 ring-white ring-offset-2 ring-offset-black/60 scale-110'
                                        )}
                                        style={{ background: c }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Stills gallery */}
                <div className="mt-16 md:mt-24">
                    <motion.figure
                        className="group relative mb-5 w-full overflow-hidden rounded-[4px] border border-[var(--line)] shadow-[var(--shadow-plate)]"
                        initial={{ opacity: 0, clipPath: 'inset(0% 18% 0% 18%)' }}
                        whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="relative aspect-[21/9] w-full bg-[var(--background-secondary)]">
                            <Image src={LEAD.image} alt={`${LEAD.title}, ${LEAD.subtitle}`} fill sizes="100vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
                        </div>
                        <figcaption className="absolute bottom-0 inset-x-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/75 to-transparent px-5 py-5">
                            <div>
                                <h3 className="font-display text-lg md:text-2xl font-black uppercase tracking-tight text-white">{LEAD.title}</h3>
                                <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-white/65">{LEAD.subtitle}</p>
                            </div>
                            <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-white/55">Blender</span>
                        </figcaption>
                    </motion.figure>

                    <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
                        {GRID.map((item, i) => (
                            <motion.figure
                                key={item.id}
                                className="group relative overflow-hidden rounded-[4px] border border-[var(--line)] shadow-[var(--shadow-plate)]"
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.6, delay: Math.min(i * 0.04, 0.3), ease: 'easeOut' }}
                            >
                                <div className="relative aspect-[4/3] w-full bg-[var(--background-secondary)]">
                                    <Image
                                        src={item.image}
                                        alt={`${item.title}, ${item.subtitle}`}
                                        fill
                                        sizes="(max-width: 768px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                                    />
                                </div>
                                <figcaption className="absolute bottom-0 inset-x-0 flex items-end justify-between gap-3 bg-gradient-to-t from-black/70 to-transparent px-4 py-3.5">
                                    <h3 className="text-sm font-semibold leading-tight text-white">{item.title}</h3>
                                    <span className="shrink-0 font-mono text-[0.55rem] uppercase tracking-[0.14em] text-white/60">{item.subtitle}</span>
                                </figcaption>
                            </motion.figure>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

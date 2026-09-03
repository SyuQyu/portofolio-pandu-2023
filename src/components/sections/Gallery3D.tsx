'use client';

import { useState, Suspense, ReactNode } from 'react';
import Image from 'next/image';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Float, MeshDistortMaterial } from '@react-three/drei';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { KineticHeading } from '@/components/ui/KineticHeading';
import { threeDPortfolio } from '@/contants/portofolio';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

// The ink tray. Four named inks, not a colour wheel — vermilion is the page's
// own signal, the supports are borrowed from stillpage (moss) and hidden-places
// (stone). Deliberately no cyan, violet, magenta or gold: that set belonged to
// the abandoned "control room" theme and is the loudest AI-render signature
// there is.
const INKS: { name: string; hex: string }[] = [
    { name: 'Vermilion', hex: '#e8431f' },
    { name: 'Bone', hex: '#ded6c6' },
    { name: 'Moss', hex: '#7d8f5e' },
    { name: 'Stone', hex: '#8f948d' },
];

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

// No emissive term: a self-lit mesh is the "glow to fake depth" tell in 3D
// form. Depth here comes from the spot key, the contact shadow and honest
// metal roughness.
const Showpiece = ({ shape, color }: { shape: ShapeDef; color: string }) => (
    <Float speed={1.8} rotationIntensity={0.8} floatIntensity={0.8}>
        <mesh castShadow>
            {shape.geometry}
            {shape.distort ? (
                <MeshDistortMaterial color={color} distort={0.45} speed={2.5} roughness={0.18} metalness={0.6} />
            ) : (
                <meshStandardMaterial color={color} roughness={0.15} metalness={0.8} />
            )}
        </mesh>
    </Float>
);

// First render leads the gallery as a wide cinematic plate.
const LEAD = threeDPortfolio[10]; // Medieval Throne Room
const GRID = threeDPortfolio.filter((_, i) => i !== 10);

export const Gallery3D = () => {
    const [shapeIdx, setShapeIdx] = useState(0);
    const [ink, setInk] = useState(INKS[0]);

    return (
        <section id="playgroundSection" className="py-20 md:py-28 relative">
            <KineticHeading text="Render" speed={26} />
            <div className="max-w-7xl mx-auto px-6 pt-12 md:pt-20">
                <SectionHeading
                    title="3D & rendering"
                    number="/ The art"
                    subtitle="Environment studies modelled, lit and rendered in Blender, plus a live WebGL scene you can spin yourself."
                />

                {/* The live render — proof the 3D is real, not a video */}
                <motion.div
                    className="relative w-full overflow-hidden rounded-[4px] border border-[var(--line)]"
                    initial={{ opacity: 0, scale: 0.96, filter: 'blur(8px)' }}
                    whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    viewport={{ once: false, amount: 0.25 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    style={{ background: 'var(--plate)' }}
                >
                    <div className="flex items-center justify-between border-b border-[var(--plate-line)] px-5 py-3">
                        <span className="font-mono text-label-xs uppercase tracking-[0.2em] text-[var(--plate-ink)]/70">
                            Live render · WebGL
                        </span>
                        <span className="flex items-center gap-2 font-mono text-label-xs uppercase tracking-[0.2em] text-[var(--plate-ink)]/70">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--signal)]" /> Real-time
                        </span>
                    </div>

                    <div className="relative h-[460px] w-full md:h-[560px]">
                        <Canvas shadows camera={{ position: [0, 1.5, 7], fov: 45 }} gl={{ antialias: true, alpha: true }} dpr={[1, 2]}>
                            <Suspense fallback={null}>
                                <ambientLight intensity={0.35} />
                                <spotLight position={[6, 8, 4]} angle={0.4} penumbra={1} intensity={1.4} castShadow />
                                <pointLight position={[-6, -2, -4]} intensity={0.7} color={ink.hex} />
                                <Showpiece shape={SHAPES[shapeIdx]} color={ink.hex} />
                                <ContactShadows position={[0, -2.2, 0]} opacity={0.5} scale={12} blur={2.5} far={4} />
                                <Environment preset="city" />
                                <OrbitControls autoRotate autoRotateSpeed={1.2} enablePan={false} minDistance={4} maxDistance={12} />
                            </Suspense>
                        </Canvas>

                        {/* On its own solid chip, not floating over the canvas.
                            The showpiece orbits and can drift behind this corner,
                            and in Bone it is nearly as light as the type — the
                            poster frame passed, second four would not. */}
                        <p className="pointer-events-none absolute right-5 top-4 rounded-[2px] border border-[var(--plate-line)] bg-[var(--plate)] px-2.5 py-1 font-mono text-label-xs uppercase tracking-[0.16em] text-[var(--plate-ink)]/70">
                            drag to orbit · scroll to zoom
                        </p>

                        {/* Controls sit on the plate's own solid ink — no translucent
                            pill floating over a canvas whose contents move. */}
                        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 flex-col items-center gap-4">
                            <div className="flex gap-1 rounded-[3px] border border-[var(--plate-line)] bg-[var(--plate)] p-1">
                                {SHAPES.map((shape, i) => (
                                    <button
                                        key={shape.name}
                                        onClick={() => setShapeIdx(i)}
                                        className={cn(
                                            'rounded-[2px] px-4 py-1.5 font-mono text-label-xs uppercase tracking-[0.14em] transition-colors',
                                            i === shapeIdx
                                                ? 'bg-[var(--plate-ink)] text-[var(--plate)]'
                                                : 'text-[var(--plate-ink)]/60 hover:text-[var(--plate-ink)]'
                                        )}
                                    >
                                        {shape.name}
                                    </button>
                                ))}
                            </div>
                            <div className="flex items-center gap-2.5 rounded-[3px] border border-[var(--plate-line)] bg-[var(--plate)] px-3 py-2">
                                <span className="w-[4.5rem] font-mono text-label-xs uppercase tracking-[0.16em] text-[var(--plate-ink)]/55">
                                    {ink.name}
                                </span>
                                <span className="h-3 w-px bg-[var(--plate-line)]" />
                                {INKS.map((c) => (
                                    <button
                                        key={c.hex}
                                        aria-label={`Render in ${c.name}`}
                                        aria-pressed={ink.hex === c.hex}
                                        onClick={() => setInk(c)}
                                        className={cn(
                                            'h-4 w-4 rounded-[2px] transition-transform duration-200 hover:scale-110',
                                            ink.hex === c.hex && 'ring-1 ring-[var(--plate-ink)] ring-offset-2 ring-offset-[var(--plate)]'
                                        )}
                                        style={{ background: c.hex }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Stills gallery. Captions sit on the paper BELOW each plate: no
                    scrim. These renders ARE the work, and a black gradient dumped
                    over one to make white type legible destroys the lighting the
                    render was made for. Print monographs caption underneath. */}
                <div className="mt-16 md:mt-24">
                    <motion.figure
                        className="group mb-14 w-full"
                        initial={{ opacity: 0, clipPath: 'inset(0% 18% 0% 18%)' }}
                        whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="overflow-hidden rounded-[4px] border border-[var(--line)] bg-[var(--background-secondary)] shadow-[var(--shadow-plate)]">
                            <Image
                                src={LEAD.image}
                                alt={`${LEAD.title}, ${LEAD.subtitle}`}
                                width={LEAD.width}
                                height={LEAD.height}
                                sizes="100vw"
                                priority
                                className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                            />
                        </div>
                        <figcaption className="mt-4 flex flex-col gap-2 border-t border-[var(--line)] pt-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                            <h3 className="font-display text-lg md:text-2xl font-black uppercase tracking-tight text-[var(--foreground)]">
                                {LEAD.title}
                            </h3>
                            <p className="font-mono text-label-xs uppercase tracking-[0.18em] text-[var(--foreground-secondary)]">
                                {LEAD.subtitle} <span className="text-[var(--foreground-muted)]">· Blender</span>
                            </p>
                        </figcaption>
                    </motion.figure>

                    {/* Column masonry, not a fixed-ratio grid. Five of these plates
                        are 9:16 portrait; a 4:3 cell with object-cover showed about
                        42% of them and threw the composition away. Each plate now
                        keeps its native aspect, so the layout reports the work
                        rather than reformatting it. */}
                    <div className="columns-2 gap-5 md:columns-3 [column-fill:balance]">
                        {GRID.map((item, i) => (
                            <motion.figure
                                key={item.id}
                                className="group mb-10 break-inside-avoid"
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.15 }}
                                transition={{ duration: 0.6, delay: Math.min(i * 0.04, 0.3), ease: 'easeOut' }}
                            >
                                <div className="overflow-hidden rounded-[4px] border border-[var(--line)] bg-[var(--background-secondary)] shadow-[var(--shadow-plate)]">
                                    <Image
                                        src={item.image}
                                        alt={`${item.title}, ${item.subtitle}`}
                                        width={item.width}
                                        height={item.height}
                                        sizes="(max-width: 768px) 50vw, 33vw"
                                        className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                                    />
                                </div>
                                <figcaption className="mt-3 border-t border-[var(--line)] pt-3">
                                    <h3 className="text-sm font-semibold leading-tight text-[var(--foreground)]">
                                        {item.title}
                                    </h3>
                                    <p className="mt-1 font-mono text-label-xs uppercase tracking-[0.14em] text-[var(--foreground-secondary)]">
                                        {item.subtitle}
                                    </p>
                                </figcaption>
                            </motion.figure>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

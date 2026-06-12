'use client';

import { useState, Suspense, ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Float, MeshDistortMaterial, Sparkles } from '@react-three/drei';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const COLORS = ['#00d4ff', '#8b5cf6', '#ec4899', '#10b981', '#fbbf24'];

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
                <MeshDistortMaterial
                    color={color}
                    distort={0.45}
                    speed={2.5}
                    roughness={0.1}
                    metalness={0.7}
                    emissive={color}
                    emissiveIntensity={0.15}
                />
            ) : (
                <meshStandardMaterial
                    color={color}
                    roughness={0.08}
                    metalness={0.9}
                    emissive={color}
                    emissiveIntensity={0.12}
                />
            )}
        </mesh>
    </Float>
);

export const Gallery3D = () => {
    const [shapeIdx, setShapeIdx] = useState(0);
    const [color, setColor] = useState(COLORS[0]);

    return (
        <section className="py-20 relative px-6">
            <SectionHeading
                number="04"
                title="Playground"
                subtitle="A live Three.js sandbox — pick a shape, paint it, spin it around"
            />

            <motion.div
                className="max-w-7xl mx-auto relative h-[520px] w-full border border-[var(--glass-border)] rounded-2xl overflow-hidden glass"
                initial={{ opacity: 0, clipPath: 'inset(12% 8% 12% 8% round 16px)' }}
                whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0% round 16px)' }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
            >
                <Canvas shadows camera={{ position: [0, 1.5, 7], fov: 45 }} gl={{ antialias: true, alpha: true }} dpr={[1, 2]}>
                    <Suspense fallback={null}>
                        <ambientLight intensity={0.3} />
                        <spotLight position={[6, 8, 4]} angle={0.4} penumbra={1} intensity={1.4} castShadow />
                        <pointLight position={[-6, -2, -4]} intensity={0.8} color="#8b5cf6" />
                        <Showpiece shape={SHAPES[shapeIdx]} color={color} />
                        <Sparkles count={70} scale={7} size={2} speed={0.3} color={color} opacity={0.5} />
                        <ContactShadows position={[0, -2.2, 0]} opacity={0.45} scale={12} blur={2.5} far={4} />
                        <Environment preset="city" />
                        <OrbitControls autoRotate autoRotateSpeed={1.2} enablePan={false} minDistance={4} maxDistance={12} />
                    </Suspense>
                </Canvas>

                {/* Controls overlay */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
                    <div className="flex gap-1 glass rounded-full px-2 py-1.5">
                        {SHAPES.map((shape, i) => (
                            <button
                                key={shape.name}
                                onClick={() => setShapeIdx(i)}
                                className={cn(
                                    'px-4 py-1.5 rounded-full text-sm transition-all',
                                    i === shapeIdx
                                        ? 'bg-[var(--accent-primary)] text-[var(--background)] font-semibold'
                                        : 'text-[var(--foreground-secondary)] hover:text-[var(--foreground)]'
                                )}
                            >
                                {shape.name}
                            </button>
                        ))}
                    </div>
                    <div className="flex gap-2">
                        {COLORS.map((c) => (
                            <button
                                key={c}
                                aria-label={`Set color ${c}`}
                                onClick={() => setColor(c)}
                                className={cn(
                                    'w-6 h-6 rounded-full transition-transform hover:scale-125',
                                    color === c && 'ring-2 ring-[var(--foreground)] ring-offset-2 ring-offset-[var(--background)] scale-110'
                                )}
                                style={{ background: c }}
                            />
                        ))}
                    </div>
                </div>

                <p className="absolute top-4 right-6 text-xs font-mono text-[var(--foreground-muted)] pointer-events-none">
                    drag to rotate · scroll to zoom
                </p>
            </motion.div>
        </section>
    );
};

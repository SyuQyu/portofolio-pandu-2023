'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Suspense } from 'react';

const ModelPlaceholder = ({ color }: { color: string }) => (
    <mesh>
        <torusKnotGeometry args={[1, 0.3, 100, 16]} />
        <meshStandardMaterial color={color} roughness={0.1} metalness={0.8} />
    </mesh>
);

export const Gallery3D = () => {
    return (
        <section className="py-20 relative px-6 bg-gradient-to-b from-primary-dark to-black">
            <SectionHeading title="3D Gallery" subtitle="Interactive 3D Showcases" />

            <div className="max-w-7xl mx-auto h-[500px] w-full border border-white/10 rounded-2xl overflow-hidden glass">
                <Canvas shadows gl={{ antialias: true }} camera={{ position: [0, 0, 10], fov: 50 }}>
                    <Suspense fallback={null}>
                        <Stage environment="city" intensity={0.5}>
                            <ModelPlaceholder color="#00d4ff" />
                        </Stage>
                        <OrbitControls autoRotate />
                    </Suspense>
                </Canvas>

                <div className="absolute bottom-4 left-0 right-0 text-center text-gray-400 pointer-events-none">
                    Click and drag to rotate • Scroll to zoom
                </div>
            </div>
        </section>
    );
};

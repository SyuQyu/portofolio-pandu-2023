'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, ReactNode } from 'react';
import { Preload } from '@react-three/drei';

interface SceneCanvasProps {
    children: ReactNode;
    className?: string;
    cameraPosition?: [number, number, number];
}

export const SceneCanvas = ({
    children,
    className,
    cameraPosition = [0, 0, 5]
}: SceneCanvasProps) => {
    return (
        <div className={className || "absolute inset-0 -z-10"}>
            <Canvas
                camera={{ position: cameraPosition, fov: 45 }}
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 2]} // Performance optimization for high DPI screens
                onCreated={({ gl }) => {
                    gl.setClearColor(0x000000, 0);
                }}
                onError={(error) => {
                    console.warn('Canvas error:', error);
                }}
            >
                <Suspense fallback={null}>
                    {children}
                    <Preload all />
                </Suspense>
            </Canvas>
        </div>
    );
};

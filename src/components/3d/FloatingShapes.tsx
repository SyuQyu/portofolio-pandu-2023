'use client';

import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';
import { Float } from '@react-three/drei';

const Shape = ({ position, rotation, color, geometry }: any) => {
    const mesh = useRef<Mesh>(null);

    useFrame((state) => {
        if (mesh.current) {
            mesh.current.rotation.x += 0.01;
            mesh.current.rotation.y += 0.01;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh ref={mesh} position={position} rotation={rotation} scale={0.5}>
                {geometry}
                <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} />
            </mesh>
        </Float>
    );
};

export const FloatingShapes = () => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Shape
                position={[-4, 2, -2]}
                color="#8b5cf6"
                geometry={<icosahedronGeometry args={[1, 0]} />}
            />
            <Shape
                position={[4, -2, -3]}
                color="#00d4ff"
                geometry={<torusKnotGeometry args={[0.6, 0.2, 100, 16]} />}
            />
            <Shape
                position={[2, 3, -4]}
                color="#10b981"
                geometry={<octahedronGeometry args={[1]} />}
            />
        </>
    );
};

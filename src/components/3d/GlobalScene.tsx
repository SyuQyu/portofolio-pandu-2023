'use client';

import { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Points, PointMaterial, Sparkles, Stars } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { useTheme } from 'next-themes';
import { Group, Mesh } from 'three';
import * as random from 'maath/random/dist/maath-random.esm';

// How far (world units) the camera dives over the full page scroll
const SCROLL_DEPTH = 30;

// Camera follows page scroll down through the scene, with mouse parallax
const ScrollCameraRig = () => {
    const scroll = useRef(0);

    useEffect(() => {
        const onScroll = () => {
            const max = document.documentElement.scrollHeight - window.innerHeight;
            scroll.current = max > 0 ? window.scrollY / max : 0;
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useFrame(({ camera, pointer }, delta) => {
        const t = Math.min(delta * 2.5, 1);
        const targetY = -scroll.current * SCROLL_DEPTH + pointer.y * 0.4;
        const targetX = pointer.x * 0.7 + Math.sin(scroll.current * Math.PI * 2) * 0.5;
        camera.position.y += (targetY - camera.position.y) * t;
        camera.position.x += (targetX - camera.position.x) * t;
        camera.lookAt(0, camera.position.y, 0);
    });

    return null;
};

// Drifting micro-particles spread along the whole camera path
const Plankton = ({ color }: { color: string }) => {
    const ref = useRef<any>(null);
    const [positions] = useState(() => {
        const arr = random.inSphere(new Float32Array(7500), { radius: 9 }) as Float32Array;
        for (let i = 1; i < arr.length; i += 3) {
            arr[i] = arr[i] * 2.4 - SCROLL_DEPTH / 2;
        }
        return arr;
    });

    useFrame((_, delta) => {
        if (ref.current) ref.current.rotation.y += delta / 40;
    });

    return (
        <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial transparent color={color} size={0.025} sizeAttenuation depthWrite={false} opacity={0.7} />
        </Points>
    );
};

type FormKind = 'knot' | 'blob' | 'shard' | 'ring' | 'orb';

interface AbstractFormProps {
    position: [number, number, number];
    color: string;
    kind: FormKind;
    scale?: number;
    speed?: number;
}

// Abstract floating sculpture — drifts gently and tumbles in space
const AbstractForm = ({ position, color, kind, scale = 1, speed = 1 }: AbstractFormProps) => {
    const group = useRef<Group>(null);
    const phase = useMemo(() => position[0] * 3.7 + position[1], [position]);

    useFrame(({ clock }, delta) => {
        const t = clock.elapsedTime * speed + phase;
        if (group.current) {
            group.current.position.x = position[0] + Math.sin(t * 0.22) * 0.5;
            group.current.position.y = position[1] + Math.sin(t * 0.45) * 0.6;
            group.current.rotation.x += delta * 0.15 * speed;
            group.current.rotation.y += delta * 0.22 * speed;
        }
    });

    return (
        <group ref={group} position={position} scale={scale}>
            {kind === 'knot' && (
                <mesh>
                    <torusKnotGeometry args={[0.7, 0.22, 150, 24]} />
                    <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.35} roughness={0.15} metalness={0.9} />
                </mesh>
            )}
            {kind === 'blob' && (
                <mesh>
                    <icosahedronGeometry args={[0.9, 5]} />
                    <MeshDistortMaterial color={color} emissive={color} emissiveIntensity={0.3} distort={0.45} speed={2} roughness={0.2} metalness={0.7} />
                </mesh>
            )}
            {kind === 'shard' && (
                <>
                    <mesh>
                        <octahedronGeometry args={[0.9, 0]} />
                        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} roughness={0.1} metalness={0.9} />
                    </mesh>
                    <mesh scale={1.4}>
                        <octahedronGeometry args={[0.9, 0]} />
                        <meshBasicMaterial color={color} wireframe transparent opacity={0.15} />
                    </mesh>
                </>
            )}
            {kind === 'ring' && (
                <mesh rotation={[Math.PI / 3, 0, 0]}>
                    <torusGeometry args={[0.9, 0.08, 16, 64]} />
                    <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.4} roughness={0.15} metalness={0.9} />
                </mesh>
            )}
            {kind === 'orb' && (
                <>
                    <mesh>
                        <sphereGeometry args={[0.7, 32, 32]} />
                        <MeshDistortMaterial color={color} emissive={color} emissiveIntensity={0.25} distort={0.3} speed={1.5} roughness={0.1} metalness={0.85} />
                    </mesh>
                    <mesh scale={1.5}>
                        <icosahedronGeometry args={[0.7, 1]} />
                        <meshBasicMaterial color={color} wireframe transparent opacity={0.12} />
                    </mesh>
                </>
            )}
        </group>
    );
};

// Abstract sculptures laid out along the camera's dive path
const FORMS: AbstractFormProps[] = [
    { position: [-3.2, -5, -2], color: '#8b5cf6', kind: 'knot', scale: 1.0, speed: 0.8 },
    { position: [3.4, -8, -3], color: '#00d4ff', kind: 'shard', scale: 0.8, speed: 1.1 },
    { position: [-1.5, -11, -1.5], color: '#ec4899', kind: 'blob', scale: 1.2, speed: 0.7 },
    { position: [2.6, -14.5, -2.5], color: '#00d4ff', kind: 'ring', scale: 1.0, speed: 1.0 },
    { position: [-3.6, -18, -3], color: '#8b5cf6', kind: 'orb', scale: 1.1, speed: 0.9 },
    { position: [1.2, -21.5, -1], color: '#10b981', kind: 'shard', scale: 0.6, speed: 1.2 },
    { position: [-2.2, -25, -2], color: '#ec4899', kind: 'knot', scale: 0.9, speed: 0.85 },
    { position: [3.0, -28, -3.5], color: '#8b5cf6', kind: 'blob', scale: 1.2, speed: 0.75 },
];

const ORBIT_COUNT = 8;

const OrbitRing = ({ accent, secondary }: { accent: string; secondary: string }) => {
    const ring = useRef<Group>(null);

    useFrame((_, delta) => {
        if (ring.current) ring.current.rotation.y += delta * 0.4;
    });

    return (
        <group rotation={[0.45, 0, -0.25]}>
            <group ref={ring}>
                {Array.from({ length: ORBIT_COUNT }).map((_, i) => {
                    const angle = (i / ORBIT_COUNT) * Math.PI * 2;
                    const color = i % 2 ? accent : secondary;
                    return (
                        <mesh
                            key={i}
                            position={[Math.cos(angle) * 2.4, 0, Math.sin(angle) * 2.4]}
                            rotation={[angle, angle, 0]}
                            scale={0.1}
                        >
                            <octahedronGeometry args={[1]} />
                            <meshStandardMaterial
                                color={color}
                                emissive={color}
                                emissiveIntensity={0.7}
                                roughness={0.1}
                                metalness={0.9}
                            />
                        </mesh>
                    );
                })}
            </group>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[2.4, 0.005, 8, 128]} />
                <meshBasicMaterial color={accent} transparent opacity={0.25} />
            </mesh>
        </group>
    );
};

// Hero centerpiece — distorted glowing core that reacts to hover
const EnergyCore = ({ accent, secondary }: { accent: string; secondary: string }) => {
    const [hovered, setHovered] = useState(false);
    const core = useRef<Mesh>(null);
    const { viewport } = useThree();

    // Centered behind the hero headline, like a ghost behind the type
    const wide = viewport.width > 7;
    const position: [number, number, number] = wide ? [0, 0.2, -2.2] : [0, 0.5, -2.8];
    const scale = wide ? 1.15 : 0.85;

    useFrame((_, delta) => {
        if (core.current) core.current.rotation.y += delta * 0.15;
    });

    return (
        <group position={position} scale={scale}>
            <Float speed={1.6} rotationIntensity={0.5} floatIntensity={1.2}>
                <mesh
                    ref={core}
                    scale={hovered ? 1.12 : 1}
                    onPointerOver={() => setHovered(true)}
                    onPointerOut={() => setHovered(false)}
                >
                    <icosahedronGeometry args={[1.1, 5]} />
                    <MeshDistortMaterial
                        color={accent}
                        emissive={secondary}
                        emissiveIntensity={hovered ? 1 : 0.35}
                        roughness={0.15}
                        metalness={0.85}
                        distort={hovered ? 0.55 : 0.35}
                        speed={hovered ? 4.5 : 2}
                    />
                </mesh>
                <mesh scale={hovered ? 1.7 : 1.5}>
                    <icosahedronGeometry args={[1.1, 1]} />
                    <meshBasicMaterial color={accent} wireframe transparent opacity={0.08} />
                </mesh>
            </Float>
            <OrbitRing accent={accent} secondary={secondary} />
            <Sparkles count={60} scale={3.5} size={2.5} speed={0.35} color={accent} opacity={0.7} />
        </group>
    );
};

const SceneContent = () => {
    const { resolvedTheme } = useTheme();
    const isLight = resolvedTheme === 'light';

    const bg = isLight ? '#f4f4f8' : '#0a0a12';
    const accent = isLight ? '#6366f1' : '#00d4ff';
    const secondary = isLight ? '#a855f7' : '#8b5cf6';

    return (
        <>
            <color attach="background" args={[bg]} />
            <fog attach="fog" args={[bg, 8, 26]} />
            <ScrollCameraRig />

            <ambientLight intensity={isLight ? 0.7 : 0.4} />
            <directionalLight position={[5, 5, 5]} intensity={0.7} />
            <pointLight position={[-4, -2, 3]} intensity={1.1} color={secondary} />

            {!isLight && <Stars radius={70} depth={40} count={2200} factor={3} saturation={0} fade speed={0.6} />}
            <Plankton color={accent} />
            <EnergyCore accent={accent} secondary={secondary} />
            {FORMS.map((form, i) => (
                <AbstractForm key={i} {...form} />
            ))}

            <EffectComposer>
                <Bloom
                    intensity={isLight ? 0.25 : 0.7}
                    luminanceThreshold={isLight ? 0.8 : 0.3}
                    luminanceSmoothing={0.9}
                    mipmapBlur
                />
            </EffectComposer>
        </>
    );
};

// Fixed full-page canvas living behind all sections. Pointer events are read
// from document.body so 3D hover works through the DOM content above it.
export const GlobalScene = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 -z-10 pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 7], fov: 50 }}
                dpr={[1, 1.5]}
                gl={{ antialias: false }}
                eventSource={document.body}
                eventPrefix="client"
            >
                <SceneContent />
            </Canvas>
        </div>
    );
};

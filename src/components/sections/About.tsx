'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sparkles } from '@react-three/drei';

const SkillCard = ({ title, level }: { title: string; level: number }) => (
    <div className="mb-4">
        <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-[var(--foreground-secondary)]">{title}</span>
            <span className="text-sm text-[var(--foreground-muted)]">{level}%</span>
        </div>
        <div className="w-full bg-[var(--surface)] rounded-full h-2">
            <motion.div
                className="bg-[var(--accent-primary)] h-2 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                transition={{ duration: 1, delay: 0.2 }}
            />
        </div>
    </div>
);

export const About = () => {
    return (
        <section id="aboutMeSection" className="py-20 relative px-6">
            <div className="max-w-7xl mx-auto">
                <SectionHeading number="01" title="About" subtitle="My journey into the digital realm" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
                    {/* Main Bio Card - Spans 2 cols */}
                    <GlassCard className="md:col-span-2 row-span-2 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-4 text-[var(--foreground)]">Who I Am</h3>
                        <p className="text-[var(--foreground-secondary)] leading-relaxed mb-4">
                            I am passionate about advancing my skills in software development. With a solid foundation in software development principles, I excel in self-managing independent projects while also thriving in collaborative team environments.
                        </p>
                        <p className="text-[var(--foreground-secondary)] leading-relaxed">
                            My commitment to continuous learning and adaptability enables me to contribute effectively to innovative and impactful projects.
                        </p>
                    </GlassCard>

                    {/* 3D Avatar Area */}
                    <GlassCard className="row-span-2 relative min-h-[300px] flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0">
                            <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
                                <ambientLight intensity={0.5} />
                                <pointLight position={[5, 5, 5]} intensity={1} />
                                <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
                                    <mesh>
                                        <dodecahedronGeometry args={[1.6, 0]} />
                                        <meshStandardMaterial color="#8b5cf6" wireframe transparent opacity={0.35} />
                                    </mesh>
                                    <mesh scale={0.8}>
                                        <icosahedronGeometry args={[1.1, 5]} />
                                        <MeshDistortMaterial
                                            color="#00d4ff"
                                            emissive="#8b5cf6"
                                            emissiveIntensity={0.35}
                                            distort={0.4}
                                            speed={2.2}
                                            roughness={0.15}
                                            metalness={0.85}
                                        />
                                    </mesh>
                                </Float>
                                <Sparkles count={40} scale={4} size={2} speed={0.4} color="#00d4ff" opacity={0.6} />
                            </Canvas>
                        </div>
                    </GlassCard>

                    {/* Specs / Info */}
                    <GlassCard>
                        <h4 className="text-xl font-bold text-[var(--accent-tertiary)] mb-2">Experience</h4>
                        <p className="text-3xl font-extrabold text-[var(--foreground)]">3+ Years</p>
                        <p className="text-sm text-[var(--foreground-muted)]">Full-stack Development</p>
                    </GlassCard>

                    <GlassCard>
                        <h4 className="text-xl font-bold text-[var(--accent-secondary)] mb-2">Projects</h4>
                        <p className="text-3xl font-extrabold text-[var(--foreground)]">20+</p>
                        <p className="text-sm text-[var(--foreground-muted)]">Completed</p>
                    </GlassCard>

                    {/* Skills */}
                    <GlassCard className="md:col-span-3">
                        <h3 className="text-xl font-bold mb-6 text-[var(--foreground)]">Technical Arsenal</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <h4 className="text-[var(--accent-primary)] mb-4 font-semibold">Development</h4>
                                <SkillCard title="JavaScript / TypeScript" level={90} />
                                <SkillCard title="React / Next.js" level={95} />
                                <SkillCard title="Node.js / Express" level={85} />
                                <SkillCard title="Python / React Native" level={80} />
                            </div>
                            <div>
                                <h4 className="text-[var(--accent-secondary)] mb-4 font-semibold">Database & Tools</h4>
                                <SkillCard title="MySQL / PostgreSQL" level={85} />
                                <SkillCard title="MongoDB / Prisma" level={80} />
                                <SkillCard title="Docker / Git" level={85} />
                                <SkillCard title="Vercel / Netlify" level={90} />
                            </div>
                            <div>
                                <h4 className="text-[var(--accent-tertiary)] mb-4 font-semibold">Design & 3D</h4>
                                <SkillCard title="Blender 3D" level={85} />
                                <SkillCard title="Three.js / R3F" level={80} />
                                <SkillCard title="Figma / UI/UX" level={85} />
                                <SkillCard title="Responsive Design" level={95} />
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
};

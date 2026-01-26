'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';

const SkillCard = ({ title, level }: { title: string; level: number }) => (
    <div className="mb-4">
        <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-300">{title}</span>
            <span className="text-sm text-gray-400">{level}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
            <motion.div
                className="bg-accent-blue h-2 rounded-full"
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
                <SectionHeading title="About Me" subtitle="My journey into the digital realm" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
                    {/* Main Bio Card - Spans 2 cols */}
                    <GlassCard className="md:col-span-2 row-span-2 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-4 text-white">Who I Am</h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            I'm a passionate Full-stack Developer and 3D Artist based in Indonesia.
                            My passion lies in creating immersive web experiences that blend technical precision with artistic vision.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            With a background in Computer Science, I bridge the gap between engineering and design,
                            building applications that are not just functional but also visually stunning.
                        </p>
                    </GlassCard>

                    {/* 3D Avatar Area */}
                    <GlassCard className="row-span-2 relative min-h-[300px] flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0">
                            <Canvas>
                                <ambientLight intensity={0.5} />
                                <pointLight position={[10, 10, 10]} />
                                <Float speed={2}>
                                    <mesh rotation={[0, Math.PI / 4, 0]}>
                                        <boxGeometry args={[2, 2, 2]} />
                                        <meshStandardMaterial color="#8b5cf6" wireframe />
                                    </mesh>
                                </Float>
                            </Canvas>
                        </div>
                    </GlassCard>

                    {/* Specs / Info */}
                    <GlassCard>
                        <h4 className="text-xl font-bold text-accent-green mb-2">Experience</h4>
                        <p className="text-3xl font-extrabold">3+ Years</p>
                        <p className="text-sm text-gray-400">Full-stack Development</p>
                    </GlassCard>

                    <GlassCard>
                        <h4 className="text-xl font-bold text-accent-purple mb-2">Projects</h4>
                        <p className="text-3xl font-extrabold">20+</p>
                        <p className="text-sm text-gray-400">Completed</p>
                    </GlassCard>

                    {/* Skills */}
                    <GlassCard className="md:col-span-3">
                        <h3 className="text-xl font-bold mb-6 text-white">Technical Arsenal</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <h4 className="text-accent-blue mb-4 font-semibold">Frontend</h4>
                                <SkillCard title="React / Next.js" level={90} />
                                <SkillCard title="TypeScript" level={85} />
                                <SkillCard title="Three.js / R3F" level={75} />
                            </div>
                            <div>
                                <h4 className="text-accent-purple mb-4 font-semibold">Backend</h4>
                                <SkillCard title="Node.js" level={80} />
                                <SkillCard title="Python" level={70} />
                                <SkillCard title="PostgreSQL" level={75} />
                            </div>
                            <div>
                                <h4 className="text-accent-green mb-4 font-semibold">Design</h4>
                                <SkillCard title="Blender" level={80} />
                                <SkillCard title="Figma" level={85} />
                                <SkillCard title="UI/UX" level={80} />
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
};

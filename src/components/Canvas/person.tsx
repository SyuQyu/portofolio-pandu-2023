'use client'
import { Suspense, useEffect, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Load3D = ({ isMobile }: { isMobile: boolean }) => {
    const gltf = useGLTF('/scene/person_pose/person_pose.glb');
    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor="black" />
            <spotLight
                position={[-20, 100, 30]}
                angle={5}
                penumbra={1}
                intensity={1}
                // castShadow
                shadow-mapSize={1024}
            />
            <pointLight intensity={1} />
            <primitive
                object={gltf.scene}
                scale={isMobile ? 2 : 2}
                position={isMobile ? [0, -2, 0] : [0, -2, 0]}
            />
        </mesh>
    );
};

export default function Person() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Add a listener for changes to the screen size
        const mediaQuery = window.matchMedia("(max-width: 768px)");

        // Set the initial value of the `isMobile` state variable
        setIsMobile(mediaQuery.matches);

        // Define a callback function to handle changes to the media query
        const handleMediaQueryChange = (event: { matches: boolean }) => {
            setIsMobile(event.matches);
        };

        // Add the callback function as a listener for changes to the media query
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        // Remove the listener when the component is unmounted
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <Canvas
            shadows
            style={{ height: isMobile ? "80vh" : "100vh" }}
            frameloop="demand"
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-1, 1, 6],
            }}
        >
            <Suspense fallback={null}>
                <OrbitControls
                    // autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Load3D isMobile={isMobile} />
                <Preload all></Preload>
            </Suspense>
        </Canvas>
    );
}

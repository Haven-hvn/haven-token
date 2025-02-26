import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { random } from "maath";
import FluidGradient from "./FluidGradient";
import { ErrorBoundary } from "react-error-boundary";

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const { mouse } = useThree();
  const temp = new THREE.Vector3();
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
    return () => {
      document.body.style.cursor = "auto";
    };
  }, [hovered]);

  useFrame((state) => {
    if (ref.current) {
      // Enhanced mouse movement with interactive speed
      const speed = hovered ? 0.15 : 0.08;
      temp.set(mouse.x * 3, mouse.y * 3, 0);
      ref.current.rotation.x = THREE.MathUtils.lerp(
        ref.current.rotation.x,
        temp.y * 0.3,
        speed
      );
      ref.current.rotation.y = THREE.MathUtils.lerp(
        ref.current.rotation.y,
        temp.x * 0.3,
        speed
      );

      // Dynamic wave animation
      const time = state.clock.getElapsedTime();
      ref.current.position.y = Math.sin(time * 0.4) * 0.4;
      ref.current.rotation.z = Math.cos(time * 0.3) * 0.1;
    }
  });

  return (
    <Points
      ref={ref}
      positions={
        random.inSphere(new Float32Array(12000), { radius: 12 }) as Float32Array
      }
      stride={3}
      frustumCulled={false}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <PointMaterial
        transparent
        color="#7c3aed" // Vibrant purple
        size={hovered ? 0.08 : 0.05}
        sizeAttenuation={true}
        depthWrite={false}
        vertexColors
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function Fallback() {
  return (
    <div className="absolute w-full h-full inset-0 bg-gradient-to-b from-indigo-900/50 via-purple-900/50 to-blue-900/50">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[8px]" />
    </div>
  );
}

export default function DynamicBackground() {
  return (
    <div className="absolute w-full h-full inset-0 z-0">
      <ErrorBoundary FallbackComponent={Fallback}>
        <Canvas camera={{ position: [0, 0, 1] }}>
          <color attach="background" args={["#0f0522"]} />{" "}
          {/* Dark purple background */}
          <FluidGradient />
          <ParticleField />
        </Canvas>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-violet-900/20 to-indigo-900/20 backdrop-blur-[8px]" />
        </div>
      </ErrorBoundary>
    </div>
  );
}

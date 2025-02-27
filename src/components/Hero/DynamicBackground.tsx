import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
// import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
// import { random } from "maath";
import { ErrorBoundary } from "react-error-boundary";

// function Mountains() {
//   const mountainRef = useRef<THREE.Mesh>(null);

//   useFrame((state) => {
//     if (mountainRef.current) {
//       const time = state.clock.getElapsedTime();
//       mountainRef.current.rotation.x = THREE.MathUtils.lerp(
//         mountainRef.current.rotation.x,
//         Math.sin(time * 0.1) * 0.02,
//         0.1
//       );
//     }
//   });

//   return (
//     <mesh ref={mountainRef} position={[0, -2, -4]} rotation={[-0.2, 0, 0]}>
//       <planeGeometry args={[20, 10, 32, 32]} />
//       <shaderMaterial
//         fragmentShader={`
//           varying vec2 vUv;
//           uniform float time;

//           void main() {
//             vec2 uv = vUv;
//             float mountain = abs(sin(uv.x * 5.0 + cos(uv.y * 2.0)));
//             mountain = smoothstep(0.2, 0.8, mountain);
//             vec3 color = mix(vec3(0.1), vec3(0.2), mountain);
//             gl_FragColor = vec4(color, 1.0);
//           }
//         `}
//         vertexShader={`
//           varying vec2 vUv;
//           uniform float time;

//           void main() {
//             vUv = uv;
//             vec3 pos = position;
//             pos.z += sin(pos.x * 2.0) * 1.5;
//             gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
//           }
//         `}
//         uniforms={{
//           time: { value: 0 },
//         }}
//       />
//     </mesh>
//   );
// }

function LightBeam() {
  const beamRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (beamRef.current && beamRef.current.material instanceof THREE.Material) {
      const time = state.clock.getElapsedTime();
      beamRef.current.material.opacity = 0.5 + Math.sin(time * 0.5) * 0.1;
    }
  });

  return (
    <mesh ref={beamRef} position={[0, 0, -3]}>
      <planeGeometry args={[2, 10]} />
      <shaderMaterial
        fragmentShader={`
          void main() {
            vec3 color1 = vec3(0.937, 0.267, 0.267); // Red
            vec3 color2 = vec3(0.925, 0.282, 0.6);   // Pink
            vec3 finalColor = mix(color1, color2, gl_FragCoord.x / 1000.0);
            gl_FragColor = vec4(finalColor, 0.5);
          }
        `}
        transparent={true}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

// function AtmosphericParticles() {
//   const particlesRef = useRef<THREE.Points>(null);

//   useFrame((state) => {
//     if (particlesRef.current) {
//       const time = state.clock.getElapsedTime();
//       particlesRef.current.rotation.y = time * 0.05;
//       particlesRef.current.position.y = Math.sin(time * 0.2) * 0.2;
//     }
//   });

//   return (
//     <Points
//       ref={particlesRef}
//       positions={
//         random.inSphere(new Float32Array(2000), { radius: 8 }) as Float32Array
//       }
//       stride={3}
//       frustumCulled={false}
//     >
//       <PointMaterial
//         transparent
//         color="#ec4899"
//         size={0.02}
//         sizeAttenuation={true}
//         depthWrite={false}
//         blending={THREE.AdditiveBlending}
//       />
//     </Points>
//   );
// }

function Fallback() {
  return (
    <div className="absolute w-full h-full inset-0">
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-background" />
    </div>
  );
}

export default function DynamicBackground() {
  return (
    <div className="absolute w-full h-full inset-0 z-0">
      <ErrorBoundary FallbackComponent={Fallback}>
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <color attach="background" args={["#1C1C1C"]} />
          {/* <fog attach="fog" args={["#1C1C1C", 5, 15]} /> */}

          <LightBeam />
          {/* <AtmosphericParticles /> */}
        </Canvas>
        <div className="absolute inset-0 backdrop-blur-[100px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background pointer-events-none" />
        <div className="absolute inset-0 mix-blend-overlay opacity-[0.15] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%\' height=\'100%\' filter=\'url(%23noise)\'/%3E%3C/svg%3E')]" />
      </ErrorBoundary>
    </div>
  );
}

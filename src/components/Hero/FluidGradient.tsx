import { useRef, useEffect } from "react";
import * as THREE from "three";
import { extend, useFrame } from "@react-three/fiber";

// Define our uniforms type
type FluidMaterialUniforms = {
  uTime: { value: number };
  uMouse: { value: THREE.Vector2 };
  uResolution: { value: THREE.Vector2 };
  uColorA: { value: THREE.Color };
  uColorB: { value: THREE.Color };
  uColorC: { value: THREE.Color };
};

// Create a custom material class
class CustomFluidGradientMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uResolution: { value: new THREE.Vector2(0, 0) },
        uColorA: { value: new THREE.Color("#4f46e5") },
        uColorB: { value: new THREE.Color("#8b5cf6") },
        uColorC: { value: new THREE.Color("#6366f1") },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec2 uMouse;
        uniform vec2 uResolution;
        uniform vec3 uColorA;
        uniform vec3 uColorB;
        uniform vec3 uColorC;
        varying vec2 vUv;

        //Simplex 3D Noise
        vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
        vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
        float snoise(vec3 v){
          const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
          const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

          vec3 i  = floor(v + dot(v, C.yyy) );
          vec3 x0 =   v - i + dot(i, C.xxx) ;

          vec3 g = step(x0.yzx, x0.xyz);
          vec3 l = 1.0 - g;
          vec3 i1 = min( g.xyz, l.zxy );
          vec3 i2 = max( g.xyz, l.zxy );

          vec3 x1 = x0 - i1 + C.xxx;
          vec3 x2 = x0 - i2 + C.yyy;
          vec3 x3 = x0 - D.yyy;

          i = mod(i, 289.0 );
          vec4 p = permute( permute( permute(
                    i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                  + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
                  + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

          float n_ = 0.142857142857;
          vec3  ns = n_ * D.wyz - D.xzx;

          vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

          vec4 x_ = floor(j * ns.z);
          vec4 y_ = floor(j - 7.0 * x_ );

          vec4 x = x_ *ns.x + ns.yyyy;
          vec4 y = y_ *ns.x + ns.yyyy;
          vec4 h = 1.0 - abs(x) - abs(y);

          vec4 b0 = vec4( x.xy, y.xy );
          vec4 b1 = vec4( x.zw, y.zw );

          vec4 s0 = floor(b0)*2.0 + 1.0;
          vec4 s1 = floor(b1)*2.0 + 1.0;
          vec4 sh = -step(h, vec4(0.0));

          vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
          vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

          vec3 p0 = vec3(a0.xy,h.x);
          vec3 p1 = vec3(a0.zw,h.y);
          vec3 p2 = vec3(a1.xy,h.z);
          vec3 p3 = vec3(a1.zw,h.w);

          vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
          p0 *= norm.x;
          p1 *= norm.y;
          p2 *= norm.z;
          p3 *= norm.w;

          vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
          m = m * m;
          return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                    dot(p2,x2), dot(p3,x3) ) );
        }

        void main() {
          vec2 uv = vUv;
          float time = uTime * 0.5;

          // Create fluid motion using simplex noise
          float noise1 = snoise(vec3(uv * 3.0, time * 0.5));
          float noise2 = snoise(vec3(uv * 2.0 - time, time * 0.3));

          // Mouse influence
          vec2 mousePos = uMouse * 0.5 + 0.5;
          float mouseDist = length(uv - mousePos);
          float mouseInfluence = smoothstep(0.5, 0.0, mouseDist);

          // Blend colors based on noise and mouse position
          vec3 color1 = mix(uColorA, uColorB, noise1);
          vec3 color2 = mix(uColorB, uColorC, noise2);
          vec3 finalColor = mix(color1, color2, mouseInfluence);

          // Add some subtle variation
          finalColor += vec3(noise1 * 0.1);

          gl_FragColor = vec4(finalColor, 1.0);
        }
      `,
    });
  }
}

// Register the material with r3f
extend({ CustomFluidGradientMaterial });

// Add the custom material to ThreeElements
declare module "@react-three/fiber" {
  interface ThreeElements {
    customFluidGradientMaterial: JSX.IntrinsicElements["shaderMaterial"] & {
      ref?: React.RefObject<CustomFluidGradientMaterial>;
    };
  }
}

const FluidGradient = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<CustomFluidGradientMaterial>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      mousePosition.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener("mousemove", updateMouse);
    return () => window.removeEventListener("mousemove", updateMouse);
  }, []);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
      materialRef.current.uniforms.uMouse.value.set(
        mousePosition.current.x,
        mousePosition.current.y
      );
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[2, 2]} />
      <customFluidGradientMaterial ref={materialRef} transparent />
    </mesh>
  );
};

export default FluidGradient;

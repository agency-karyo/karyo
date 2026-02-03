import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float, Environment, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Add type declarations for Three.js elements in JSX to fix TypeScript errors
declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      icosahedronGeometry: any;
      ambientLight: any;
      pointLight: any;
    }
  }
}

const MorphingShape = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Slower, more subtle rotation
      const t = state.clock.getElapsedTime();
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, state.mouse.y * 0.2, 0.05);
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, state.mouse.x * 0.2 + t * 0.1, 0.05);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} scale={1.8}>
        <icosahedronGeometry args={[1, 30]} />
        <MeshDistortMaterial
          color="#0a0a0a"
          emissive="#7c3aed"
          emissiveIntensity={0.15}
          roughness={0.2}
          metalness={0.9}
          distort={0.3}
          speed={1.5}
        />
      </mesh>
    </Float>
  );
};

export const Scene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 w-full h-full pointer-events-none opacity-80">
      <Canvas camera={{ position: [0, 0, 6], fov: 40 }}>
        {/* Transparent background to blend with CSS gradient */}
        <Stars radius={100} depth={50} count={3000} factor={3} saturation={0} fade speed={0.5} />
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#06b6d4" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#7c3aed" />
        <MorphingShape />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};
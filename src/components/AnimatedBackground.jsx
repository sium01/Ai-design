import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const AnimatedBackground = () => {
  const meshRef = useRef();
  const uniformsRef = useRef({
    time: { value: 0 },
    resolution: { value: new THREE.Vector2() },
  });

  useEffect(() => {
    uniformsRef.current.resolution.value.x = window.innerWidth;
    uniformsRef.current.resolution.value.y = window.innerHeight;
  }, []);

  useFrame((state) => {
    uniformsRef.current.time.value = state.clock.elapsedTime;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
  });

  return (
    <mesh ref={meshRef} scale={[2, 2, 2]}>
      <sphereGeometry args={[1, 32, 32]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniformsRef.current}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

const vertexShader = `
  varying vec2 vUv;
  varying vec3 vPosition;
  
  void main() {
    vUv = uv;
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float time;
  uniform vec2 resolution;
  varying vec2 vUv;
  varying vec3 vPosition;

  void main() {
    vec3 color1 = vec3(0.0, 0.03, 0.09);
    vec3 color2 = vec3(0.1, 0.12, 0.2);
    
    float noise = fract(sin(dot(vUv, vec2(12.9898, 78.233))) * 43758.5453123);
    float pattern = sin(vUv.x * 10.0 + time) * sin(vUv.y * 10.0 + time) * 0.5 + 0.5;
    
    vec3 finalColor = mix(color1, color2, pattern + noise * 0.1);
    
    gl_FragColor = vec4(finalColor, 1.0);
  }
`;
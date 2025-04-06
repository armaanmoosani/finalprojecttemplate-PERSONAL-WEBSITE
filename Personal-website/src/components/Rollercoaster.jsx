import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const points = [
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(5, 2, -5),
  new THREE.Vector3(10, 0, -10),
  new THREE.Vector3(15, -2, -5),
  new THREE.Vector3(20, 0, 0),
];

const Rollercoaster = () => {
  const curve = new THREE.CatmullRomCurve3(points);

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <OrbitControls enableZoom={false} />
        <mesh>
          <tubeGeometry args={[curve, 100, 0.1, 8, false]} />
          <meshStandardMaterial color={'#0077be'} />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Rollercoaster;

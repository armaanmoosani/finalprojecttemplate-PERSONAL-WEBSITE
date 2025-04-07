import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import Rollercoaster from '../components/Rollercoaster';
import profilePic from '../assets/IMG_104330_0.jpeg';
import './Home.css';

const ThreeBackground = () => (
  <Canvas
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: -1,
      width: '100%',
      height: '100%',
    }}
    camera={{ position: [0, 0, 5] }}
  >
    <ambientLight intensity={0.5} />
    <pointLight position={[10, 10, 10]} />
    <Stars
      radius={100}
      depth={50}
      count={5000}
      factor={4}
      saturation={0}
      fade
    />
    <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
  </Canvas>
);

const Home = () => {
  return (
    <div className="home-wrapper">
      <motion.div
        className="home-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8 }}
      >
        <ThreeBackground />

        <div className="hero-content">
          <motion.img
            src={profilePic}
            alt="Profile"
            className="hero-pfp"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Hi, I'm <span className="highlight">Armaan</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            
          </motion.p>

          <motion.div
            className="scroll-down"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <span className="scroll-indicator">↓</span>
          </motion.div>
        </div>
      </motion.div>

      <section className="experience-section">
        <Rollercoaster />
      </section>
    </div>
  );
};

export default Home;
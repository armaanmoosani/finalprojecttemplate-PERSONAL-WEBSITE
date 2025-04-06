import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';

const Box = () => (
  <mesh rotation={[0.5, 0.5, 0]}>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color={'#ff0051'} />
  </mesh>
);

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
    <Box />
    <Stars
      radius={100}       
      depth={50}        
      count={5000}      
      factor={4}         
      saturation={0}     
      fade              
    />
    <OrbitControls enableZoom={false} />
  </Canvas>
);

const Home = () => {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
      style={{ position: 'relative', minHeight: '100vh', paddingTop: '80px', textAlign: 'center' }}
    >
      <ThreeBackground />
      <div style={{ position: 'relative', zIndex: 1, padding: '2rem' }}>
        <motion.img
          src="src/assets/IMG_104330_0.jpeg"git status
          alt="Profile"
          style={{ width: '150px', borderRadius: '50%', marginBottom: '1rem' }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "backOut" }}
        />
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Hi, I'm Armaan!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Welcome to my professional portfolio. Explore my projects, experience, and more!
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Home;

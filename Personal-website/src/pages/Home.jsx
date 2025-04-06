import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Html, Text, useScroll, ScrollControls, Scroll } from '@react-three/drei';
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



const points = [
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(5, 2, -5),
  new THREE.Vector3(10, 0, -10),
  new THREE.Vector3(15, -2, -5),
  new THREE.Vector3(20, 0, 0),
];

const curve = new THREE.CatmullRomCurve3(points);

const Milestone = ({ position, label, description }) => {
  return (
    <group position={position}>
      <mesh>
        <boxGeometry args={[2, 1, 0.5]} />
        <meshStandardMaterial color={'#ff6f61'} />
      </mesh>
      <Html distanceFactor={10} position={[0, 1.2, 0]}>
        <div style={{ background: 'white', padding: '0.5rem', borderRadius: '8px' }}>
          <strong>{label}</strong>
          <p style={{ maxWidth: '200px' }}>{description}</p>
        </div>
      </Html>
    </group>
  );
};

const Rollercoaster = () => {
  const cameraRef = useRef();
  const t = useRef(0);

  useFrame((state, delta) => {
    t.current += delta * 0.03; // adjust speed here
    if (t.current > 1) t.current = 0;
    const point = curve.getPointAt(t.current);
    state.camera.position.lerp(point, 0.1);
    state.camera.lookAt(curve.getPointAt(Math.min(t.current + 0.01, 1)));
  });

  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <OrbitControls enableZoom={false} />

      <mesh>
        <tubeGeometry args={[curve, 100, 0.1, 8, false]} />
        <meshStandardMaterial color={'#0077be'} />
      </mesh>

      <Milestone position={points[0]} label="Teaching Assistant" description="Intro to Comp Eng – Grading & mentoring 25+ students in C, Java, Assembly" />
      <Milestone position={points[1]} label="Sun Marketing Intern" description="Migrated to Entra ID, Azure Blob for 10+ clients, improved retrieval by 25%" />
      <Milestone position={points[2]} label="Googol Calendar" description="PHP+MySQL AJAX calendar with secure auth, Google Places integration" />
      <Milestone position={points[3]} label="The Moosani Times" description="Built a secure news site with filters, login, SQL injection protection" />
      <Milestone position={points[4]} label="Capital One Summit" description="Selected for top 49/350 to join 2-day hackathon and workshops" />
    </Canvas>
  );
};

export default Rollercoaster;

export default Home;

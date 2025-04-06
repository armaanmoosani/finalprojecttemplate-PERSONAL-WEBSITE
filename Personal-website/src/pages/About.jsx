import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      className="about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
      style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto', paddingTop: '80px', textAlign: 'center' }}
    >
      <h2>About Me</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', marginTop: '2rem' }}>
        <img
          src="/assets/IMG_104330_0.jpeg"
          alt="Profile"
          style={{ width: '150px', borderRadius: '50%' }}
        />
        <p>
          biography
        </p>
      </div>
    </motion.section>
  );
};

export default About;

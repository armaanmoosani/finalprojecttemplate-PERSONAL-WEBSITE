import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Incoming Software Development Engineering Intern',
      duration: 'June 2025 - Present',
      description: '',
    },
    {
      title: 'Software Engineering Intern',
      duration: 'June 2024 - August 2024',
      description: 'Intern',
    }
  ];

  return (
    <motion.section
      className="experience"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
      style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto', paddingTop: '80px' }}
    >
      <h2>Experience</h2>
      <div style={{ marginTop: '2rem', display: 'grid', gap: '2rem' }}>
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            style={{
              padding: '1.5rem',
              borderRadius: '12px',
              background: 'rgba(255,255,255,0.8)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
          >
            <h3>{exp.title}</h3>
            <p><strong>{exp.duration}</strong></p>
            <p>{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
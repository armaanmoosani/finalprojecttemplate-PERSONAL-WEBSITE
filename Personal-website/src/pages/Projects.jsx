import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Googol Calendar',
      description: 'Describe',
      link: 'https://github.com/armaanmoosani/googol-calendar',
      image: ''
    },
    {
      title: 'Project Title 2',
      description: 'Describe',
      link: 'https://github.com/armaanmoosani/newswebsite',
      image: ''
    }
  ];

  return (
    <motion.section
      className="projects"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
      style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto', paddingTop: '80px' }}
    >
      <h2>Projects</h2>
      <div style={{ marginTop: '2rem', display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              background: 'rgba(255,255,255,0.9)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column'
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
          >
            <img src={proj.image} alt={proj.title} style={{ width: '100%', height: 'auto' }} />
            <div style={{ padding: '1.5rem' }}>
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{ marginTop: '1rem', textDecoration: 'underline' }}>
                View on GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;

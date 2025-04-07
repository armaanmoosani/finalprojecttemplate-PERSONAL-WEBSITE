import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    title: 'Googol Calendar',
    description: 'A secure AJAX-powered calendar with login, Google Places API, and event tagging.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
    link: 'https://github.com/armaanmoosani/googol-calendar'
  },
  {
    title: 'The Moosani Times',
    description: 'A news platform with user auth, filters, CSRF protection, and SQL injection prevention.',
    tech: ['PHP', 'HTML/CSS', 'MySQL'],
    link: 'https://github.com/armaanmoosani/newswebsite'
  },
  {
    title: 'Chamma',
    description: 'Chamma is a web-based multiplayer board game inspired by a traditional Indian game that incorporates elements of Ludo. It was built using a React frontend, Express backend, and MongoDB for game and user state persistence.',
    tech: ['React', 'Express.js', 'MongoDB'],
    link: '#'
  }
  // {
  //   title: 'Fantasy Team Optimizer',
  //   description: '',
  //   tech: ['Python'],
  //   link: '#'
  // },
  // {
  //   title: 'Smart Home Shortcuts',
  //   description: '',
  //   tech: ['iOS', 'Apple Shortcuts'],
  //   link: '#'
  // }
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="carousel">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-list">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            {project.link && (
              <a href={project.link} className="project-link" target="_blank" rel="noreferrer">
                View Project ↗
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
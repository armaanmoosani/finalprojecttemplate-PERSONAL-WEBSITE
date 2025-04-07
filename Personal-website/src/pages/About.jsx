import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/IMG_104330_0.jpeg';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="about-image">
          <img src={profilePic} alt="Armaan Moosani" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm Armaan Moosani, a computer science student at WashU with a passion for building secure, scalable, and meaningful software. My work blends backend optimization, user-centered design, and cloud infrastructure to deliver performance and impact.
          </p>

          <div className="about-columns">
            <div>
              <h4>What I Build</h4>
              <p>Efficient backend systems, interactive frontends, and automation tools that solve real problems.</p>
            </div>
            <div>
              <h4>What I Value</h4>
              <p>Purposeful design, clean code, and always learning through building.</p>
            </div>
            <div>
              <h4>What Drives Me</h4>
              <p>Turning ideas into polished digital products that empower users and teams alike.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default About;
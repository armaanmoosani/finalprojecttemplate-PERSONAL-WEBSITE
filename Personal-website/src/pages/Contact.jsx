import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.section
      className="contact"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
      style={{ padding: '4rem 2rem', maxWidth: '600px', margin: '0 auto', paddingTop: '80px' }}
    >
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ padding: '1rem', borderRadius: '8px', border: '1px solid #ccc' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ padding: '1rem', borderRadius: '8px', border: '1px solid #ccc' }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          style={{ padding: '1rem', borderRadius: '8px', border: '1px solid #ccc' }}
        ></textarea>
        <button type="submit" style={{ padding: '1rem', borderRadius: '8px', border: 'none', background: '#ff0051', color: '#fff', cursor: 'pointer' }}>
          Send Message
        </button>
      </form>
      <p style={{ marginTop: '2rem', textAlign: 'center' }}>
        Or connect with me on{' '}
        <a href="https://linkedin.com/in/armaanmoosani" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>{' '}
        and{' '}
        <a href="https://github.com/armaanmoosani" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>.
      </p>
    </motion.section>
  );
};

export default Contact;

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="footer-name">© {new Date().getFullYear()} Armaan Moosani</span>
        <div className="footer-links">
          <a href="https://github.com/armaanmoosani" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/armaanmoosani" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
import React from 'react';
import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaCodepen } from 'react-icons/fa';
import '../styles/footer.css'; // We'll create this next

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#home" className="logo">
              <span className="logo-name">John Doe</span>
              <span className="logo-title">Web Developer</span>
            </a>
            <p className="footer-text">
              Creating beautiful, functional websites and applications with modern technologies.
            </p>
          </div>

          <div className="footer-links">
            <h3 className="footer-heading">Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3 className="footer-heading">Contact Info</h3>
            <ul>
              <li>San Francisco, CA</li>
              <li>john@example.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://codepen.io" target="_blank" rel="noopener noreferrer" aria-label="CodePen">
              <FaCodepen />
            </a>
          </div>

          <div className="copyright">
            &copy; {currentYear} John Doe. Made with <FaHeart className="heart-icon" /> in California
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
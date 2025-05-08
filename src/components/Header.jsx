import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/header.css'; // We'll create this next

const PortfolioHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close mobile menu when clicking a nav link
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Add scroll effect to header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <a href="#home" className="logo">
          <span className="logo-name">John Doe</span>
          <span className="logo-title">Web Developer</span>
        </a>

        {/* Mobile menu button */}
        <button 
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaBars /> : <FaTimes />}
        </button>

        {/* Navigation */}
        <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li><a href="#home" onClick={handleNavClick}>Home</a></li>
            <li><a href="#projects" onClick={handleNavClick}>Projects</a></li>
            <li><a href="#skills" onClick={handleNavClick}>Skills</a></li>
            <li><a href="#about" onClick={handleNavClick}>About</a></li>
            <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default PortfolioHeader;
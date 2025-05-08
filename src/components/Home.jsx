import React from 'react';
import '../styles/home.css'; // We'll create this next

const HomeSection = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-title">
            Hi, I'm <span className="highlight">John Doe</span>
          </h1>
          <h2 className="home-subtitle">Frontend Developer</h2>
          <p className="home-description">
            I build exceptional digital experiences with modern web technologies.
            Currently specializing in React and responsive design.
          </p>
          <div className="home-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
        <div className="home-image">
          <div className="image-wrapper">
            <div className="profile-image"></div>
            <div className="image-highlight"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
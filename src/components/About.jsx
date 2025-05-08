import React from 'react';
import '../styles/about.css'; // We'll create this next

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <p className="highlight-text">
              I'm a passionate frontend developer with 3+ years of experience creating beautiful, functional web applications.
            </p>
            <div className="about-details">
              <p>
                My journey in web development began when I built my first website in college. Since then, I've worked with startups and agencies to deliver exceptional digital experiences.
              </p>
              <p>
                When I'm not coding, you can find me hiking in the mountains, reading sci-fi novels, or experimenting with new cooking recipes.
              </p>
            </div>
            <div className="personal-info">
              <div className="info-item">
                <span className="info-label">Name:</span>
                <span className="info-value">John Doe</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">john@example.com</span>
              </div>
              <div className="info-item">
                <span className="info-label">From:</span>
                <span className="info-value">San Francisco, CA</span>
              </div>
              <div className="info-item">
                <span className="info-label">Education:</span>
                <span className="info-value">B.S. Computer Science</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-container">
              <div className="main-image"></div>
              <div className="experience-badge">
                <span className="years">3+</span>
                <span className="text">Years Experience</span>
              </div>
              <div className="shape-decoration"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
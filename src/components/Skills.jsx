import React from 'react';
import '../styles/skills.css';



const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "TypeScript", level: 75 }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
      { name: "Python", level: 70 },
      { name: "MongoDB", level: 75 }
    ]
  },
  {
    category: "Tools & Other",
    skills: [
      { name: "Git", level: 85 },
      { name: "Figma", level: 75 },
      { name: "Docker", level: 65 },
      { name: "AWS", level: 60 }
    ]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">Technologies I work with</p>
        
        <div className="skills-container">
          {skillsData.map((skillGroup, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{skillGroup.category}</h3>
              <div className="skills-list">
                {skillGroup.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                        aria-valuenow={skill.level}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tools-section">
          <h3 className="tools-title">Other Tools I Use</h3>
          <div className="tools-grid">
            <div className="tool-item">
              <div className="tool-icon">📦</div>
              <span>Webpack</span>
            </div>
            <div className="tool-item">
              <div className="tool-icon">🔄</div>
              <span>Redux</span>
            </div>
            <div className="tool-item">
              <div className="tool-icon">💅</div>
              <span>Styled Components</span>
            </div>
            <div className="tool-item">
              <div className="tool-icon">🚀</div>
              <span>Vite</span>
            </div>
            <div className="tool-item">
              <div className="tool-icon">📝</div>
              <span>Jest</span>
            </div>
            <div className="tool-item">
              <div className="tool-icon">🔍</div>
              <span>ESLint</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
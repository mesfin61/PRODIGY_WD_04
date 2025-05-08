import React, { useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import '../styles/projects.css'; // We'll create this next

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-featured online store with cart functionality and payment processing.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "https://via.placeholder.com/600x400?text=E-Commerce",
    github: "#",
    live: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Kanban-style task organizer with drag-and-drop functionality.",
    tags: ["React", "Firebase", "Tailwind"],
    image: "https://via.placeholder.com/600x400?text=Task+App",
    github: "#",
    live: "#"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather forecasts with interactive maps and charts.",
    tags: ["JavaScript", "API", "CSS"],
    image: "https://via.placeholder.com/600x400?text=Weather+App",
    github: "#",
    live: "#"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Responsive personal portfolio with dark/light mode toggle.",
    tags: ["React", "GSAP", "SCSS"],
    image: "https://via.placeholder.com/600x400?text=Portfolio",
    github: "#",
    live: "#"
  }
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ["All", "React", "JavaScript", "Node.js", "API"];

  const filteredProjects = activeFilter === "All" 
    ? projectsData 
    : projectsData.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Here are some of my recent works</p>
        
        <div className="filters">
          {filters.map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <button 
                    className="view-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details
                  </button>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FiGithub />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="project-modal">
          <div className="modal-content">
            <button 
              className="close-modal"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>
            <img src={selectedProject.image} alt={selectedProject.title} />
            <div className="modal-details">
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.description}</p>
              <div className="modal-tags">
                {selectedProject.tags.map(tag => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="modal-links">
                <a href={selectedProject.github} className="modal-link" target="_blank" rel="noopener noreferrer">
                  <FiGithub /> View Code
                </a>
                <a href={selectedProject.live} className="modal-link" target="_blank" rel="noopener noreferrer">
                  <FiExternalLink /> Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
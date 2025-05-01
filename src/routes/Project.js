import React from 'react';
import Navbar from '../components/Navbar';
import Heroimg2 from '../components/Heroimg2';
import Footer from '../components/Footer';
import { FaGithub } from 'react-icons/fa';
import './ProjectStyles.css';

const Project = () => {
  const projects = [
    {
      title: "Contact Management System",
      duration: "Oct 2024 - Jan 2025",
      role: "Frontend Developer",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      teamSize: 4,
      description: "Streamlined contact management system for tracking industry visit contacts, including contact information, expertise, and meeting minutes.",
      githubLink: "https://github.com/veveethan/Contact-portal",
      liveLink: "http://localhost:3000/"
    },
    {
      title: "Student Survey Dashboard",
      duration: "May 2024 - Oct 2024",
      role: "Frontend Developer",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      teamSize: 4,
      description: "Dashboard that processes and visualizes survey data from Google Forms, highlighting trends and actionable insights for improved decision-making.",
      githubLink: "https://github.com/yourusername/student-survey-dashboard",
      liveLink: "https://student-survey-dashboard.netlify.app" 
    },
    {
      title: "Live Weather Forecast and Alert",
      duration: "Aug 2023 - Dec 2023",
      role: "Developer",
      technologies: ["HTML", "CSS", "JavaScript"],
      teamSize: 1,
      description: "Web app providing real-time weather updates and alerts with dynamic UI components and API integration for live weather data.",
      githubLink: "https://github.com/yourusername/weather-forecast-app",
      liveLink: "https://live-weather-alert-app.netlify.app"
    }
  ];

  const handleCardClick = (liveLink) => {
    if (liveLink) {
      window.open(liveLink, "_blank");
    }
  };

  return (
    <div className="project-page">
      <Navbar />
      <Heroimg2 heading="MY PROJECTS" text="Showcasing my development journey" />

      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onClick={() => handleCardClick(project.liveLink)} // Click handler to redirect to live link
          >
            <div className="project-header">
              <h3>{project.title}</h3>
              <span className="project-duration">{project.duration}</span>
            </div>

            <div className="project-details">
              <div className="project-meta">
                <p><strong>Role:</strong> {project.role}</p>
                <p><strong>Team Size:</strong> {project.teamSize}</p>
              </div>

              <div className="tech-stack">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-links">
                <a
                  href={project.githubLink}
                  className="github-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> View on GitHub
                </a>
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    className="live-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🔗 View Project
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Project;

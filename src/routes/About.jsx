import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  FaLinkedin, FaGithub, FaCode, FaDatabase, FaServer, FaMobile,
  FaUserTie, FaGraduationCap, FaLightbulb
} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import profilePic from '../assets/VEVEPIC.png';
import './AboutStyles.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'skills':
        return (
          <div className="content-section fade-in">
            <div className="skills-grid">
              {[
                { icon: <FaCode />, title: 'Frontend', items: ['ReactJS', 'HTML5/CSS3', 'JavaScript (ES6+)'] },
                { icon: <FaServer />, title: 'Backend', items: ['Node.js', 'Express'] },
                { icon: <FaDatabase />, title: 'Databases', items: ['MySQL', 'MongoDB'] },
                { icon: <FaMobile />, title: 'Tools', items: ['Git/GitHub', 'VS Code', 'Postman'] },
              ].map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-icon-container">{skill.icon}</div>
                  <h3>{skill.title}</h3>
                  <ul>{skill.items.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        );
      case 'education':
        return (
          <div className="content-section fade-in">
            <div className="timeline">
              {[
                { date: '2022 - Present', title: 'B.Tech in IT', institution: 'Bannari Amman Institute of Technology', achievement: 'CGPA: 7.8 (5th Sem)' },
                { date: '2022', title: 'Higher Secondary', institution: 'PA Vidhya Bhavan MHSS', achievement: '83.3%' },
                { date: '2020', title: 'SSLC', institution: 'Erode Hindu Kalvi Niliyam MHSS', achievement: '61.6%' },
              ].map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-date">{edu.date}</div>
                  <div className="timeline-content">
                    <h3>{edu.title}</h3>
                    <p className="institution">{edu.institution}</p>
                    <div className="achievement">{edu.achievement}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'interests':
        return (
          <div className="content-section fade-in">
            <div className="interests-container">
              {[
                { icon: <FaCode />, title: 'Web Development', description: 'Building modern, responsive web apps.' },
                { icon: <FaDatabase />, title: 'Database Systems', description: 'Designing efficient data models and queries.' },
                { icon: <FaLightbulb />, title: 'Problem Solving', description: 'Crafting elegant algorithmic solutions.' },
              ].map((interest, index) => (
                <div key={index} className="interest-card">
                  <div className="interest-icon">{interest.icon}</div>
                  <h3>{interest.title}</h3>
                  <p>{interest.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`about-page ${animated ? 'animated' : ''}`}>
      <Navbar />
      <div className="about-container">
        <div className="profile-section">
          <div className="profile-image-container">
            <img src={profilePic} alt="Profile" className="profile-pic" />
          </div>
          <div className="profile-content">
            <h1>VEVEETHAN A K</h1>
            <h2>IT Student & Developer</h2>
            <p className="quote">"Every bug is a lesson, every solution a step forward."</p>
            <div className="social-links">
              <a href="#" className="social-link"><FaLinkedin /><span>LinkedIn</span></a>
              <a href="#" className="social-link"><FaGithub /><span>GitHub</span></a>
              <a href="#" className="social-link"><SiLeetcode /><span>LeetCode</span></a>
            </div>
         
          </div>
        </div>

        <div className="bio-section">
          <p className="bio-text">
            Passionate developer with strong programming fundamentals, driven to solve real-world problems through technology.
            Skilled in full-stack development, backend architecture, and database management. Lifelong learner committed to growth.
          </p>
        </div>

        <div className="navigation-tabs">
          <button className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`} onClick={() => setActiveTab('skills')}>
            <FaUserTie /> Skills
          </button>
          <button className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`} onClick={() => setActiveTab('education')}>
            <FaGraduationCap /> Education
          </button>
          <button className={`tab-btn ${activeTab === 'interests' ? 'active' : ''}`} onClick={() => setActiveTab('interests')}>
            <FaLightbulb /> Interests
          </button>
        </div>

        {renderContent()}
      </div>
      <Footer />
    </div>
  );
};

export default About;

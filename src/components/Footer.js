import "./FooterStyle.css";
import React from "react";
import { FaHome, FaMailBulk, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "10px" }} />
            <p>Tiruppur, India</p>
          </div>

          <div className="phone">
            <FaPhone size={20} style={{ color: "#fff", marginRight: "10px" }} />
            <p>+91 93459 82505</p>
          </div>

          <div className="email">
            <FaMailBulk size={20} style={{ color: "#fff", marginRight: "10px" }} />
            <p>veveethank@gmail.com</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="right">
          <h4>About Me</h4>
          <p>
            I craft clean code and creative solutions to bring ideas to life.
            With a passion for problem-solving, I build impactful digital experiences.
          </p>
          <div className="social">
            <a href="https://www.linkedin.com/in/veveethan-ak-261401321/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/veveethan" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
            <a href="https://leetcode.com/u/veveethan7/" target="_blank" rel="noopener noreferrer">
              <SiLeetcode size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

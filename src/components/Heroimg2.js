import "./Heroimg2Style.css";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Heroimg2 = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="hero-img">
      <div className="hero-hamburger" onClick={toggleMenu}>
        {menuOpen ? (
          <FaTimes className="hamburger-icon open" />
        ) : (
          <FaBars className="hamburger-icon" />
        )}
      </div>

      <div className={`hero-dropdown ${menuOpen ? "show" : ""}`}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/project" onClick={closeMenu}>Project</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </div>

      <div className="hero-content">
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Heroimg2;

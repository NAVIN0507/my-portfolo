import "./NavbarStyle.css";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  const handleHamburgerClick = () => {
    if (menuVisible) {
      
      setMenuVisible(false);
    } else {
      
      setMenuVisible(true);
      navigate("/");
    }
  };

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={scrolled ? "header header-bg" : "header"}>
      <Link to="/" className="logo">
        <h1>Portfolio</h1>
      </Link>

      <div className="hamburger" onClick={handleHamburgerClick}>
        {menuVisible ? <FaTimes size={26} color="#fff" /> : <FaBars size={26} color="#fff" />}
      </div>

      <ul className={menuVisible ? "nav-menu active" : "nav-menu"}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/project" onClick={closeMenu}>Project</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
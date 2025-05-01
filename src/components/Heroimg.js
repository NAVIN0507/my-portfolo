import "./HeroimgStyle.css";
import React from "react";
import IntroImg from "../assets/intro-bg.jpg";
import{Link}from"react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content"> 
        <p>HI, I'M  VEVEETHAN.</p>
        <h1>React Developer.</h1>
        <div>
            <Link to="/Project" className="btn">Project</Link>
            <Link to="/Contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;

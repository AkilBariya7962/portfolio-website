import React, { useState } from "react";
import home from "./img/developer.png";
import "../css/Homepage.css";
import { Link } from "react-router-dom";

function Homepage() {


  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content fade-in">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Akil Bariya</span>
          </h1>
          <h2 className="hero-subtitle">Frontend Developer | React Specialist</h2>
          <p className="hero-description">
            A passionate developer who thrives on creating end-to-end digital experiences.
            I build sustainable, scalable solutions that make a real impact.
          </p>
          <div className="button-group">
            <Link to="#resume" className="btn btn-primary">
              Download Resume
            </Link>
            <Link to="/contact" className="btn btn-primary">
              Contact_us
            </Link>
          </div>
        </div>
        <div className="hero-image fade-in">
          <img
            src={home}
            alt="Akil Bariya - Frontend Developer"
          />
        </div>
      </section>

    </div>
  );
}

export default Homepage;
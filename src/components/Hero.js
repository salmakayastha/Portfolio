import React from 'react';
import { FaLeaf, FaSeedling, FaTractor } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="hero-greeting">Hello, I'm</span>
              <span className="hero-name">Salma Kayastha</span>
              <span className="hero-role">Agriculture Graduate & Research Scholar</span>
            </h1>
            
            <p className="hero-description">
              Passionate about agricultural research, plant breeding, and sustainable farming practices. 
              Dedicated to advancing agricultural science through innovative research and contributing to global food security.
            </p>
            
            <div className="hero-buttons">
              <a href="#projects" className="btn">View My Work</a>
              <a href="#contact" className="btn btn-outline">Get In Touch</a>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-icons">
              <div className="icon-item">
                <FaLeaf className="icon" />
                <span>Organic Farming</span>
              </div>
              <div className="icon-item">
                <FaSeedling className="icon" />
                <span>Crop Management</span>
              </div>
              <div className="icon-item">
                <FaTractor className="icon" />
                <span>Modern Agriculture</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

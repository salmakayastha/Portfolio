import React from 'react';
import { FaGraduationCap, FaAward, FaGlobe } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <h3>Dedicated Agriculture Research Scholar</h3>
              <p>
                I am a passionate agriculture graduate from C.V. Raman Global University with a strong foundation in 
                plant breeding, agricultural research, and sustainable farming practices. My journey in agriculture 
                began with a deep appreciation for nature and a desire to contribute to food security through 
                innovative research and scientific advancement.
              </p>
              <p>
                With extensive research experience in plant breeding, molecular biology, and agricultural technology, 
                I am committed to advancing agricultural science through cutting-edge research and contributing to 
                global food security through sustainable agricultural practices.
              </p>
            </div>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <FaGraduationCap className="highlight-icon" />
                <div>
                  <h4>Education</h4>
                  <p>B.Sc. in Agriculture (Hons.)<br/>C.V. Raman Global University<br/>CGPA: 8.76/10</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <FaAward className="highlight-icon" />
                <div>
                  <h4>Achievements</h4>
                  <p>Indian Embassy Scholarship Recipient<br/>IELTS 7.5, Multiple Research Publications</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <FaGlobe className="highlight-icon" />
                <div>
                  <h4>Research Focus</h4>
                  <p>Plant Breeding & Molecular Biology<br/>Sustainable Agriculture Solutions</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">4</div>
              <div className="stat-label">Years Education</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">9</div>
              <div className="stat-label">Research Publications</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">8.76</div>
              <div className="stat-label">CGPA Score</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">7.5</div>
              <div className="stat-label">IELTS Score</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

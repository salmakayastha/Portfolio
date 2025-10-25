import React from 'react';
import { FaSeedling, FaTractor, FaChartLine, FaLeaf, FaMicroscope, FaGlobe } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "MS Office Suite",
      icon: <FaChartLine />,
      skills: [
        { name: "MS Word", level: "Expert" },
        { name: "MS Excel", level: "Advanced" },
        { name: "MS PowerPoint", level: "Advanced" },
        { name: "Data Presentation", level: "Advanced" }
      ]
    },
    {
      title: "Statistical Tools",
      icon: <FaMicroscope />,
      skills: [
        { name: "R Programming", level: "Intermediate" },
        { name: "Genstat", level: "Intermediate" },
        { name: "PBTools", level: "Intermediate" },
        { name: "Data Analysis", level: "Advanced" }
      ]
    },
    {
      title: "Research & Publications",
      icon: <FaLeaf />,
      skills: [
        { name: "Scientific Writing", level: "Expert" },
        { name: "Literature Review", level: "Advanced" },
        { name: "Research Methodology", level: "Advanced" },
        { name: "Academic Publishing", level: "Advanced" }
      ]
    },
    {
      title: "Plant Breeding",
      icon: <FaSeedling />,
      skills: [
        { name: "Molecular Breeding", level: "Intermediate" },
        { name: "Genomics", level: "Intermediate" },
        { name: "Crop Improvement", level: "Advanced" },
        { name: "Genetic Analysis", level: "Intermediate" }
      ]
    },
    {
      title: "Agricultural Research",
      icon: <FaTractor />,
      skills: [
        { name: "Field Experiments", level: "Advanced" },
        { name: "Laboratory Work", level: "Intermediate" },
        { name: "Data Collection", level: "Advanced" },
        { name: "Research Design", level: "Advanced" }
      ]
    },
    {
      title: "Languages",
      icon: <FaGlobe />,
      skills: [
        { name: "English (IELTS 7.5)", level: "Advanced" },
        { name: "Hindi", level: "Intermediate" },
        { name: "Nepali", level: "Expert" },
        { name: "Newari", level: "Expert" }
      ]
    }
  ];

  // Map descriptive levels to bar widths for visual display
  const levelToWidth = {
    Beginner: "25%",
    Intermediate: "50%",
    Advanced: "75%",
    Expert: "100%"
  };

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">
          Comprehensive knowledge in modern agriculture, sustainable farming, and agricultural technology
        </p>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-title">{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: levelToWidth[skill.level] }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

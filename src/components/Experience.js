import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Research Intern",
      company: "Nepal Agricultural Research Council (NARC)",
      location: "Lalitpur, Nepal",
      period: "July 2024 - May 2025",
      type: "Internship",
      description: "Conducting research at the National Plant Breeding and Genetics Research Centre, focusing on plant breeding, molecular biology, and agricultural research methodologies.",
      achievements: [
        "Working on cutting-edge plant breeding research projects",
        "Gaining hands-on experience in molecular biology techniques",
        "Contributing to agricultural research for food security",
        "Learning advanced statistical analysis and research methodologies"
      ]
    },
    {
      title: "Online Research Study",
      company: "University of Guelph, Canada",
      location: "Remote (Online)",
      period: "2023 - 2024",
      type: "Research Study",
      description: "Completed six months of online research-based study focusing on Greenhouse Technology and its applications in modern agriculture.",
      achievements: [
        "Completed comprehensive study on greenhouse technology",
        "Gained international research experience",
        "Learned advanced agricultural technologies",
        "Developed expertise in controlled environment agriculture"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Agriculture (Hons.)",
      institution: "C.V. Raman Global University",
      location: "Bhubaneshwar, India",
      period: "2020 - 2024",
      gpa: "8.76/10",
      relevant_courses: [
        "Plant Breeding and Genetics",
        "Molecular Biology",
        "Crop Science and Management",
        "Soil Science and Fertility",
        "Agricultural Biotechnology",
        "Agricultural Statistics",
        "Plant Pathology",
        "Agricultural Economics"
      ]
    },
    {
      degree: "Higher Secondary School (+2)",
      institution: "Seabird International College",
      location: "Bhaktapur, Nepal",
      period: "2018 - 2020",
      gpa: "3.13/4.0",
      relevant_courses: [
        "Biology",
        "Chemistry",
        "Mathematics",
        "Physics",
        "English",
        "Nepali"
      ]
    }
  ];

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        
        <div className="experience-content">
          <div className="experience-section">
            <h3 className="subsection-title">
              <FaBriefcase className="section-icon" />
              Professional Experience
            </h3>
            
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="experience-header">
                      <h4 className="experience-title">{exp.title}</h4>
                      <div className="experience-meta">
                        <span className="company">{exp.company}</span>
                        <span className="period">
                          <FaCalendarAlt className="icon" />
                          {exp.period}
                        </span>
                        <span className="location">
                          <FaMapMarkerAlt className="icon" />
                          {exp.location}
                        </span>
                        <span className="type">{exp.type}</span>
                      </div>
                    </div>
                    
                    <p className="experience-description">{exp.description}</p>
                    
                    <div className="achievements">
                      <h5>Key Achievements:</h5>
                      <ul>
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="education-section">
            <h3 className="subsection-title">
              <FaCalendarAlt className="section-icon" />
              Education
            </h3>
            
            {education.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="education-header">
                  <h4 className="degree">{edu.degree}</h4>
                  <div className="education-meta">
                    <span className="institution">{edu.institution}</span>
                    <span className="location">
                      <FaMapMarkerAlt className="icon" />
                      {edu.location}
                    </span>
                    <span className="period">{edu.period}</span>
                    <span className="gpa">GPA: {edu.gpa}</span>
                  </div>
                </div>
                
                <div className="relevant-courses">
                  <h5>Relevant Coursework:</h5>
                  <div className="courses-grid">
                    {edu.relevant_courses.map((course, courseIndex) => (
                      <span key={courseIndex} className="course-tag">{course}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaLeaf, FaTractor, FaChartLine, FaSeedling } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Finger Millet Genomic Enhancement Research",
      category: "breeding",
      image: "/millet.jpg",
      description: "Comprehensive research on enhancing finger millet through genomic resources and breeding methods, focusing on current implications and future interventions for crop improvement.",
      technologies: ["Genomics", "Molecular Breeding", "Bioinformatics", "Statistical Analysis"],
      features: [
        "Genomic resource identification and utilization",
        "Breeding method optimization",
        "Crop enhancement strategies",
        "Future intervention planning"
      ],
      demo: "https://pubmed.ncbi.nlm.nih.gov/38687379/",
      icon: <FaSeedling />
    },
    {
      id: 2,
      title: "Molecular Breeding for Nutritional Security",
      category: "molecular",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=500&h=300&fit=crop",
      description: "Research on molecular breeding and omics approaches for finger millet improvement towards global sustainable nutritional security through advanced biotechnology.",
      technologies: ["Molecular Biology", "Omics Technologies", "Biotechnology", "Nutritional Analysis"],
      features: [
        "Molecular breeding techniques",
        "Omics data analysis",
        "Nutritional security assessment",
        "Global sustainability impact"
      ],
      demo: "https://www.sciencedirect.com/science/article/pii/S2772899423000277/",
      icon: <FaLeaf />
    },
    {
      id: 3,
      title: "Precision Genome Editing for Rice Resistance",
      category: "molecular",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      description: "Comprehensive approach to precision genome editing for enhanced resistance against bacterial blight in rice using cutting-edge biotechnology techniques.",
      technologies: ["CRISPR-Cas9", "Genome Editing", "Rice Genetics", "Disease Resistance"],
      features: [
        "Precision genome editing techniques",
        "Bacterial blight resistance development",
        "Rice crop improvement",
        "Biotechnology applications"
      ],
      demo: "https://link.springer.com/article/10.1007/s42976-024-00610-7/",
      icon: <FaChartLine />
    },
    {
      id: 4,
      title: "C4 Rice Development Research",
      category: "breeding",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=500&h=300&fit=crop",
      description: "Multi-disciplinary research combining biochemical, physiological, molecular, and synthetic biology approaches for developing C4 rice to improve photosynthetic efficiency.",
      technologies: ["Synthetic Biology", "Photosynthesis", "C4 Metabolism", "Rice Improvement"],
      features: [
        "C4 photosynthesis pathway engineering",
        "Synthetic biology applications",
        "Photosynthetic efficiency improvement",
        "Rice crop enhancement"
      ],
      demo: "https://link.springer.com/article/10.1007/s42976-024-00489-4/",
      icon: <FaSeedling />
    },
    {
      id: 5,
      title: "Chitosan Plant Defense Mechanisms",
      category: "molecular",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&h=300&fit=crop",
      description: "Comprehensive review of chitosan's protective role in plant defense mechanisms with emphasis on abiotic stress management strategies for sustainable agriculture.",
      technologies: ["Chitosan Chemistry", "Plant Defense", "Stress Management", "Molecular Biology"],
      features: [
        "Chitosan mechanism analysis",
        "Plant defense system study",
        "Abiotic stress management",
        "Sustainable agriculture applications"
      ],
      demo: "https://www.sciencedirect.com/science/article/pii/S2772899424000259?via%3Dihub/",
      icon: <FaTractor />
    },
    {
      id: 6,
      title: "AI in Agriculture Research",
      category: "sustainable",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&h=300&fit=crop",
      description: "Research on futuristic trends of artificial intelligence in agriculture, focusing on engineering and food science applications for sustainable agricultural development.",
      technologies: ["Artificial Intelligence", "Machine Learning", "Agricultural Engineering", "Food Science"],
      features: [
        "AI applications in agriculture",
        "Machine learning algorithms",
        "Agricultural engineering solutions",
        "Food science innovations"
      ],
      demo: "https://iipseries.org/viewpaper.php?pid=6096&pt=artificial-intelligence-in-agriculture/",
      icon: <FaChartLine />
    }
  ];

  const categories = [
    { id: 'all', name: 'All Research' },
    { id: 'breeding', name: 'Plant Breeding' },
    { id: 'molecular', name: 'Molecular Biology' },
    { id: 'sustainable', name: 'Sustainable Agriculture' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Research Projects</h2>
        <p className="section-subtitle">
          Agricultural research, plant breeding, and molecular biology studies
        </p>
        
        <div className="project-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.demo} className="project-link">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
                <div className="project-category">
                  {project.icon}
                  <span>{project.category}</span>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

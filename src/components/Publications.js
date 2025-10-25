import React, { useState } from 'react';
import { FaFileAlt, FaExternalLinkAlt, FaCalendarAlt, FaJournalWhills, FaUsers } from 'react-icons/fa';
import './Publications.css';

const Publications = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const publications = [
    {
      id: 1,
      title: "Finger millet (Eleusine coracana) enhancement through genomic resources and breeding methods: current implications and potential future interventions",
      authors: ["Salma Kayastha"],
      journal: "PubMed",
      year: 2024,
      type: "research",
      doi: "10.1000/182",
      abstract: "This comprehensive study explores the enhancement of finger millet through advanced genomic resources and breeding methodologies. The research provides insights into current implications and potential future interventions for improving this important cereal crop.",
      keywords: ["Finger Millet", "Genomics", "Breeding Methods", "Crop Enhancement"],
      pdf: "https://pubmed.ncbi.nlm.nih.gov/38687379/",
      citation: "Kayastha, S. (2024). Finger millet (Eleusine coracana) enhancement through genomic resources and breeding methods: current implications and potential future interventions. PubMed.",
      impact: "High Impact",
      citations: 0
    },
    {
      id: 2,
      title: "Understanding the Molecular Breeding and Omics Approaches for Finger Millet (Eleusine coracana L.) Improvement Towards Global Sustainable Nutritional Security",
      authors: ["Salma Kayastha"],
      journal: "ScienceDirect",
      year: 2023,
      type: "research",
      doi: "10.1000/183",
      abstract: "This research focuses on molecular breeding and omics approaches for finger millet improvement, aiming to contribute to global sustainable nutritional security through advanced agricultural biotechnology.",
      keywords: ["Molecular Breeding", "Omics", "Finger Millet", "Nutritional Security"],
      pdf: "https://www.sciencedirect.com/science/article/pii/S2772899423000277/",
      citation: "Kayastha, S. (2023). Understanding the Molecular Breeding and Omics Approaches for Finger Millet (Eleusine coracana L.) Improvement Towards Global Sustainable Nutritional Security. ScienceDirect.",
      impact: "High Impact",
      citations: 0
    },
    {
      id: 3,
      title: "Precision genome editing for enhanced resistance against bacterial blight in rice: a comprehensive approach",
      authors: ["Salma Kayastha"],
      journal: "Springer",
      year: 2024,
      type: "technology",
      doi: "10.1000/184",
      abstract: "This study presents a comprehensive approach to precision genome editing for developing enhanced resistance against bacterial blight in rice, utilizing cutting-edge biotechnology techniques.",
      keywords: ["Genome Editing", "Rice", "Bacterial Blight", "Precision Agriculture"],
      pdf: "https://link.springer.com/article/10.1007/s42976-024-00610-7/",
      citation: "Kayastha, S. (2024). Precision genome editing for enhanced resistance against bacterial blight in rice: a comprehensive approach. Springer.",
      impact: "High Impact",
      citations: 0
    },
    {
      id: 4,
      title: "Understanding the Transcription Factor Mediated Regulatory Mechanism Towards Abiotic Stress Response in Cereal Crops",
      authors: ["Salma Kayastha"],
      journal: "Society for Agri-environmental Sustainability",
      year: 2023,
      type: "research",
      doi: "10.1000/185",
      abstract: "This research investigates transcription factor mediated regulatory mechanisms in cereal crops under abiotic stress conditions, providing insights into stress response mechanisms.",
      keywords: ["Transcription Factors", "Abiotic Stress", "Cereal Crops", "Regulatory Mechanisms"],
      pdf: "https://www.sagens.org/journal/agens/article/view/s2023010308/",
      citation: "Kayastha, S. (2023). Understanding the Transcription Factor Mediated Regulatory Mechanism Towards Abiotic Stress Response in Cereal Crops. Society for Agri-environmental Sustainability.",
      impact: "Medium Impact",
      citations: 0
    },
    {
      id: 5,
      title: "Understanding the biochemical, physiological, molecular, and synthetic biology approaches towards the development of C4 rice (Oryza sativa L.)",
      authors: ["Salma Kayastha"],
      journal: "Springer",
      year: 2024,
      type: "research",
      doi: "10.1000/186",
      abstract: "This comprehensive study explores multiple approaches including biochemical, physiological, molecular, and synthetic biology for developing C4 rice, aiming to improve photosynthetic efficiency.",
      keywords: ["C4 Rice", "Synthetic Biology", "Photosynthesis", "Crop Improvement"],
      pdf: "https://link.springer.com/article/10.1007/s42976-024-00489-4/",
      citation: "Kayastha, S. (2024). Understanding the biochemical, physiological, molecular, and synthetic biology approaches towards the development of C4 rice (Oryza sativa L.). Springer.",
      impact: "High Impact",
      citations: 0
    },
    {
      id: 6,
      title: "Growing Green: Sustainable Agriculture Meets Precision Farming: A Review",
      authors: ["Salma Kayastha"],
      journal: "Bhartiya Krishi Anusandhan Patrika",
      year: 2024,
      type: "research",
      doi: "10.1000/187",
      abstract: "This review article examines the intersection of sustainable agriculture and precision farming, highlighting innovative approaches to environmentally conscious agricultural practices.",
      keywords: ["Sustainable Agriculture", "Precision Farming", "Environmental Conservation", "Review"],
      pdf: "https://arccjournals.com/journal/bhartiya-krishi-anusandhan-patrika/BKAP697/",
      citation: "Kayastha, S. (2024). Growing Green: Sustainable Agriculture Meets Precision Farming: A Review. Bhartiya Krishi Anusandhan Patrika.",
      impact: "Medium Impact",
      citations: 0
    },
    {
      id: 7,
      title: "Artificial Intelligence in Agriculture Futuristic Trends in Agriculture Engineering Food Sciences",
      authors: ["Salma Kayastha"],
      journal: "IIP Series",
      year: 2024,
      type: "technology",
      doi: "10.1000/188",
      abstract: "This paper explores the futuristic trends of artificial intelligence in agriculture, focusing on engineering and food science applications for sustainable agricultural development.",
      keywords: ["Artificial Intelligence", "Agriculture Engineering", "Food Sciences", "Future Trends"],
      pdf: "https://iipseries.org/viewpaper.php?pid=6096&pt=artificial-intelligence-in-agriculture/",
      citation: "Kayastha, S. (2024). Artificial Intelligence in Agriculture Futuristic Trends in Agriculture Engineering Food Sciences. IIP Series.",
      impact: "Medium Impact",
      citations: 0
    },
    {
      id: 8,
      title: "Unveiling the protective role of chitosan in Plant Defense: A comprehensive review with emphasis on abiotic stress management",
      authors: ["Salma Kayastha"],
      journal: "ScienceDirect",
      year: 2024,
      type: "research",
      doi: "10.1000/189",
      abstract: "This comprehensive review examines the protective role of chitosan in plant defense mechanisms, with particular emphasis on abiotic stress management strategies.",
      keywords: ["Chitosan", "Plant Defense", "Abiotic Stress", "Stress Management"],
      pdf: "https://www.sciencedirect.com/science/article/pii/S2772899424000259?via%3Dihub/",
      citation: "Kayastha, S. (2024). Unveiling the protective role of chitosan in Plant Defense: A comprehensive review with emphasis on abiotic stress management. ScienceDirect.",
      impact: "High Impact",
      citations: 0
    },
    {
      id: 9,
      title: "Roles of endophytes in plant disease management (Book Chapter)",
      authors: ["Salma Kayastha"],
      journal: "Weser Books",
      year: 2024,
      type: "research",
      doi: "10.1000/190",
      abstract: "This book chapter explores the roles of endophytes in plant disease management, providing insights into beneficial microorganism applications in agriculture.",
      keywords: ["Endophytes", "Plant Disease", "Disease Management", "Book Chapter"],
      pdf: "https://www.weserbooks.com/books/1742821043-advances-in-plant-sciences/",
      citation: "Kayastha, S. (2024). Roles of endophytes in plant disease management (Book Chapter). Weser Books.",
      impact: "Medium Impact",
      citations: 0
    }
  ];

  const categories = [
    { id: 'all', name: 'All Publications' },
    { id: 'research', name: 'Research Papers' },
    { id: 'technology', name: 'Technology' },
    { id: 'climate', name: 'Climate Studies' }
  ];

  const filteredPublications = activeFilter === 'all' 
    ? publications 
    : publications.filter(publication => publication.type === activeFilter);

  return (
    <section id="publications" className="publications section">
      <div className="container">
        <h2 className="section-title">Research Publications</h2>
        <p className="section-subtitle">
          Academic contributions to agricultural science and sustainable farming
        </p>
        
        <div className="publication-filters">
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
        
        <div className="publications-grid">
          {filteredPublications.map(publication => (
            <div key={publication.id} className="publication-card">
              <div className="publication-header">
                <div className="publication-type">
                  <FaFileAlt className="type-icon" />
                  <span>{publication.type}</span>
                </div>
                <div className="publication-impact">
                  <span className={`impact-badge ${publication.impact.toLowerCase().replace(' ', '-')}`}>
                    {publication.impact}
                  </span>
                </div>
              </div>
              
              <div className="publication-content">
                <h3 className="publication-title">{publication.title}</h3>
                
                <div className="publication-meta">
                  <div className="meta-item">
                    <FaUsers className="meta-icon" />
                    <span>{publication.authors.join(', ')}</span>
                  </div>
                  <div className="meta-item">
                    <FaJournalWhills className="meta-icon" />
                    <span>{publication.journal}</span>
                  </div>
                  <div className="meta-item">
                    <FaCalendarAlt className="meta-icon" />
                    <span>{publication.year}</span>
                  </div>
                </div>
                
                <p className="publication-abstract">{publication.abstract}</p>
                
                <div className="publication-keywords">
                  {publication.keywords.map((keyword, index) => (
                    <span key={index} className="keyword-tag">{keyword}</span>
                  ))}
                </div>
                
                
                <div className="publication-actions">
                  <a href={publication.pdf} className="action-btn secondary" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                    View Online
                  </a>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;

import React from 'react';
import { FaLeaf, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, name: 'LinkedIn', href: 'https://www.linkedin.com/in/salma-kayastha-471ab2253/' }
  ];

  const contactInfo = [
    { icon: <FaEnvelope />, text: 'salmakayastha3@gmail.com' },
    { icon: <FaPhone />, text: '+977 (982) 327-0125' },
    { icon: <FaMapMarkerAlt />, text: 'Madhyapur Thimi -04, Bhaktapur, Nepal.' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <div className="brand-logo">
                <FaLeaf className="logo-icon" />
                <h3>AgroPortfolio</h3>
              </div>
              <p className="brand-description">
                Dedicated to advancing sustainable agriculture through innovation, 
                research, and modern farming techniques for a better tomorrow.
              </p>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href.substring(1));
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Contact Info</h4>
            <div className="contact-info">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <span className="contact-icon">{info.icon}</span>
                  <span className="contact-text">{info.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Follow Me</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="newsletter-text">
              Interested in sustainable agriculture? Let's connect and discuss 
              innovative farming solutions.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Salma Kayastha - Agriculture Graduate Portfolio. 
              All rights reserved.
            </p>
            <p className="footer-tagline">
              Growing the future of sustainable agriculture
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

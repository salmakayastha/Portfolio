import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false); // track form submission

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "salmakayastha3@gmail.com",
      link: "mailto:salmakayastha3@gmail.com"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+977 (982) 327-0125",
      link: "tel:+9779823270125"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Madhyapur Thimi-04, Bhaktapur, Nepal",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/salma-kayastha-471ab2253/",
      color: "#0077b5"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    fetch('https://formsubmit.co/salmakayastha3@gmail.com', {
      method: 'POST',
      body: formData
    })
      .then(() => {
        setSubmitted(true); // show success message
        form.reset();       // clear the form
      })
      .catch(() => {
        alert('There was an error submitting the form.');
      });
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Let's discuss how we can work together to advance sustainable agriculture
        </p>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in new research opportunities, collaborations, and discussions 
              about agricultural research, plant breeding, molecular biology, and sustainable farming practices.
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    <a href={info.link}>{info.value}</a>
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="social-link"
                    style={{ '--social-color': social.color }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            {submitted ? (
              <div className="success-message">
                <h3>Thank you!</h3>
                <p>Your message has been delivered successfully. I will get back to you soon.</p>
                <button
                  type="button"
                  className="btn-another"
                  onClick={() => setSubmitted(false)} // reset to show form again
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Send a Message</h3>

                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    placeholder="Tell me about your project or question..."
                  ></textarea>
                </div>

                {/* FormSubmit hidden fields */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New Contact Form Submission" />
                <input type="hidden" name="_template" value="plain" />

                <button type="submit" className="btn btn-submit">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

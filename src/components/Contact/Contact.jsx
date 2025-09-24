import React, { useState } from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">
          Contact <span className="highlight">Me!</span>
        </h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <h3>Let's Work Together</h3>
              <p>
                I'm always excited to work on new projects and collaborate with 
                creative minds. Whether you have a project in mind or just want 
                to say hello, feel free to reach out!
              </p>
              
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="#" className="social-link" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a href="#" className="social-link" aria-label="Email">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">FIRST NAME:</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="lastName">LAST NAME:</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="email">EMAIL ID:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">MESSAGE:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-button">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
        
        <div className="back-to-top">
          <button 
            className="back-to-top-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ↑
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;

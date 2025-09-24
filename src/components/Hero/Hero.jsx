import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Vishnu Moorthy</span>
            </h1>
            
            <p className="hero-description">
              I'm a UI/UX Designer and Frontend Developer who loves creating simple and 
              clean digital experiences. Designing intuitive interfaces that make life easier 
              for users is what excites me. I enjoy blending creativity with technology to 
              bring ideas to life. Building responsive and modern websites is one of my core 
              strengths. I focus on making every design user-friendly and visually 
              appealing. For me, design is all about balance, clarity, and a touch of 
              creativity.
            </p>
            
            <div className="hero-cta">
              <button className="cta-button">
                Get in Touch <span className="arrow">→</span>
              </button>
            </div>
            
            <div className="social-links">
              <a href="#" className="social-link" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="social-link" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="#" className="social-link" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="image-container">
              <div className="profile-frame">
                <img 
                  src="/api/placeholder/300/400" 
                  alt="Vishnu Moorthy"
                  className="profile-img"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-arrow">↓</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

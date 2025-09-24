import React, { useState } from 'react';
import './Certificates.css';

const Certificates = () => {
  const [activeCategory, setActiveCategory] = useState('prizes');
  
  const certificates = {
    prizes: [
      {
        id: 1,
        title: 'Certificate of Completion',
        subtitle: 'Full Stack Developer Bootcamp',
        organization: 'NexTech R&D Private Limited',
        date: 'August 10th 2023',
        description: 'Won Prizes in Internship, Presentations & Front page design.',
        image: '/api/placeholder/400/300'
      }
    ],
    designs: [
      {
        id: 2,
        title: 'UI/UX Design Excellence',
        subtitle: 'Advanced Design Portfolio',
        organization: 'Design Institute',
        date: 'March 2023',
        description: 'Explore My Designs - Modern interface designs and user experience projects.',
        image: '/api/placeholder/400/300'
      }
    ]
  };

  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <h2 className="section-title">
          My <span className="highlight">Certificates & Designs</span>
        </h2>
        
        <div className="certificates-content">
          <div className="category-tabs">
            <button 
              className={`tab-button ${activeCategory === 'prizes' ? 'active' : ''}`}
              onClick={() => setActiveCategory('prizes')}
            >
              Won Prizes in Internship, Presentations & Front page design.
            </button>
            <button 
              className={`tab-button ${activeCategory === 'designs' ? 'active' : ''}`}
              onClick={() => setActiveCategory('designs')}
            >
              Explore My Designs
            </button>
          </div>
          
          <div className="certificates-grid">
            {certificates[activeCategory].map((cert) => (
              <div key={cert.id} className="certificate-card">
                <div className="certificate-image">
                  <img src={cert.image} alt={cert.title} />
                  <div className="certificate-overlay">
                    <button className="view-button">View Certificate</button>
                  </div>
                </div>
                
                <div className="certificate-content">
                  <h3 className="certificate-title">{cert.title}</h3>
                  <h4 className="certificate-subtitle">{cert.subtitle}</h4>
                  <p className="certificate-organization">{cert.organization}</p>
                  <p className="certificate-date">{cert.date}</p>
                  <p className="certificate-description">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="navigation-arrows">
            <button className="nav-arrow prev">←</button>
            <button className="nav-arrow next">→</button>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-arrow">↓</div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;

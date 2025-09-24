import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const projects = [
    {
      id: 1,
      title: 'Modern Library UI Experience - College',
      image: '/api/placeholder/400/300',
      description: 'Library: Designed a modern, intuitive library interface with interactive dashboards and smooth navigation using Figma.',
      details: 'Developed a real-world inspired UI/UX project, showcasing practical design skills and user-friendly experience.',
      tags: ['UI/UX', 'Figma', 'Interactive Design']
    },
    {
      id: 2,
      title: 'Typing Speed Test Web App',
      image: '/api/placeholder/400/300',
      description: 'Developed an interactive typing speed test using HTML, CSS, and JavaScript with real-time accuracy and speed tracking.',
      details: 'Designed a modern, responsive UI with start, stop, resume, and restart controls for smooth user experience.',
      tags: ['JavaScript', 'HTML', 'CSS', 'Interactive']
    },
    {
      id: 3,
      title: 'App UI Designs',
      image: '/api/placeholder/400/300',
      description: 'WhatsApp: Designed a modern, intuitive chat interface with smooth navigation and interactive elements for enhanced user experience.',
      details: 'Instagram: Created visually appealing feed and story screens, focusing on responsive layouts and user-centered design principles.',
      tags: ['UI Design', 'Mobile App', 'User Experience']
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="project" className="projects">
      <div className="container">
        <h2 className="section-title">
          My <span className="highlight">Projects</span>
        </h2>
        
        <div className="projects-carousel">
          <button className="carousel-btn prev" onClick={prevSlide}>
            ←
          </button>
          
          <div className="carousel-container">
            <div 
              className="carousel-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="project-card">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <div className="project-tags">
                        {project.tags.map((tag, index) => (
                          <span key={index} className="project-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <p className="project-details">{project.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button className="carousel-btn next" onClick={nextSlide}>
            →
          </button>
        </div>
        
        <div className="carousel-indicators">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-arrow">↓</div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

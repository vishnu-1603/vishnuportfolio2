import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <span className="logo-text">VM</span>
        </div>
        
        <nav className="nav">
          {['Home', 'About', 'Skills', 'Designs', 'Project', 'Certificates', 'Contact'].map((item) => (
            <button
              key={item}
              className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
              onClick={() => scrollToSection(item.toLowerCase())}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;

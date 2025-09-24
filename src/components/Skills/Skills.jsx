import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML5', level: 90, icon: 'html5', color: '#e34f26' },
    { name: 'CSS3', level: 85, icon: 'css3', color: '#1572b6' },
    { name: 'JavaScript', level: 80, icon: 'javascript', color: '#f7df1e' },
    { name: 'Figma', level: 95, icon: 'figma', color: '#f24e1e' },
    { name: 'Adobe XD', level: 88, icon: 'adobexd', color: '#ff61f6' },
    { name: 'Canva', level: 92, icon: 'canva', color: '#00c4cc' },
    { name: 'Sketch', level: 75, icon: 'sketch', color: '#fdad00' },
    { name: 'Cinema 4D', level: 70, icon: 'cinema4d', color: '#011a6a' },
    { name: 'Excel', level: 85, icon: 'excel', color: '#217346' },
    { name: 'Laravel', level: 65, icon: 'laravel', color: '#ff2d20' },
    { name: 'Lightroom', level: 80, icon: 'lightroom', color: '#31a8ff' }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">
          My <span className="highlight">Skills</span>
        </h2>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <div 
                  className="skill-icon"
                  style={{ backgroundColor: skill.color }}
                >
                  <span className="skill-name-short">
                    {skill.name.substring(0, 2).toUpperCase()}
                  </span>
                </div>
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              
              <div className="skill-progress">
                <div className="progress-track">
                  <div 
                    className="progress-fill"
                    style={{ 
                      width: `${skill.level}%`,
                      backgroundColor: '#00d4aa'
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React from "react";
import "./Projects.css";
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.png'
import project3 from '../../assets/project3.jpg'
const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2>My <span>Projects</span></h2>
        <p>
          A selection of my recent works showcasing web development and UI/UX design skills.
        </p>

        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-card">
                      <img src={project1} alt="Projects1" className="project1"/>
                      
            
            
            <div className="project-info">
              <h3>Portfolio Website for Design & Code</h3>
              <p>A responsive personal portfolio built with React and CSS animations.</p>
              <a href="https://www.figma.com/proto/hjL7TrdRSSrqXr558tgamY/PORTFOLIO?node-id=0-1&t=tNVBL31r8m7gluAd-1" className="btn" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <img src={project2} alt="Project 2" className="project1"/>
            <div className="project-info">
              <h3>Modern Library UI Website </h3>
              <p>Modern Library user interface designed with Figma and React.</p>
              <a href="https://www.figma.com/proto/YSCtCz5ZAkvwOfMjjNQQLa/Library-Project?page-id=0%3A1&node-id=101-15&starting-point-node-id=1%3A5&t=9Wzj6tzt0mXbtZk0-1" className="btn" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <img src={project3} alt="Project 3" className="project1" />
            <div className="project-info">
              <h3>Typing Speed Test Web Page</h3>
              <p>Test your typing speed and accuracy with this simple web app!</p>
              <a href="#" className="btn" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

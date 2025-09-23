import React, { useEffect, useRef, useState } from "react";
import "./Skills.css";

const leftSkills = [
  { name: "HTML", level: 80 },
  { name: "CSS", level: 70 },
  { name: "JavaScript", level: 50 },
    { name: "React", level: 60 },
      { name: "Figma", level: 85 },


];

const rightSkills = [
  { name: "Photoshop", level: 90 },
    { name: "Canva", level: 80 },
      { name: "Lightroom", level: 85 },
      { name: "Excel", level: 60 },
        { name: "Adobe Express", level: 85 },



];

const Skills = () => {
  const [inView, setInView] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`skills ${inView ? "in-view" : ""}`} id="skills" ref={skillsRef}>
      <div className="skills-container">
        <h2>My <span>Skills</span></h2>
        <p>Here are some technologies I work with:</p>

        <div className="skills-columns">
          {/* Left Column */}
          <div className="skills-column">
            {leftSkills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <span>{skill.name}</span>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ "--progress": `${skill.level}%` }}
                  >
                    <span>{skill.level}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="skills-column">
            {rightSkills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <span>{skill.name}</span>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ "--progress": `${skill.level}%` }}
                  >
                    <span>{skill.level}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

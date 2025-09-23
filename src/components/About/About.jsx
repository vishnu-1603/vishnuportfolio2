import React from "react";
import "./About.css";
import image from "../../assets/VishnuMoorthy.jpg";

const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf"; 
    link.download = "Resume.pdf"; 
    link.click();

  };
  return (
    <div className="abt">
    <section className="about">
      <div className="about-container">
        
        {/* Left: Image */}
        <div className="about-image">
          <img src={image} alt="Vishnu Moorthy" />
        </div>

        {/* Right: Content */}
        <div className="about-content">
          <h2>About Me</h2>
          <p >
            Hi, I'm <span>Vishnu Moorthy</span>, Enthusiastic and detail-oriented fresher with a strong foundation in <b> UI/UX design and frontend development. 
Skilled in HTML, CSS, JavaScript, and design tools like  Figma,Canva,Miro,Adobe Express and Adobe photoshop.</b> Eager to contribute to 
building user-friendly, visually appealing web interfaces."     
           
           
            My goal is to deliver smooth user experiences through clean code, 
            creative interfaces, and strong attention to detail. I enjoy learning 
            new technologies and continuously improving my skills.
          </p>  

        <div className="about-buttons">
  

  <button 
    className="btn btn-outline" 
    onClick={handleDownload}>
    Resume
  </button>
</div>

        </div>

      </div>
      
    </section>
    </div>
  );
};

export default About;

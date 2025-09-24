import React from "react";
import "./Home.css";
import image from "../../assets/VishnuMoorthy.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1 className="typing-text">Hi, I'm Vishnu Moorthy</h1>
        <h2>Frontend Developer | UI/UX Designer</h2>
        <p>
          I’m passionate about crafting visually appealing and user-friendly web
          experiences. With skills in HTML, CSS, JavaScript, React, and design
          tools like Figma & Photoshop, I focus on creating modern, responsive,
          and engaging digital products.
        </p>

        {/* Buttons */}
        <div className="home-buttons">
          <button className="btn"><Link to="/Projects"> View Projects</Link> </button>
          <button className="btn"><Link to="/Contact"> Contact Me</Link> </button>
        </div>

       
      </div>

      <div className="home-image">
        <img src={image} alt="profile" />
      </div>
    </section>
  );
};

export default Home;

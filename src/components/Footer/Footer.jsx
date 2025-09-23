import React from "react";
import { FaGithub, FaInstagram, FaEnvelope, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Vishnu Moorthy</h3>
        <p className="parapage">Designed & Developed by me</p>

        <div className="footer-socials">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/vishnu-h-002b87290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="mailto:vishnumoorthy05@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;

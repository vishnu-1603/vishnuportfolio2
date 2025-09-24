import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from './../../assets/11.jpg'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      {/* Logo */}

      <h1 className="logo-text">
        <span className="white-text">PORT</span>
        <span className="black-text">FOLIO</span>
      </h1>

      {/* Desktop + Mobile Menu */}
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        </li>
        <li>
          <Link to="/skills" onClick={() => setIsOpen(false)}>Skills</Link>
        </li>
         <li>
          <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
        </li>
                <li>
          <Link to="/certificates" onClick={() => setIsOpen(false)}>Certificates</Link>   
        </li>
        <li>
          <Link to="/designs" onClick={() => setIsOpen(false)}>Designs</Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </li>
      </ul>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? "✖" : "☰"}
      </div>
    </nav>
  );
};

export default Navbar;

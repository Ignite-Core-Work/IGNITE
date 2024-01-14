// Navbar.js

import React, { useState } from 'react';
import './Navbar.css'; // Create a separate CSS file for styling
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="logo">IGNITE</div>

      <div className={`menu ${isMobile ? 'active' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#team">Team</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Social Media Links - Visible only on large screens */}
      <div className={`social-media ${isMobile ? 'hidden' : ''}`}>
        <a href="#" target="_blank">
          <FaTwitter className="social-icon" />
        </a>
        <a href="https://www.instagram.com/ignite_svuce/?hl=en" target="_blank">
          <FaInstagram className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/company/ignite-svuce/" target="_blank">
          <FaLinkedin className="social-icon" />
        </a>
      </div>


      <div className="toggle-button" onClick={handleToggle}>
        &#9776;
      </div>
    </nav>
  );
};

export default Navbar;

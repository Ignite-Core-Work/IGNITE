// Navbar.js

import React, { useState } from 'react';
import './Navbar.css'; // Create a separate CSS file for styling

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

      {/* Display only on large screens */}
      <div className={`login-buttons ${isMobile ? 'hidden' : ''}`}>
        <button className="login-button">Login</button>
        <button className="signup-button">Register</button>
      </div>

      <div className="toggle-button" onClick={handleToggle}>
        &#9776;
      </div>
    </nav>
  );
};

export default Navbar;

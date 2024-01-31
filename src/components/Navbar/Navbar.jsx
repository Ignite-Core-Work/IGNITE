import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
// import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <motion.div
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        className="logo"
      >
        IGNITE
      </motion.div>

      <div className={`menu ${isMobile ? "active" : ""}`}>
        <ul className="nav">
          <li className="nav-active-links">
            <NavLink to="/" activeClassName="active-link">
              Home
            </NavLink>
          </li>
          <li className="nav-active-links">
            <NavLink to="/crew" activeClassName="active-link">
              Team
            </NavLink>
          </li>
          <li className="nav-active-links">
            <NavLink to="/about" activeClassName="active-link">
              Activites
            </NavLink>
          </li>
          <li className="nav-active-links">
            <NavLink to="/contact" activeClassName="active-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      <div className={`social-media ${isMobile ? "hidden" : ""}`}>
        {/* <a href="#" target="_blank">
          <FaTwitter className="social-icon" />
        </a>
        <a href="https://www.instagram.com/ignite_svuce/?hl=en" target="_blank">
          <FaInstagram className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/company/ignite-svuce/" target="_blank">
          <FaLinkedin className="social-icon" />
        </a> */}
      </div>

      <div className="toggle-button" onClick={handleToggle}>
        &#9776;
      </div>
    </nav>
  );
};

export default Navbar;

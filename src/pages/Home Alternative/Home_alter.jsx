import React from "react";
import "./Home_alter.css";
import Navbar from "../../components/Navbar/Navbar";
// import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import Highlets from "../Highlets/Highlets";

const Homealt = () => {
  const bridging = "Bridging ".split("");
  const gap = "the gap inspiring the".split("");
  const f = "feature".split("");

  const gapControls = useAnimation();

  return (
    <>
      <div className="for-Home-page1">
        <Navbar />
        <div className="for-home-middle-section1">
          <div className="for-home-middle-first1">
            <h3 className="hero-text">
              {bridging.map((letter, key) => (
                <motion.span
                  key={key}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: key / 20,
                  }}
                  className="for-highlight-text1"
                >
                  {letter}
                </motion.span>
              ))}

              <motion.span
                className="for-normal-text1"
                onHoverStart={() => gapControls.start({ scale: 1.5 })}
                onHoverEnd={() => gapControls.start({ scale: 1 })}
                animate={gapControls}
              >
                {gap.map((letter, key) => (
                  <span
                    key={key}
                    style={{
                      transition: "opacity 0.25s",
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </motion.span>

              <span className="for-highlight-text1">
                {f.map((letter, key) => (
                  <motion.span
                    key={key}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.25,
                      delay: key / 20,
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            </h3>
            <p className="for-home-middle-para1">
              Foster the innovation and collaboration ignite, where students and
              alumni collaborate
            </p>
            <div className="for-home-button-section1">
              <button className="login-button1">Login</button>
              <button className="signup-button1">Register</button>
            </div>
          </div>
        </div>
        {/* <div className="for-contact-page-bottom-col1 links">
          <a href="https://www.instagram.com/ignite_svuce/?hl=en">
            <FaTwitter className="social-icon" />
          </a>
          <a href="https://www.instagram.com/ignite_svuce/?hl=en">
            <FaInstagram className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/company/ignite-svuce/">
            <FaLinkedin className="social-icon" />
          </a>
        </div> */}
        <br />
        <br />
<br />
        <div className="highlets">
          <Highlets />
        </div>
      </div>
    </>
  );
};

export default Homealt;

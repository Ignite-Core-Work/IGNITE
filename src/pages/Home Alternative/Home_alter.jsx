import React from 'react'
import './Home_alter.css'
import globe from '../../assets/globe.png'
import Navbar from '../../components/Navbar/Navbar'
import group from '../../assets/Group.png';
import ass1 from '../../assets/Team goals-pana.png'
import Bar from '../../components/Bar/Bar';
import { FaInstagram,FaTwitter,FaLinkedin } from 'react-icons/fa';

const Homealt = () => {
  return (
    <>
    <div className='for-Home-page1'>
      <Navbar/>
      <Bar/>
             <div className='for-home-middle-section1'>
          <div className='for-home-middle-first1'>
            <h3>
                <span className='for-highlight-text1'>Bridging </span>
                <span className='for-normal-text1'>the gap inspiring the </span> 
                <span className='for-highlight-text1'>feature</span>
            </h3>
            <p className='for-home-middle-para1'>
                Foster the innovation and collaboration ignite,where students and alumni collaborate
            </p>
            <div className='for-home-button-section1'>
              <button className="login-button1">Login</button>
              <button className="signup-button1">Register</button>
            </div>
          </div>        
        </div>
        <div className='for-contact-page-bottom-col1 links'>
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
    </div>
    </>
  )
}

export default Homealt;
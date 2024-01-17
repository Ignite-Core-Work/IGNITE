import React from 'react'
import './Contact.css'
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Navbar from '../../components/Navbar/Navbar';


const Contact = () => {
  return (
    <>
    
    <div className='Contact-page'>
    <Navbar/>
        <h1 className='for-contact-page-heading'>Engage with the club</h1>
        <p className='for-contact-page-paragraph'>We're here to support you! Feel free to reach out for any questions or clarification you need.</p>
        <div className='for-contact-page-form'>
            <form>
                <div className='for-contact-page-form-row'>
                    <div className='for-contact-page-form-row-col'>
                        <label className='for-contact-page-form-col-label'>First Name</label>
                        <input type="text" className='for-contact-page-form-col-input' placeholder='Enter your first Name'/>
                    </div>
                    <div className='for-contact-page-form-row-col'>
                        <label className='for-contact-page-form-col-label'>Last Name</label>
                        <input type="text" className='for-contact-page-form-col-input' placeholder='Enter your last name'/>
                    </div>
                </div>
                <div className='for-contact-page-form-row'>
                    <div className='for-contact-page-form-row-col'>
                        <label className='for-contact-page-form-col-label'>Email</label>
                        <input type="email" className='for-contact-page-form-col-input' placeholder='Enter your email'/>
                    </div>
                    <div className='for-contact-page-form-row-col'>
                        <label className='for-contact-page-form-col-label'>Phone number</label>
                        <input type="number" className='for-contact-page-form-col-input' placeholder='Enter your Phone number'/>
                    </div>
                </div>
                <div className='for-contact-page-form-row'>
                <div className='for-contact-page-form-row-col'>
                    <label className='for-contact-page-form-col-label'>Message</label>
                    <textarea className='for-contact-page-form-col-input-textarea' placeholder='Enter your message'></textarea>
                </div>
                    <div className='for-contact-page-form-row-col'>
                        <label className='for-contact-page-form-col-label'>Your Roll number</label>
                        <input type="number" className='for-contact-page-form-col-input' placeholder='Enter your Phone number'/>
                    </div>
                </div>
                
                <div className='for-contact-page-form-button-container'>
                    <button className='for-contact-page-button'>Send</button>
                </div>


                <div className='for-contact-page-form-bottom-card'>
                    <div className='for-contact-page-bottom-col'>
                        <p className='for-contact-page-bottom-col-head'>Address</p>
                        <p className='for-contact-page-bottom-col-para'>Sri venkateswara University</p>
                    </div>
                    <div className='for-contact-page-bottom-col'>
                        <p className='for-contact-page-bottom-col-head'>Give Us a Call</p>
                        <p className='for-contact-page-bottom-col-para'>+91 00000 00000</p>
                    </div>
                    <div className='for-contact-page-bottom-col links'>
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
            </form>
        </div>
    </div>
    </>
  )
}

export default Contact
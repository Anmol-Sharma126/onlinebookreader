import React from 'react';
import emailImg from "../../images/email.png"
import linkedinImg from "../../images/linkedin.png"
import gitImg from "../../images/github.png"
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
        <p className="section_text_p1">Get in Touch</p>
        <div className="contact-info-upper-container">
            <div className="contact-info-container">
                <a href="mailto:anmol126.be@chitkara.edu.in">
                    <img src={emailImg} alt="email icon" style={{width: '2.5rem'}} className="icon contact-icon email-icon"/>
                </a>
            </div>
            <div className="contact-info-container">
                <a href="https://www.linkedin.com/in/anmol-sharma-696b03163/" target="_blank"rel="noreferrer">
                    <img src={linkedinImg} alt="linkedin icon" className="icon contact-icon" />
                </a>
            </div>
            <div className="contact-info-container">
                <a href="https://github.com/Anmol-Sharma126/onlinebookreader" target="_blank"rel="noreferrer">
                    <img src={gitImg} alt="github icon" className="icon contact-icon" />
                </a>
            </div>
        </div>
        <div className="about-contact-container">
            <div className="about-container">
                <h3>About Us</h3>
                <p>We are a team of passionate individuals who love to create and innovate.</p>
            </div>
            <div className="contact-container">
                <h3>Contact Us</h3>
                <p>Chitkara University Rajpura</p>
                <p>+1234567890</p>
            </div>
        </div>
    </footer>
    );
}

export default Footer;

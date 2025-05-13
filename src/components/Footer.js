import React from 'react';
import './Footer.css';
import logo from '../assets/BIO.png';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="title"> 
                <span className="biosetup">Biosetup</span>
                <span className="lifesciences">Lifesciences</span>
              </div>
      <div className="footer-sections">
       
        <div className="footer-section">
          <h3>Contact</h3>
          <p><FaMapMarkerAlt className="icon" /> Katihar Bihar , India</p>
          <p><FaPhoneAlt className="icon" /> Toll Free: <a href="tel:18001234567">1800-123-4567</a></p>
          <p><FaEnvelope className="icon" /> <a href="mailto:info@biosetup.com">careers.biosetuplifescience@gmail.com</a></p>
        </div>

     
        <div className="footer-section">
          <h3>Services</h3>
          <p><a href="/services/research">Research Consulting</a></p>
          <p><a href="/services/clinical">Clinical Trials</a></p>
          <p><a href="/services/lab">Lab Equipment</a></p>
          <p><a href="/services/bioinformatics">Bioinformatics</a></p>
        </div>

       
        <div className="footer-section">
          <h3>Quick Links</h3>
          <p><a href="/about">About</a></p>
          <p><a href="/blogs">Blog</a></p>
          <p><a href="/career">Career</a></p>
          <p><a href="/feedback">Feedback</a></p>
          <p><a href="/contact">Contact Us</a></p>
          <p><a href="/privacy">Privacy Policy</a></p>
        </div>

       
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon-circle"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon-circle"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon-circle"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="icon-circle"><FaLinkedin /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="icon-circle"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>2025 © All Rights Reserved by BiosetupLifesciences.</p>
      </div>
    </div>
  );
};

export default Footer;


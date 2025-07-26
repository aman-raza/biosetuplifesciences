import React from 'react'
import logo from '../assets/BIO.png';
import './Header.css'
import {Link} from 'react-router-dom'


function Header() {
  return (
    <div>
      <div className="header">
<<<<<<< HEAD
        <div className="bsl_logo">
          <img src={logo} alt="BSL Logo" />
        </div>
        <div className="bsl-title">
          <span className="biosetup">Biosetup</span>
          <span className="lifesciences">Lifesciences</span>
        </div>
        <div className="in_header">
          <ul>
            <li><a href="#about-container">About Us</a></li>
            <li><a href="#newsletter-container">Newslets</a></li>
            <li><a href="#career-container">Career</a></li>
            <li><a href="#events-container">Events</a></li>
            <li><a href="#team-container">Our Team</a></li>
            <li><a href="#opportunities-container">Opportunities</a></li>
            <li><a href="#bioit-container">Bio-IT Pedia</a></li>
          </ul>
        </div>
        <div className="genz"><a href="#genz">Gen-Z School</a></div>
      </div>
=======
              <div className="bsl_logo">
                <img src={logo} alt="BSL Logo" />
              </div>
              <div className="bsl-title"> 
                <span className="biosetup">Biosetup</span>
                <span className="lifesciences">Lifesciences</span>
              </div>
              <div className="in_header">
                <ul>
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/newsletter">Newslets</a></li>
                  <li><a href="/career">Career</a></li>
                  <li><Link to ="/events">Events</Link></li>
                  <li><Link to="/team">Our Team</Link></li>
                  <li><a href="/opportunities">Opportunities</a></li>
                  <li><a href="/bioit">Bio-IT Pedia</a></li>
                </ul>
              </div>
              <div className="genz"><a href="#genz">Gen-Z School</a></div>
            </div>
>>>>>>> 0689a5adda6afe58d2574e4401714e87f0f68a99
    </div>
  )
}

export default Header

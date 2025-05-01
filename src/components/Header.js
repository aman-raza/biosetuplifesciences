import React from 'react'
import logo from '../assets/BIO.png';
import './Header.css'

function Header() {
  return (
    <div>
      <div className="header">
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
                  <li><a href="/events">Events</a></li>
                  <li><a href="/team">Our Team</a></li>
                  <li><a href="/opportunities">Opportunities</a></li>
                  <li><a href="/bioit">Bio-IT Pedia</a></li>
                  <li><a href="/blogs">Blogs</a></li>
                </ul>
              </div>
              <div className="genz"><a href="#genz">Gen-Z School</a></div>
            </div>
    </div>
  )
}

export default Header

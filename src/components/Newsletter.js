import React from 'react'
import './Newsletter.css'
import { useState } from 'react';

function Newsletter() {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
      setIsActive(!isActive);
    };
  return (
    <>
    <div className='main-container'>
      <div className='heading'> <h1>Biosetup Times</h1>
       <p>A newsletter portal by Biosetup Lifesciences</p>
       </div>
      <div className='hamburger-box'>
        <button className={`hamburger-button ${isActive ? 'active' : ''}`}
          aria-label="Toggle Menu"
          onClick={toggleMenu}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>

        {isActive && (
        <ul className="hamburger-menu">
            <li><a href='/'>Most Popular</a></li>
            <li><a href='/'>Recently Uploaded</a></li>
            <li><a href='/'>Most Relevent</a></li>
        </ul>
        )}
        </button>
      </div>
    </div>
    </>
  )
}

export default Newsletter

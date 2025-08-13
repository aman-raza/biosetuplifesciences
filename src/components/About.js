import React from 'react'
import './About.css';

function About() {
  return (
    <div>
      <div className='main-div'>
        <div class="about-grid">
          <div class="about-box">
            <div class="about-card-inner">
              <div class="about-card-front biosetup-card"></div>
              <div class="about-card-back biosetup-back-card"></div>
            </div>
          </div>
          <div class="about-box">
            <div class="about-card-inner">
              <div class="about-card-front genz-card"></div>
              <div class="about-card-back genz-back-card"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About;
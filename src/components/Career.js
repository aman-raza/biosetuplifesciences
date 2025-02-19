import React from 'react';
import './Career.css';

function Career() {
  return (
    <div className="career-container">
      <h1 className="career-heading">Let's explore your career opportunities</h1>
      <hr class="white-line"></hr>
      <div className="career-section">
        <div className="career-box">
          <h2>Lifescience</h2>
          <hr class="white-line-lifescience"></hr>
          <ul>
            <li><a>Organization Jobs</a></li>
            <li><a>Offline Labs</a></li>
            <li><a>Handson Industrial Exposure</a></li>
          </ul>
        </div>
        <div class="white-vertical-line"></div>
        <div className="career-box">
          <h2>IT</h2>
          <hr class="white-line-lifescience"></hr>
          <ul>
            <li><a>Organization Jobs</a></li>
            <li><a>Offline Labs</a></li>
            <li><a>Handson Industrial Exposure</a></li>
            <li><a>IOT</a></li>
            <li><a>AI & ML</a></li>
            <li><a>Neural Network</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Career;

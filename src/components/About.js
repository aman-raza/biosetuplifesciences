import React from "react";
import "./About.css";

function About() {
  const handleClick = () => {
    window.open("https://www.google.com", "_blank", "noreferrer");
  };

  return (
    <div>
      <div className="main-div">
        <div className="about-grid">
          <div className="about-box">
            <div className="about-card-inner">
              <div className="about-card-front biosetup-card"></div>
              <div className="about-card-back biosetup-back-card"></div>
            </div>
          </div>
          <div className="about-box">
            <div className="about-card-inner">
              <div className="about-card-front genz-card"></div>
              <div className="about-card-back genz-back-card">
                <h2 className="genz-title">Gen Z</h2>
                <p className="genz-description">
                  Gen Z is the generation born between 1997 and 2012, known for
                  being digital natives and socially conscious."We are the
                  future, and we are ready to make a difference."
                </p>
                <button class="genz-visit-button" onClick={handleClick}>
                  Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;

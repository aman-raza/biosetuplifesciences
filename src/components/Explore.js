import React from "react";
import "./Explore.css";

function Explore() {
  return (
    <div className="explore-container">
      <div className="explore-header">
        <h1>Explore</h1>
        <div className="explore-header-line"></div>
        <p>Bits of Biosetup Lifesciences</p>
      </div>
      <div className="explore-content">
        <div className="explore-content-box">
          <p className="explore-content-text">Achievements and Development</p>
        </div>
        <div className="explore-content-box">
          <p className="explore-content-text">ISO and MSME Certification</p>
        </div>
        <div className="explore-content-box">
          <p className="explore-content-text">Grands and Collaborations</p>
        </div>
        <div className="explore-content-box">
          <p className="explore-content-text">
            Guests Symposium cum Research Methodology
          </p>
        </div>
      </div>
    </div>
  );
}
export default Explore;

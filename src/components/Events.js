import React from 'react';
import  './events.css'; 

function Event() {
  return (
    
    
    <div className="event-wrapper">
  <h1 className="event-heading"> EVENTS</h1>

  <div className="event-container">
    <div className="left-side">
      <button className="left-button">
        <span className="red-dot"></span> LIVE
      </button>
      <p className="left-paragraph">Tune in ongoing live events</p>
    </div>

    <div className="vertical-line"></div>

    <div className="right-side">
      <button className="right-button">Upcoming Webinars</button>
      <button className="right-button">Upcoming Workshops</button>
      <button className="right-button">Upcoming Training</button>
    </div>
  </div>
</div>

  );
}

export default Event;

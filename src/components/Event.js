import React from 'react';
import './Event.css';

function Event() {
    return (
        <div className="event-container">
            <div className="event-header">
                <h1 className="event-title">EVENTS</h1>
                <div className="divisions"></div>
            </div>
            <div className="event-content">
                <div className="event-left">
                    <div className="event-live-div">
                        <div className="event-live-dot"></div>
                        <h2 className="event-live-text">LIVE</h2>
                    </div>
                    <p className="event-live-subtitile">
                        Tune in for ongoing live events
                    </p>
                </div>
                <div className="event-middle divisions"></div>
                <div className="event-right">
                    <div className="event-upcoming-webinar">
                        <h3 className="event-upcoming-webinar-title">Upcoming Webinar</h3>
                    </div>
                    <div className="event-upcoming-workshop">
                        <h3 className="event-upcoming-workshop-title">Upcoming Workshop</h3>
                    </div>
                    <div className="event-upcoming-training">
                        <h3 className="event-upcoming-training-title">Upcoming Training</h3>
                    </div>
                </div>
            </div>
        </div>  
    );
}

export default Event;
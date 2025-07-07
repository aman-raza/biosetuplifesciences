import React from 'react'
import './Team.css'
import team1 from '../user-solid.svg'
function Team() {
    return (
        <div>
            <h1>Our Team</h1>
            <div className="team-container">
                <div className="team-member">
                    <img src={team1} alt="Team Member" />
                    <h3>John Doe</h3>
                    <p>CEO</p>
                </div>
                <div className="team-member">
                    <img src={team1} alt="Team Member" />
                    <h3>John Doe</h3>
                    <p>CEO</p>
                </div>
                <div className="team-member">
                    <img src={team1} alt="Team Member" />
                    <h3>John Doe</h3>
                    <p>CEO</p>
                </div>
                <div className="team-member">
                    <img src={team1} alt="Team Member" />
                    <h3>John Doe</h3>
                    <p>CEO</p>
                </div>
            </div>
        </div>
    )
}
export default Team;
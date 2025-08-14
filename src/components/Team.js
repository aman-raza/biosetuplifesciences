import React from 'react'
import './Team.css'
import { useState } from 'react'
import { SAM } from "../assets/ScientificAdvisoryMember/ScientificAdvisoryMemberAPI"
import { Volunteer_interns } from '../assets/Volunteers/volunteersapi'
import { orgs } from '../assets/Organisers/organisersapi'
import instagramLogo from '../../src/instagram_logo.svg'
import linkedinLogo from '../../src/linkedin_logo.svg'
import emailLogo from '../../src/email_logo.svg'
function Team() {

    const [toggle, setToggle] = useState(0);
    const [memberhover, setMemberhover] = useState(0);
    const [volunterhover, setVolunterhover] = useState(0);
    const [orghover, setOrghover] = useState(0);

    function Organisers() {
        return (
            <div className="team-container">
                {
                    orgs.map((m, index) => (
                        <div key={index} className="flip-card" onMouseOver={() => setOrghover(index)} onMouseLeave={() => setOrghover(null)}>
                            <div className={`flip-card-inner ${orghover === index ? "flipped" : ""}`}>
                                {/* Front Face */}
                                <div className="flip-card-front">
                                    <img src={m.img[0]} alt={m.name} />
                                    <h3>{m.name}</h3>
                                    <p>{m.designation}</p>
                                </div>
                                {/* Back Face */}
                                <div className="flip-card-back">
                                    <h2>{m.name}</h2>
                                    <div className='team-member-details'>
                                        <div className="team-member-instagram">
                                            <img src={instagramLogo} alt="Instagram Logo"/>
                                            <div><p><a href={m.instagramlink} target='_blank' rel='noreferrer'>{m.instagramhandle}</a></p></div>
                                        </div>
                                        <div className="team-member-linkedin">
                                            <img src={linkedinLogo} alt="LinkedIn Logo"/>
                                            <div><p><a href={m.linkedinlink} target='_blank' rel='noreferrer'>{m.linkedinName}</a></p></div>
                                        </div>
                                        <div className="team-member-email">
                                            <img src={emailLogo} alt="Email Logo"/>
                                            <div><p><a href={m.emaillink} target='_blank' rel='noreferrer'>{m.email}</a></p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }

    function Volunteers() {
        return (
            <div className="team-container">
                {
                    Volunteer_interns.map((m, index) => (
                        <div key={index} className="flip-card" onMouseOver={() => setVolunterhover(index)} onMouseLeave={() => setVolunterhover(null)}>
                            <div className={`flip-card-inner ${volunterhover === index ? "flipped" : ""}`}>
                                {/* Front Face */}
                                <div className="flip-card-front">
                                    <span className={`${(m.post === "Social Media Specialist" || m.post === "Event Coordinator Executive") ? "team-member-img-promoted" : "team-member-img"}`}>
                                        <img src={m.img[0]} alt={m.name} className={`${(m.post === "Social Media Specialist" || m.post === "Event Coordinator Executive") ? "team-member-img-promoted" : "team-member-img"}`} />
                                    </span>
                                    <h3>{m.name}</h3>
                                    <p>{m.post}</p>
                                </div>
                                {/* Back Face */}
                                <div className="flip-card-back">
                                    <h2>{m.name}</h2>
                                    <div className='team-member-details'>
                                        <div className="team-member-instagram">
                                            <img src={instagramLogo} alt="Instagram Logo"/>
                                            <div><p><a href={m.instagramlink} target='_blank' rel='noreferrer'>{m.instagramhandle}</a></p></div>
                                        </div>
                                        <div className="team-member-linkedin">
                                            <img src={linkedinLogo} alt="LinkedIn Logo"/>
                                            <div><p><a href={m.linkedinlink} target='_blank' rel='noreferrer'>{m.linkedinName}</a></p></div>
                                        </div>
                                        <div className="team-member-email">
                                            <img src={emailLogo} alt="Email Logo"/>
                                            <div><p><a href={m.emaillink} target='_blank' rel='noreferrer'>{m.email}</a></p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }      

    function ScientificAdvisoryMembers() {
        return (
            <div className="team-container">
                {
                    SAM.map((m, index) => (
                        <div key={index} className="flip-card" onMouseOver={() => setMemberhover(index)} onMouseLeave={() => setMemberhover(null)}>
                            <div className={`flip-card-inner ${memberhover === index ? "flipped" : ""}`}>
                                {/* Front Face */}
                                <div className="flip-card-front">
                                    <img src={m.image[0]} alt={m.name} className="team-member-img" />
                                    <h3>{m.name}</h3>
                                    <p>{m.detail}</p>
                                </div>
                                {/* Back Face */}
                                <div className="flip-card-back">
                                    <h3>{m.name}</h3>
                                    <p>More background, qualifications, or any other info</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }      

    return (
        <div>
            <h1>Our Team</h1>
            <div className="team-member-container">
                <div onClick={() => setToggle(0)} className={`team-member-containter-button ${toggle === 0 ? "team-member-containter-button-active" : ""}`}>
                    <h3>Organisers</h3>
                </div>
                <div onClick={() => setToggle(1)} className={`team-member-containter-button ${toggle === 1 ? "team-member-containter-button-active" : ""}`}>
                    <h3>Volunteers</h3>
                </div>
                <div onClick={() => setToggle(2)} className={`team-member-containter-button ${toggle === 2 ? "team-member-containter-button-active" : ""}`}>
                    <h3>Scientific advisory members</h3>
                </div>
            </div>
            {toggle === 0 ? Organisers() : toggle === 1 ? Volunteers() : toggle === 2 ? ScientificAdvisoryMembers() : ""}
        </div>
    )
}
export default Team;
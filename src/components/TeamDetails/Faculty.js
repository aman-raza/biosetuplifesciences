import React from 'react';

function Faculty() {
  const sectionStyle = {
    padding: '30px',
    textAlign: 'center',
    backgroundColor: '#eaf3fc',
  };

  const headingStyle = {
    color: '#007bff',
    marginBottom: '30px',
  };

  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    border: '2px solid #007bff',
    borderRadius: '12px',
    padding: '30px',
    width: '280px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    textAlign: 'center',

  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    marginBottom: '15px',
  };

  const nameStyle = {
    color: '#007bff',
    fontSize: '22px',
    marginTop: '20px',
  };

  return (
    <div style={sectionStyle}>
      <h2 style={headingStyle}>Our Volunteers</h2>
      <div style={cardContainerStyle}>
        <div
          style={{
            ...cardStyle,
            ':hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 8px 20px rgba(0, 123, 255, 0.3)',
            },
          }}
        >
          <img
            src="https://drive.google.com/file/d/1YuGKJDCqwb4oFKyOWArFeNhufGn1S6cC/view?usp=drivesdk"
            alt="Volunteer 1"
            style={imageStyle}
          />
          <h4 style={nameStyle}>Dr.Arpana Sharma</h4>
          <p>PHD IN LIFESCIENCES</p>
        </div>

        <div
          style={{
            ...cardStyle,
            ':hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 8px 20px rgba(0, 123, 255, 0.3)',
            },
          }}
        >
          <img
            src="https://biosetuplifesciences.com/images/f1.jpg"
            alt="Volunteer 2"
            style={imageStyle}
          />
          <h4 style={nameStyle}>Mrs.Somoju Bhargavi</h4>
          <p>MSC (PHD)LECT.IN BIOTECHNOLOGY& MICROBIOLOGY|GATE & TSET QUALIFIED</p>
        </div>

        <div
          style={{
            ...cardStyle,
            ':hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 8px 20px rgba(0, 123, 255, 0.3)',
            },
          }}
        >
          <img
            src="https://biosetuplifesciences.com/images/f2.png"
            alt="Volunteer 1"
            style={imageStyle}
          />
          <h4 style={nameStyle}>Ms.Vinita K.S Tiwari</h4>
          <p>B.SC|MSC (BIOCHEMISTRY)|2 TIMES GOLD MEDALIST |CSIR NET LS (AIR36)</p>
        </div>

         <div
          style={{
            ...cardStyle,
            ':hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 8px 20px rgba(0, 123, 255, 0.3)',
            },
          }}
        >
          <img
            src="https://biosetuplifesciences.com/images/f4.jpeg"
            alt="Volunteer 1"
            style={imageStyle}
          />
          <h4 style={nameStyle}>Mr Vinayan R Nair</h4>
          <p>M.Phil in Microbiology., MBA in Pathology Lab Management. 13 plus years of work experience in the field of Quality Assurance, Quality Control, Food Safety, Occupational Health and Safety, Training etc</p>
        </div>
      </div>
    </div>
  );
}


import React from 'react';

function Volunteers() {
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
          <h4 style={nameStyle}>Afifa</h4>
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
            src="https://drive.google.com/open?id=1BhRIBj8KQ35uFjJaDAohcetvw8agRayX"
            alt="Volunteer 2"
            style={imageStyle}
          />
          <h4 style={nameStyle}>Agnish Roy</h4>
        </div>
      </div>
    </div>
  );
}

export default Volunteers;

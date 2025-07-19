import React from 'react';

function Volunteers() {
  const volunteers = [
    { name: 'Apoorva Singh', image: 'https://drive.google.com/open?id=1fkYCAJtxRVt1T5KH-dhNeylsTDH49AE5' },
    { name: 'Esoh Rene Tanwieh', image: 'https://drive.google.com/open?id=1vmM4x6-tuPBWMjxvbVFettxseddzWoiM' },
    { name: 'YASHIKA BRAMHANKAR ', image:'https://drive.google.com/open?id=1MB9e5NgX2BW1Kjy58ggowQteqdk7Qic3' },
    { name: 'Nouran Adel', image: 'https://drive.google.com/open?id=183H7Dsxhw2h8r-dTQASLSqrF4liQj9pX' },
    { name: 'Srijan Das', image: 'https://drive.google.com/open?id=1HymCzbyhv09Bue4w5e1CLhrH8mJf-AQF' },
    { name: 'Esoh Rene Tanwieh ', image: 'https://drive.google.com/open?id=16Q4LMrmjHQH3OPfXRfqsmhKDi1Nw_Hia' },
    { name: 'Kiran', image: 'https://drive.google.com/open?id=16Q4LMrmjHQH3OPfXRfqsmhKDi1Nw_Hia' },
    { name: 'Ummukulsu T S', image: 'https://drive.google.com/open?id=18sRlVZzox-zjNCYt-h0OVwDi6XuwPwSl' },
    { name: 'Sofiya Sanowar', image: 'https://drive.google.com/open?id=1sUFZ4irKtGsMqm9Lm_T_pRvrrnC7koFv' },
    { name: 'Miracle Nwankwo ', image: 'https://drive.google.com/open?id=18i7yq7FYBqQbrowi-9xU7SbwZ7SLSjWM' },
    { name: 'Shailesh Gendewad', image: 'https://drive.google.com/open?id=1esANNk9a9RyORa1KxBU2Qbs_GlR5G7gq' },
    { name: 'Sangeetha Sangameswaran ', image: 'https://drive.google.com/open?id=1cFq4-BWw7JE9-XtBR8sBQX2EXF8bl4Qn' },
    { name: 'Tsolmon Tsend-Ayush', image: 'https://drive.google.com/open?id=1HrxTjLnFa9TFXmGNNBXiePYQg73DJQl2' },
    { name: 'T. Mani', image: 'https://drive.google.com/open?id=11xvSRYs7Y9R0AAcXmn6wNRe8Yw5zokQ5' },
    { name: 'Mouli Chakraborty ', image: 'https://drive.google.com/open?id=1lqw41vjXduI5QktPSVX19y6VQKP3gd1W' },
    { name: 'Priya Chauhan', image: 'https://drive.google.com/open?id=1of8QiBOig_c7NH0PKIwkypEEzm-giHA7' },
    { name: 'Andaleeb Zahra', image: 'https://drive.google.com/open?id=1mX1MLF5rJFDAnWjygPjYmbacQQqP-07C' },
   
  ];

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
    flexWrap: 'wrap',
    gap: '20px',
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    border: '2px solid #007bff',
    borderRadius: '12px',
    padding: '15px',
    width: '180px',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const imageStyle = {
    width: '100%',
    borderRadius: '10px',
    marginBottom: '10px',
  };

  const nameStyle = {
    color: '#007bff',
    fontSize: '16px',
    marginTop: '5px',
  };

  return (
    <div style={sectionStyle}>
      <h2 style={headingStyle}>Our Volunteers</h2>
      <div style={cardContainerStyle}>
        {volunteers.map((volunteer, index) => (
          <div key={index} style={cardStyle}>
            <img src={volunteer.image} alt={volunteer.name} style={imageStyle} />
            <h4 style={nameStyle}>{volunteer.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Volunteers;

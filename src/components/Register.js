import React from 'react';
import './Register.css';

const Register = () => {
  return (
    <div className="register-bg">
      <div className="register-box">
        <h2>Register for Webinar</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="text" placeholder="Institution / Organization" />
          <select required>
            <option value="">Select Webinar</option>
            <option>Advances in Biotech Innovation</option>
            <option>Sustainable Lab Practices</option>
            <option>CRISPR & Gene Editing</option>
            <option>BioStartups Pitch Day</option>
          </select>
          <textarea placeholder="Any Questions?" rows="4"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Register;


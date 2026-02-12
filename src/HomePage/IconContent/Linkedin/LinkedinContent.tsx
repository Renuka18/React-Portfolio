import React from 'react';
import Lottie from 'lottie-react';
import LinkedInAnimation from '../../../Assets/Womanwithlenses.json';
import './LinkedinContent.css';

const LinkedinContent = () => {
  return (
    <div className="modal-content-wrapper">
      <div className="modal-lottie">
        <Lottie animationData={LinkedInAnimation} loop autoplay />
      </div>
      <div className="modal-text">
        <p>Let’s connect and grow together professionally 👩‍💼</p>
        <a
          href="https://linkedin.com/in/renukacparuchuri"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-link"
        >
          linkedin.com/in/renukacparuchuri
        </a>
      </div>
    </div>
  );
};

export default LinkedinContent;
import React from 'react';
import Lottie from 'lottie-react';
import phoneLottie from '../../../Assets/Womanchattinginmobile.json';
import './PhoneContent.css';

const PhoneContent = () => {
  return (
    <div className="modal-body">
      <div className="modal-lottie">
        <Lottie animationData={phoneLottie} loop autoplay />
      </div>
      <div className="modal-text">
        <p>Feel free to give me a call or ping anytime 📞</p>
        <p><strong>+1 51041 38585</strong></p>
      </div>
    </div>
  );
};

export default PhoneContent;

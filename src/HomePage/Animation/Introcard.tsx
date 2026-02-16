import React from 'react';
import './Introcard.css';

const IntroCard = ({ onYes, onNo }: { onYes: () => void; onNo: () => void }) => {
  return (
    <div className="intro-card">
      <p className="intro-text">
        Hello, I'm <strong>Renuka</strong> 👋<br />
        Do you want to know more about me?
      </p>
      <p className="intro-note"> For the best visual experience, please view this portfolio on desktop</p>
      <div className="button-group">
        <button className="yes-btn" onClick={onYes}>Yes</button>
        <button className="no-btn" onClick={onNo}>No</button>
      </div>
    </div>
  );
};

export default IntroCard;

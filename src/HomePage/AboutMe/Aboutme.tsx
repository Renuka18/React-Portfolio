import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import WandGirlAnimation from '../../Assets/Womanwand.json';
import './AboutMe.css';
import CurtainGif from "../../Assets/curtainpull.gif"

const AboutMe = () => {
  const [curtainOpen, setCurtainOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [hideGirl, setHideGirl] = useState(false);


  useEffect(() => {
    // 1. Curtain finishes opening
    const curtainTimer = setTimeout(() => {
      setCurtainOpen(true);
    }, 5300); // match GIF duration

    // 2. Content appears AFTER curtain
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 5500);

    // 3. Girl disappears AFTER content
    const girlHideTimer = setTimeout(() => {
      setHideGirl(true);
    }, 5600);

    return () => {
      clearTimeout(curtainTimer);
      clearTimeout(contentTimer);
      clearTimeout(girlHideTimer);
    };
  }, []);



  return (
    <div className="about-container">
      {/* Left-side Girl */}
      <div className={`about-girl ${hideGirl ? 'fade-out' : ''}`}>
        <Lottie animationData={WandGirlAnimation} loop autoplay />
      </div>
      {/* Curtain Overlay */}
      {!curtainOpen && (
        <img
          src={CurtainGif}
          alt="Curtain opening"
          className="curtain-gif"
        />
      )}
      {/* About Me Content */}
      {showContent &&
        <div className={`about-content ${curtainOpen ? 'visible' : 'hidden'}`}>
          <h1>Hello, I’m Renuka 👩‍💻</h1>
          <p>I’m a front-end engineer passionate about creative UI & delightful UX...</p>
          {/* More content to come */}
        </div>}
    </div>
  );
};

export default AboutMe;

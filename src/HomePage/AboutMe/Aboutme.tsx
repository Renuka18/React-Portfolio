import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import WandGirlAnimation from '../../Assets/Womanwand.json';
import './AboutMe.css';
import CurtainGif from "../../Assets/curtainpull.gif";
import Mypicture from "../../Assets/Mypicture.jpeg";
import Skills from "../../Assets/Skills.json";
import Linkedin from "../../Assets/LinkedIn.json";
import Education from "../../Assets/GirlDegree.json";
import Email from "../../Assets/email.json";
import Phone from "../../Assets/Phone.json";
import Experience2 from "../../Assets/experience2.json";
import Resume from "../../Assets/Resume.json";
import Hobbies from "../../Assets/Hobbies.json";

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
          <div className="circle-container">
            {/* Center Photo */}
            <div className="center-photo">
              <img src={Mypicture} alt="Renuka" className="photo-sticker" />
            </div>

            {/* Circular Lottie Icons */}

            <div className="circle-icon icon1" data-label="Email">
              <Lottie animationData={Email} loop autoplay />
            </div>
            <div className="circle-icon icon2" data-label="Phone">
              <Lottie animationData={Phone} loop autoplay />
            </div>
            <div className="circle-icon icon3" data-label="LinkedIn">
              <Lottie animationData={Linkedin} loop autoplay />
            </div>
            <div className="circle-icon icon4" data-label="Resume">
              <Lottie animationData={Resume} loop autoplay />
            </div>
            <div className="circle-icon icon5" data-label="Skills">
              <Lottie animationData={Skills} loop autoplay />
            </div>
            <div className="circle-icon icon6" data-label="Education">
              <Lottie animationData={Education} loop autoplay />
            </div>
            <div className="circle-icon icon7" data-label="Experience">
              <Lottie animationData={Experience2} loop autoplay />
            </div>
            <div className="circle-icon icon8" data-label="Hobbies">
              <Lottie animationData={Hobbies} loop autoplay />
            </div>
          </div>

        </div>}
    </div>
  );
};

export default AboutMe;

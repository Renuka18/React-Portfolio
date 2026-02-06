import React, { useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-react';
import WalkingGirlAnime from '../../Assets/WomanWalkWithSuitCase.json';
import PointingLady from '../../Assets/Womandoingpresentation.json';
import './Animation.css';
import IntroCard from './Introcard';

const WalkingGirl = () => {
  const walkRef = useRef<any>(null);
  const [showPointing, setShowPointing] = useState(false);
  const [fadeOutWalk, setFadeOutWalk] = useState(false);
  const [showIntroCard, setShowIntroCard] = useState(false);

  useEffect(() => {
    const stopTime = 3000;

    // Fade out walking animation
    const fadeOutTimer = setTimeout(() => {
      setFadeOutWalk(true);
    }, stopTime);

    // Switch to pointing lady and show intro
    const switchTimer = setTimeout(() => {
      walkRef.current?.stop();
      setShowPointing(true);
      setShowIntroCard(true);
    }, stopTime + 1000); // wait 1s for fade-out

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(switchTimer);
    };
  }, []);

  const handleYes = () => {
    alert("Redirect to About Page or animate to it.");
  };

  const handleNo = () => {
    alert("You missed a golden opportunity!");
  };

  return (
    <div className="walking-girl">
      {!showPointing && (
        <Lottie
          lottieRef={walkRef}
          animationData={WalkingGirlAnime}
          autoplay
          loop
          className={fadeOutWalk ? 'fade-out' : 'visible'}
          style={{ width: '150px', height: 'auto' }}
        />
      )}

      {showPointing && (
        <Lottie
          animationData={PointingLady}
          autoplay
          loop
          className="fade-in"
          style={{ width: '180px', height: 'auto' }}
        />
      )}

      {showIntroCard && (
        // <div className="intro-card">
        //   <p>Hello, I'm Renuka 👋<br />Do you want to know more about me?</p>
        //   <div className="buttons">
        //     <button onClick={handleYes}>Yes</button>
        //     <button onClick={handleNo}>No</button>
        //   </div>
        // </div>
        <div>
          <IntroCard onYes={handleYes} onNo={handleNo}/>
        </div>
      )}
    </div>
  );
};

export default WalkingGirl;

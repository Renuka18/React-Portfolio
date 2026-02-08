import React, { useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-react';
import WalkingGirlAnime from '../../Assets/WomanWalkWithSuitCase.json';
import PointingLady from '../../Assets/Womandoingpresentation.json';
import Womanwaving from '../../Assets/Womanwavinghand.json';
import './Animation.css';
import IntroCard from './Introcard';

const WalkingGirl = () => {
  const walkRef = useRef<any>(null);
  const [showPointing, setShowPointing] = useState(false);
  const [fadeOutWalk, setFadeOutWalk] = useState(false);
  const [showIntroCard, setShowIntroCard] = useState(false);
  const [dropOut, setDropOut] = useState(false);

  const [showFunnyExit, setShowFunnyExit] = useState(false);
  const [doJump, setDoJump] = useState(false);
  const [showHole, setShowHole] = useState(false);
  const [showExitMessage, setShowExitMessage] = useState(false);
  
  const handleNo = () => {
    setShowIntroCard(false);
    setShowPointing(false);
  
    setTimeout(() => {
      setShowFunnyExit(true);
      setShowHole(true);
  
      setTimeout(() => {
        setDoJump(true);
  
        setTimeout(() => {
          setShowExitMessage(true);
        }, 1200); // after jump animation
      }, 2000); // wait for waving
    }, 500);
  };
  
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


  return (
    <div className="walking-girl">
      {!showPointing && (
        <Lottie
          lottieRef={walkRef}
          animationData={WalkingGirlAnime}
          autoplay
          loop
          className={fadeOutWalk ? 'fade-out' : 'visible'}
          style={{ width: '25vw', maxWidth: '150px', height: 'auto' }}

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
        <div>
          <IntroCard onYes={handleYes} onNo={handleNo}/>
        </div>
      )}
      {showFunnyExit && (
  <div className={`funny-exit ${doJump ? 'jump-into-hole' : ''}`}>
    <Lottie
      animationData={Womanwaving}
      autoplay
      loop={!doJump} // stop looping when jumping
      style={{ width: '45vw', maxWidth: '250px', height: 'auto' }}
      />
  </div>
)}
{showExitMessage && (
  <div className="exit-message">
  She’s gone... Missed a Golden Oppurtunity <br /> Maybe next time! 👋
</div>

)}
    </div>
  );
};

export default WalkingGirl;

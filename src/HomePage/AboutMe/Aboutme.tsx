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
import Modal from "../SlideModal/SlideModal";
import EmailContent from "../IconContent/Email/EmailContent";
import PhoneContent from "../IconContent/Phone/PhoneContent";
import LinkedinContent from "../IconContent/Linkedin/LinkedinContent";
import HobbiesContent from "../IconContent/Hobbies/Hobbies";
import ResumeContent from "../IconContent/Resume/ResumeContent";
import EducationContent from "../IconContent/Education/Education";
import SkillsContent from "../IconContent/Skills/Skills";
import ExperienceContent from "../IconContent/Experience/Experience";
import SummaryContent from "../IconContent/MySummary/Summary";

const AboutMe = () => {
  const [curtainOpen, setCurtainOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [hideGirl, setHideGirl] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpen = (type: string) => {
    setSelected(type);
    setIsModalOpen(true)
  };

  const handleClose = () => {
    setSelected(null);
    setIsModalOpen(false)

  };

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
              <img src={Mypicture} alt="Renuka" className="photo-sticker" onClick={() => handleOpen("Summary")} />
            </div>

            {/* Circular Lottie Icons */}

            <div className="circle-icon icon1" data-label="Email" onClick={() => handleOpen("Email")}>
              <Lottie animationData={Email} loop autoplay />
            </div>
            <div className="circle-icon icon2" data-label="Phone" onClick={() => handleOpen("Phone")}>
              <Lottie animationData={Phone} loop autoplay />
            </div>
            <div className="circle-icon icon3" data-label="LinkedIn" onClick={() => handleOpen("LinkedIn")}>
              <Lottie animationData={Linkedin} loop autoplay />
            </div>
            <div className="circle-icon icon4" data-label="Resume" onClick={() => handleOpen("Resume")}>
              <Lottie animationData={Resume} loop autoplay />
            </div>
            <div className="circle-icon icon5" data-label="Skills" onClick={() => handleOpen("Skills")}>
              <Lottie animationData={Skills} loop autoplay />
            </div>
            <div className="circle-icon icon6" data-label="Education" onClick={() => handleOpen("Education")}>
              <Lottie animationData={Education} loop autoplay />
            </div>
            <div className="circle-icon icon7" data-label="Experience" onClick={() => handleOpen("Experience")}>
              <Lottie animationData={Experience2} loop autoplay />
            </div>
            <div className="circle-icon icon8" data-label="Hobbies" >
              <Lottie animationData={Hobbies} loop autoplay onClick={() => handleOpen("Hobbies")}/>
            </div>
          </div>

        </div>}
      <Modal
        isOpen={isModalOpen}
        onClose={handleClose}
      >
        {selected === "Email" && <EmailContent />}
        {selected === "Phone" && <PhoneContent />}
        {selected === "LinkedIn" && <LinkedinContent />}
        {selected === "Hobbies" && <HobbiesContent />}
        {selected === "Resume" && <ResumeContent />}
        {selected === "Education" && <EducationContent />}
        {selected === "Skills" && <SkillsContent />}
        {selected === "Experience" && <ExperienceContent />}
        {selected === "Summary" && <SummaryContent />}
        {/* Add others as needed */}
      </Modal>

    </div>
  );
};

export default AboutMe;

import React from "react";
import Lottie from "lottie-react";
import graduationAnimation from "../../../Assets/Graduation Hat.json";
import "./Education.css";

const EducationContent = () => {
  return (
    <div className="education-container">
      
      {/* LEFT SIDE - LOTTIE */}
      <div className="education-left">
        <Lottie 
          animationData={graduationAnimation} 
          loop={true} 
          className="education-lottie"
        />
      </div>

      {/* RIGHT SIDE - CONTENT */}
      <div className="education-right">
        <div className="education-item">
          <h3>Master of Science in Computer Science</h3>
          <p className="education-school">Fairleigh Dickinson University</p>
          <p className="education-year">2015 – 2017</p>
        </div>

        <div className="education-divider" />

        <div className="education-item">
          <h3>Bachelor of Technology in Computer Science</h3>
          <p className="education-school">Vigan University</p>
          <p className="education-year">2011 – 2015</p>
        </div>
      </div>

    </div>
  );
};

export default EducationContent;

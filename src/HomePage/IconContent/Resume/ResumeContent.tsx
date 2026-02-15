// ResumeModal.tsx
import React from 'react';
import Lottie from 'lottie-react';
import resumeAnimation from '../../../Assets/Woman pointing left.json';
import './ResumeContent.css';

const ResumeContent = () => {
  return (
    <div className="resume-modal-container">
      <div className="resume-left">
        <Lottie animationData={resumeAnimation} loop />
      </div>
      <div className="resume-right">
        <h2>Ready to Collaborate?</h2>
        <p>
          Grab a copy of my resume and let’s work together! Whether it’s a
          freelance opportunity or a full-time role, I’m open to new
          possibilities.
        </p>
        <a
          href="/RenukaParuchuriResume.docx"
          download="Renuka_Paruchuri_Resume.docx"
          className="download-btn"
        >
          📄 Download Resume
        </a>
      </div>
    </div>
  );
};

export default ResumeContent;

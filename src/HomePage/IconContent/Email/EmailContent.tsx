import React from "react";
import Lottie from "lottie-react";
import EmailLottie from "../../../Assets/Womanwritingonletterpad.json";
import "./EmailContent.css";

const EmailContent = () => {
  return (
    <div className="email-modal-container">
      <div className="email-modal-left">
        <Lottie animationData={EmailLottie} loop autoplay />
      </div>
      <div className="email-modal-right">
        <p>
          Have a Career Opportunity, Question or just want to say hello?
        </p>
        <p>
          I’d love to hear from you. Feel free to reach out anytime!
        </p>
        <p className="email-address">
          📮 <a href="mailto:renukaparuchuric@gmail.com">renukaparuchuric@gmail.com</a>
        </p>
        <p className="email-response-note">
          I usually respond within 24 hours.
        </p>
      </div>
    </div>
  );
};

export default EmailContent;

import React from "react";
import Lottie from "lottie-react";
import SummaryAnimation from "../../../Assets/Woman using laptop.json"; // your summary lottie
import "./Summary.css";

const SummaryContent = () => {
  return (
    <div className="modal-split-container">
      
      {/* LEFT SIDE – LOTTIE */}
      <div className="modal-left">
        <Lottie animationData={SummaryAnimation} loop autoplay />
      </div>

      {/* RIGHT SIDE – CONTENT */}
      <div className="modal-right">
        <p>
        Senior Frontend Engineer with 9+ years of experience building scalable enterprise web applications using 
        React, and Angular.
        </p>
        <p>
        Experienced in Micro Frontend architecture and modern state management (Redux, Zustand).

        </p>
        <p>
        Proven track record modernizing legacy systems into high-performance React architectures, 
        improving performance, ensuring WCAG 2.x accessibility compliance,  and delivering  maintainable solutions 
        in Agile environments.
        </p>

        
      </div>

    </div>
  );
};

export default SummaryContent;

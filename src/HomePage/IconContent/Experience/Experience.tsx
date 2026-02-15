import React from "react";
import "./Experience.css";

const experiences = [
  { company: "WellsFargo", role: "Senior Software Engineer(Frontend / React Developer)", duration: "Feb 2022 – Feb 2026" },
  { company: "Broadridge Financial Solutions", role: " Software Engineer (UI / React Developer)", duration: "May 2021 - Feb 2022" },
  { company: "USAA", role: "Software Engineer (UI / React Developer)", duration: "Nov 2018 – May 2021" },
  { company: "CVS Health", role: "Software Engineer (UI / Angular Developer)", duration: "June 2018 – Nov 2018" },
  { company: "Fidelity Investments", role: "Software Engineer (UI / Angular Developer) ", duration: "Sep 2017 – April 2018" },
  { company: "Eightfolds", role: "Intern (UI Developer)", duration: "May 2014 – May 2015" },
];

const ExperienceContent = () => {
  return (
    <div className="timeline-wrapper">
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <h3>{exp.role}</h3>
            <p className="timeline-company">{exp.company}</p>
            <span className="timeline-duration">{exp.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceContent;

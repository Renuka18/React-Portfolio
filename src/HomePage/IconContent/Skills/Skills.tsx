import React from "react";
import "./Skills.css";

const SkillsContent = () => {
  return (
    <div className="skills-wrapper">
      <div className="skills-grid">

        <div className="skill-card">
          <h3>Frontend Engineering</h3>
          <p>
            React.js, TypeScript, JavaScript (ES6+), Angular (AngularJS, Angular 6+),
            HTML5, CSS3, JSX, Vue.js, Single Page Applications (SPA)
          </p>
        </div>

        <div className="skill-card">
          <h3>State Management</h3>
          <p>
            Redux, Redux Toolkit, Redux Thunk, Redux Saga,
            Zustand, Flux Architecture, RxJS
          </p>
        </div>

        <div className="skill-card">
          <h3>Architecture & UI Systems</h3>
          <p>
            Micro Frontend Architecture (MFE), Webpack Module Federation,
            Configuration-Driven UI, Dynamic Forms, Tables & Modal Workflows
          </p>
        </div>

        <div className="skill-card">
          <h3>Backend & API Integration</h3>
          <p>
            RESTful APIs, GraphQL, Node.js, Express.js,
            JSON, AJAX, Axios
          </p>
        </div>

        <div className="skill-card">
          <h3>Testing & Quality</h3>
          <p>
            Jest, Mocha, Chai, Karma, Jasmine, Protractor,
            Unit Testing, Integration Testing,
            End-to-End Testing, Accessibility Testing
          </p>
        </div>

        <div className="skill-card">
          <h3>Tools & Methodologies</h3>
          <p>
            Git, GitHub, GitLab, VS Code, Postman,
            Splunk, GitHub Copilot, Cursor AI,
            Agile, Scrum, SDLC
          </p>
        </div>

      </div>
    </div>
  );
};

export default SkillsContent;

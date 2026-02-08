import React from "react";
import './Homepage.css';
import AnimationsHomePage from "./Animation/Animations";
import AboutMe from "./AboutMe/Aboutme";


const HomePage = () => {
    const [showAbout, setShowAbout] = React.useState(false);

  const handleYesClick = () => {
    // Optional: trigger curtain animation here
    console.log("helooooo")
    setShowAbout(true);
  };

    return (
        <React.Fragment>
            <div className="container">
            <AnimationsHomePage onYesClick={handleYesClick}/>
            {showAbout && <AboutMe />}
            </div>
        </React.Fragment>
    )
}

export default HomePage;
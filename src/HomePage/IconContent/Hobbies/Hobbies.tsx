import React from 'react';
import Lottie from 'lottie-react';
import Hobby1 from "../../../Assets/Girl playing piano.json"
import Hobby2 from '../../../Assets/Girl making paper art.json';
import Hobby3 from '../../../Assets/Girl playing guitar.json';
import Hobby4 from '../../../Assets/A sitting girl doing yoga is using mobile.json';
import Hobby5 from '../../../Assets/Girl Riding a Bicycle in the City.json';
import Hobby7 from '../../../Assets/Woman reading on Swing.json';
import Hobby8 from '../../../Assets/Girl listening music.json';
import Hobby9 from '../../../Assets/Handbook.json';
import "./Hobbies.css";


const hobbies = [
  { id: 1, animation: Hobby1, label: 'Piano' },
  { id: 2, animation: Hobby2, label: 'Crafts' },
  { id: 3, animation: Hobby3, label: 'Guitar' },
  { id: 4, animation: Hobby4, label: 'Puzzles' },
  { id: 5, animation: Hobby5, label: 'Cycling' },
  { id: 7, animation: Hobby7, label: 'Reading' },
  { id: 8, animation: Hobby8, label: 'Music' },
  { id: 9, animation: Hobby9, label: 'Writing' },

];

const HobbiesContent = () => {
  return (
    <div className="hobbies-grid">
      {hobbies.map(hobby => (
        <div className="hobby-item" key={hobby.id}>
          <div className="hobby-lottie">
            <Lottie animationData={hobby.animation} loop autoplay />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HobbiesContent;
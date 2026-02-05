import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import WalkingGirlAnime from '../../Assets/Girl-walk.json';
import "./Animation.css";

const WalkingGirl = () => {
    const lottieRef = useRef<any>(null);

    useEffect(() => {
        const stopTime = 14000;
         const timer = setTimeout(() => {
            lottieRef?.current?.stop();
        }, stopTime)
        return () => clearTimeout(timer);
    })

    return (
        <div className="walking-girl">
        <Lottie lottieRef={lottieRef} animationData={WalkingGirlAnime} autoplay={true} loop={true} style={{width: '200px', height: 'auto'}}
        ></Lottie>
        </div>
    )
}

export default WalkingGirl;
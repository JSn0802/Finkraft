import React from "react";
import "./Home.css";
import { TypeAnimation } from 'react-type-animation';

const Home = () => {

  return (
    <div className="Home">
        
      <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Finkraft: Where ideas meet innovation',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Finkraft: Where data meets insights',
        1000,
        'Finkraft: Where intelligence meets intution',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '45px', display: 'inline-block', fontWeight:'bold' }}
      repeat={Infinity}
    />
    </div>
  );
};

export default Home;

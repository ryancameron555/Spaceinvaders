/** @format */

import React, { useEffect, useState } from 'react';
import './background.css';

import PlanetA from '../components/planets/planetA';
import PlanetB from '../components/planets/planetB';
import PlanetC from '../components/planets/planetC';

const SpaceBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const starElements = [];
    for (let i = 0; i < 100; i++) {
      const size = Math.random() * 3 + 'px';
      const starStyle = {
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        width: size,
        height: size,
        animationDuration: Math.random() * 3 + 1 + 's',
      };
      starElements.push(<div key={i} className="star" style={starStyle}></div>);
    }
    setStars(starElements);
  }, []);

  return (
    <div className="space-background">
      <div className="stars">{stars}</div>
      <PlanetA />
      <PlanetB />
      <PlanetC />
    </div>
  );
};

export default SpaceBackground;

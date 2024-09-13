/** @format */

import React from 'react';
import PlanetC from '../../assets/planets/PlanetC.png';

const planetC = () => {
  const planetStyle = {
    position: 'absolute',
    backgroundImage: `url(${PlanetC})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    width: '10%',
    height: '10%',
    left: '80%', // Example position
    top: '35%', // Example position
    transformOrigin: 'center', // Center the rotation
    animation: 'circularMotion 15s linear infinite',
  };

  return <div style={planetStyle}></div>;
};

export default planetC;

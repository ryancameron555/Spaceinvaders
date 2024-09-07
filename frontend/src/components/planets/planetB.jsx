/** @format */

import React from 'react';
import PlanetB from '../../assets/planets/PlanetB.png';

const planetB = () => {
  const planetStyle = {
    position: 'absolute',
    backgroundImage: `url(${PlanetB})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    width: '5%',
    height: '5%',
    left: '75%', // Example position
    top: '75%', // Example position,
    transformOrigin: 'center', // Center the rotation
    animation: 'circularMotion 20s linear infinite',
  };

  return <div style={planetStyle}></div>;
};

export default planetB;

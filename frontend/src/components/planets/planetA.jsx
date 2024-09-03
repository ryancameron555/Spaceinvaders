/** @format */

import React from 'react';
import PlanetA from '../../assets/planets/PlanetA.png';

const planetA = () => {
  const planetStyle = {
    position: 'absolute',
    backgroundImage: `url(${PlanetA})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    width: '20%',
    height: '20%',
    left: '10%', // Example position
    top: '20%', // Example position
    transformOrigin: 'center', // Center the rotation
    animation: 'circularMotion 20s linear infinite',
  };

  return <div style={planetStyle}></div>;
};

export default planetA;

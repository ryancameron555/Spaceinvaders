/** @format */

import React from 'react';
import enemy2Image from '../assets/enemy/enemy2.png';

const Enemy2 = ({ x, y }) => {
  return (
    <img
      src={enemy2Image}
      alt="Enemy2"
      style={{
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        width: '50px',
        height: '50px',
      }}
    />
  );
};

export default Enemy2;

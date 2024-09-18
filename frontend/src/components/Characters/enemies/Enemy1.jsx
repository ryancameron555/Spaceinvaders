/** @format */

import React from 'react';
import enemy1Image from '../assets/enemy/enemy1.png';

const Enemy1 = ({ x, y }) => {
  return (
    <img
      src={enemy1Image}
      alt="Enemy1"
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

export default Enemy1;

/** @format */

import React from 'react';
import enemy3Image from '../assets/enemy/enemy3.png';

const Enemy3 = ({ x, y }) => {
  return (
    <img
      src={enemy3Image}
      alt="Enemy3"
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

export default Enemy3;

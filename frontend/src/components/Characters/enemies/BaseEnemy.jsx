/** @format */

import React from 'react';

const BaseEnemy = ({ image, x, y, width = 25, height = 25 }) => {
  const enemyStyle = {
    position: 'absolute',
    left: `${x}px`,
    top: `${y}px`,
    width: `${width}px`,
    height: `${height}px`,
  };

  return <img src={image} alt="Enemy" style={enemyStyle} />;
};

export default BaseEnemy;

/** @format */

import React from 'react';
import lifeImage from '../../../assets/player/heart.png'; // Path to the life image

const Lives = ({ lives }) => {
  const lifeStyle = {
    width: '30px', // Adjust size as needed
    height: '30px',
    marginBottom: '5px', // Spacing between life images
  };

  const containerStyle = {
    position: 'fixed', // Use 'fixed' to position relative to the viewport
    top: '10%', // Adjust this value to move up/down from the top
    right: '3.5%', // Adjust this value to move left/right from the right edge
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <div style={containerStyle}>
      {Array.from({ length: lives }).map((_, index) => (
        <img key={index} src={lifeImage} alt="Life" style={lifeStyle} />
      ))}
    </div>
  );
};

export default Lives;

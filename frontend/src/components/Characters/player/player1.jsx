/** @format */
import React from 'react';
import playerImage from '../../assets/player/ship1.png'; // Adjust the path to your player image

const Player1 = () => {
  // Styling for the player
  const playerStyle = {
    width: '100px', // Adjust size as needed
    height: 'auto', // Maintain aspect ratio
    position: 'absolute', // Adjust positioning
    bottom: '20px', // Position at the bottom
    left: '20px', // Position from the left
    zIndex: 10, // Ensure it's on top
  };

  return (
    <div>
      <img src={playerImage} alt="Player" style={playerStyle} />
    </div>
  );
};

export default Player1;

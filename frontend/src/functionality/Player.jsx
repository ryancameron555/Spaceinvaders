/** @format */

import React, { useState, useEffect } from 'react';
import playerImage from '../assets/player/ship1.png';

const Player = () => {
  const [position, setPosition] = useState({ x: window.innerWidth / 2 - 25 });

  const playerStyle = {
    position: 'absolute',
    bottom: '10px', // Position the player near the bottom of the game area
    left: `${position.x}px`, // Horizontal position
    transition: 'left 0.1s linear', // Smooth movement
  };

  const handleResize = () => {
    // Ensure the player remains within the bounds on resize
    setPosition((prev) => ({
      x: Math.min(prev.x, window.innerWidth - 50),
    }));
  };

  const handleKeyDown = (e) => {
    const step = 15; // Movement speed
    const containerWidth = window.innerWidth * 0.825; // Calculate width based on 82.5%

    if (e.key === 'ArrowLeft' || e.key === 'a') {
      setPosition((prev) => ({
        x: Math.max(prev.x - step, 0), // Prevent player from moving out of bounds on the left
      }));
    } else if (e.key === 'ArrowRight' || e.key === 'd') {
      setPosition((prev) => ({
        x: Math.min(prev.x + step, containerWidth - 50), // Prevent player from moving out of bounds on the right
      }));
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <img
      src={playerImage} // Path to the player image
      alt="Player"
      style={{ ...playerStyle, width: '50px', height: '50px' }} // Adjust width/height as needed
    />
  );
};

export default Player;

/** @format */

import React, { useState } from 'react';
import Lives from '../components/Lives';
import GameArea from '../functionality/GameArea';
import PauseButton from '../components/buttons/pause';
import HomeButton from '../components/buttons/home';

const Gameplay = () => {
  const [lives, setLives] = useState(3);

  // Example function to decrease lives
  const handleHit = () => {
    if (lives > 0) {
      setLives(lives - 1);
    }
  };

  return (
    <div>
      <h1>Game Page</h1>
      <PauseButton />
      <HomeButton />
      <Lives lives={lives} />
      <GameArea onHit={handleHit} />{' '}
      {/* Pass handleHit to GameArea if needed */}
    </div>
  );
};

export default Gameplay;

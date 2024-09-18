/** @format */
import React, { useState } from 'react';
import PauseButton from '../components/buttons/pause';
import HomeButton from '../components/buttons/home';
import GameArea from '../functionality/GameArea';
import Lives from '../components/Characters/lives/lives';

const Game = () => {
  const [lives, setLives] = useState(3);

  const handleHit = () => {
    if (lives > 0) {
      setLives(lives - 1);
    }
  };

  const gamePageStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'black',
  };

  return (
    <div style={gamePageStyle}>
      <div style={{ position: 'absolute', top: '50', left: '10px', zIndex: 2 }}>
        <PauseButton />
        <HomeButton />
        <Lives lives={lives} />
      </div>
      <GameArea onHit={handleHit} />
    </div>
  );
};

export default Game;

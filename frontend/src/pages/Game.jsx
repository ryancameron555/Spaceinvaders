/** @format */
import React from 'react';
import PauseButton from '../components/buttons/pause';
import HomeButton from '../components/buttons/home';
import GameArea from '../functionality/GameArea';

const Game = () => {
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
      <div
        style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 2 }}
      >
        <PauseButton />
        <HomeButton />
      </div>
      <GameArea />
    </div>
  );
};

export default Game;

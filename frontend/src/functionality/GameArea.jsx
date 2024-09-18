/** @format */

import React from 'react';
import Player from './Player';
import Enemies from './Enemies';

const GameArea = () => {
  const gameContainerStyle = {
    width: '82.5%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    border: '2px solid white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    backgroundColor: 'black',
  };

  return (
    <div style={gameContainerStyle}>
      <Player />
      <Enemies />
    </div>
  );
};

export default GameArea;

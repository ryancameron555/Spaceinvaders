/** @format */

import React from 'react';
import { HomeStyles } from './PageStyles';
import StartButton from '../components/buttons/StartButton';

const Home = () => {
  return (
    <div>
      <HomeStyles.H1>Space Invaders</HomeStyles.H1>

      <HomeStyles.H2>Scoreboard</HomeStyles.H2>
      <HomeStyles.Ol>
        <li>Player 1: 1000</li>
        <li>Player 2: 1000</li>
        <li>Player 3: 1000</li>
      </HomeStyles.Ol>
      <StartButton />
    </div>
  );
};

export default Home;

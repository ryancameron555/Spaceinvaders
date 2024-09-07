/** @format */

import React from 'react';
import SpaceBackground from '../Background/background';
import SpaceInvadersTitle from '../components/banner/title';
import StartB from '../components/buttons/StartButton';

const Home = () => {
  return (
    <div>
      <SpaceBackground />
      <div>
        <SpaceInvadersTitle />
        <StartB />
      </div>
    </div>
  );
};

export default Home;

/** @format */

import SpaceInvadersTitle from '../components/banner/title';
import StartB from '../components/buttons/StartButton';
import Sidebar from '../components/scoreboard/sidebar';

const Home = () => {
  return (
    <div>
      <div>
        <SpaceInvadersTitle />
        <StartB />
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;

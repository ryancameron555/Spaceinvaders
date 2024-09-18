/** @format */

import BaseEnemy from './BaseEnemy';
import enemy2Image from '../../../assets/enemy/enemy2.png';

const Enemy2 = ({ x, y }) => {
  return <BaseEnemy image={enemy2Image} x={x} y={y} />;
};

export default Enemy2;

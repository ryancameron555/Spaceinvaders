/** @format */

import BaseEnemy from './BaseEnemy';
import enemy1Image from '../../../assets/enemy/enemy1.png';

const Enemy1 = ({ x, y }) => {
  return <BaseEnemy image={enemy1Image} x={x} y={y} />;
};

export default Enemy1;

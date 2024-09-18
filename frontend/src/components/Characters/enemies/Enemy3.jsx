/** @format */

import BaseEnemy from './BaseEnemy';
import enemy3Image from '../../../assets/enemy/enemy3.png';

const Enemy3 = ({ x, y }) => {
  return <BaseEnemy image={enemy3Image} x={x} y={y} />;
};

export default Enemy3;

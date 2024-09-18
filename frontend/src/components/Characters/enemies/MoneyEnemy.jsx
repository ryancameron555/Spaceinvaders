/** @format */

import BaseEnemy from './BaseEnemy';
import moneyEnemyImage from '../../../assets/enemy/money.png';

const MoneyEnemy = ({ x, y }) => {
  return <BaseEnemy image={moneyEnemyImage} x={x} y={y} />;
};

export default MoneyEnemy;

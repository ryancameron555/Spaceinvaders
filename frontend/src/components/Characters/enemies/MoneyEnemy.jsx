/** @format */

import React from 'react';
import moneyEnemyImage from '../assets/enemy/money.png';

const MoneyEnemy = ({ x, y }) => {
  return (
    <img
      src={moneyEnemyImage}
      alt="MoneyEnemy"
      style={{
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        width: '50px',
        height: '50px',
      }}
    />
  );
};

export default MoneyEnemy;

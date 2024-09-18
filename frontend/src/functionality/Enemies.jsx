/** @format */

import React, { useState, useEffect } from 'react';
import Enemy1 from '../components/Characters/enemies/Enemy1';
import Enemy2 from '../components/Characters/enemies/Enemy2';
import Enemy3 from '../components/Characters/enemies/Enemy3';
import MoneyEnemy from '../components/Characters/enemies/MoneyEnemy';

const Enemies = () => {
  const [enemies, setEnemies] = useState([
    { type: 'Enemy1', x: 50, y: 50 },
    { type: 'Enemy2', x: 150, y: 50 },
    { type: 'Enemy3', x: 250, y: 50 },
    { type: 'MoneyEnemy', x: 350, y: 50 },
    // Add more enemies as needed
  ]);

  const moveEnemies = () => {
    setEnemies((prevEnemies) =>
      prevEnemies.map((enemy) => ({
        ...enemy,
        y: enemy.y + 1, // Example movement: move enemies down by 1 pixel
      }))
    );
  };

  useEffect(() => {
    const intervalId = setInterval(moveEnemies, 100); // Move enemies every 100 ms

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  return (
    <>
      {enemies.map((enemy, index) => {
        switch (enemy.type) {
          case 'Enemy1':
            return <Enemy1 key={index} x={enemy.x} y={enemy.y} />;
          case 'Enemy2':
            return <Enemy2 key={index} x={enemy.x} y={enemy.y} />;
          case 'Enemy3':
            return <Enemy3 key={index} x={enemy.x} y={enemy.y} />;
          case 'MoneyEnemy':
            return <MoneyEnemy key={index} x={enemy.x} y={enemy.y} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export default Enemies;

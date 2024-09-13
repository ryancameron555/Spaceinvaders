/** @format */

// src/Routes.js
// import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Game from '../pages/Game';
import Account from '../pages/Account';
import Settings from '../pages/Settings';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/game" element={<Game />} />
    <Route path="/account" element={<Account />} />
    <Route path="/settings" element={<Settings />} />
  </Routes>
);

export default AppRoutes;

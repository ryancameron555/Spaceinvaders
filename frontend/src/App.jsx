/** @format */

// import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import Account from './pages/Account';
import Settings from './pages/Settings';
import SoundToggle from '../src/components/buttons/sound';
import SettingsButton from './components/buttons/settings';
import ProfileButton from './components/buttons/profile';
import SpaceBackground from './Background/background';

// const NavBar = () => (
//   <nav>
//     <Link to="/">Home</Link> |<Link to="/game">Game</Link> |
//     <Link to="/account">Account</Link> |<Link to="/settings">Settings</Link>
//   </nav>
// );

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/game" element={<Game />} /> {/* Game page */}
        <Route path="/account" element={<Account />} /> {/* Account page */}
        <Route path="/settings" element={<Settings />} /> {/* Settings page */}
      </Routes>

      <SpaceBackground />
      <SoundToggle />
      <SettingsButton />
      <ProfileButton />
    </Router>
  );
};
export default App;

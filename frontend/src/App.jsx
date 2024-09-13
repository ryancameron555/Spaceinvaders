/** @format */

// src/App.js
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/Routes'; // Import the Routes component
import SoundToggle from './components/buttons/sound';
import SettingsButton from './components/buttons/settings';
import ProfileButton from './components/buttons/profile';
import SpaceBackground from './Background/background';

const App = () => {
  return (
    <Router>
      <AppRoutes />
      <SpaceBackground />
      <SoundToggle />
      <SettingsButton />
      <ProfileButton />
    </Router>
  );
};

export default App;

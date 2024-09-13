/** @format */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCog } from 'react-icons/fa'; // Import the gear icon

const SettingsButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/settings'); // Navigate to the settings page
  };

  const buttonStyle = {
    padding: '10px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    position: 'fixed',
    top: '2%',
    left: '1%',
    fontSize: '2vh', // Make the icon bigger
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      <FaCog /> {/* Render the gear cog icon */}
    </button>
  );
};

export default SettingsButton;

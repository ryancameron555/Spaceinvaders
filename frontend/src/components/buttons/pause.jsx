/** @format */
import React from 'react';
import { FaPause } from 'react-icons/fa'; // Import the pause icon

const PauseButton = ({ onPause }) => {
  const buttonStyle = {
    padding: '10px',
    backgroundColor: 'yellow',
    color: 'black',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    position: 'fixed',
    top: '2%',
    right: '6%',
    fontSize: '2vh', // Make the icon bigger
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <button onClick={onPause} style={buttonStyle}>
      <FaPause /> {/* Render the pause icon */}
    </button>
  );
};

export default PauseButton;

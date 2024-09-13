/** @format */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa'; // Import the home icon

const HomeButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/'); // Navigate to the home page
  };

  const buttonStyle = {
    padding: '10px',
    backgroundColor: 'orange',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    position: 'fixed',
    top: '2%',
    left: '6%',
    fontSize: '2vh', // Make the icon bigger
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      <FaHome /> {/* Render the home icon */}
    </button>
  );
};

export default HomeButton;

/** @format */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa'; // Import the profile icon

const ProfileButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/account'); // Navigate to the account/profile page
  };

  const buttonStyle = {
    padding: '10px',
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    position: 'fixed',
    top: '2%',
    right: '1%',
    fontSize: '2vh', // Make the icon bigger
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      <FaUser /> {/* Render the profile icon */}
    </button>
  );
};

export default ProfileButton;

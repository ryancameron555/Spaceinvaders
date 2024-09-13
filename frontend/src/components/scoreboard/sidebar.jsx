/** @format */

import React, { useState } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'; // Import arrows for expanding/collapsing

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track sidebar open/close

  // Toggle sidebar open/close
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Sidebar styling
  const sidebarStyle = {
    position: 'fixed',
    top: '0',
    right: '0',
    width: isOpen ? '250px' : '60px', // Expanded width vs closed width
    height: '100%',
    backgroundColor: '#333',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: isOpen ? 'flex-start' : 'center',
    justifyContent: 'flex-start',
    transition: 'width 0.3s ease', // Smooth transition when expanding/collapsing
    overflow: 'hidden',
    padding: '10px',
    boxSizing: 'border-box', // Ensure padding is included in width calculation
  };

  const toggleButtonStyle = {
    position: 'absolute',
    bottom: '5vh',
    right: isOpen ? '12vw' : 'auto',
    left: !isOpen ? '-1vw' : 'auto',
    backgroundColor: 'transparent',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    fontSize: '20px',
  };

  const scoreboardTextStyle = {
    fontSize: '18px',
    display: isOpen ? 'block' : 'none', // Only show when sidebar is open
    marginTop: '50px',
  };

  const collapsedTextStyle = {
    fontSize: '18px',
    color: 'white',
    textAlign: 'center',
    transform: 'rotate(90deg)', // Rotate text when sidebar is closed
    transformOrigin: 'left bottom',
    position: 'absolute',
    top: '50%',
    left: '10px',
    whiteSpace: 'nowrap',
    marginTop: '0',
    marginLeft: '0',
  };

  return (
    <div style={sidebarStyle}>
      {/* Toggle Button */}
      <button onClick={toggleSidebar} style={toggleButtonStyle}>
        {isOpen ? <FaChevronRight /> : <FaChevronLeft />}
      </button>

      {/* Scoreboard Text */}
      <div style={isOpen ? scoreboardTextStyle : collapsedTextStyle}>
        {isOpen ? (
          <div>
            <h3 style={{ fontSize: '18px', textAlign: 'center' }}>
              SCOREBOARD
            </h3>
            <ul
              style={{ listStyleType: 'none', padding: '0', marginTop: '20px' }}
            >
              <li>Player 1: 1000</li>
              <li>Player 2: 900</li>
              <li>Player 3: 850</li>
              {/* Add more players and scores as needed */}
            </ul>
          </div>
        ) : (
          'Scoreboard'
        )}
      </div>
    </div>
  );
};

export default Sidebar;

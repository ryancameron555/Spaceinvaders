/** @format */
import React, { useState, useRef, useEffect } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa'; // Speaker icons
import MusicFile from '../../assets/sound/MainSound.mp3'; // Adjust the path to your music file

const SoundToggle = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.15); // Default volume is 15%
  const [showVolumeControl, setShowVolumeControl] = useState(false); // State to show/hide volume slider
  const audioRef = useRef(null);
  const timeoutRef = useRef(null);

  // Set default volume when component mounts
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.15; // Set audio element volume to 15%
      audioRef.current.play(); // Automatically play music
    }
  }, []);

  // Function to toggle music playback
  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Function to adjust volume
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;

    // Reset the timeout to hide the slider after a few seconds
    resetHideTimeout();
  };

  // Auto-play music after the first user interaction
  useEffect(() => {
    const handleUserInteraction = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.15;
        audioRef.current.play();
        setIsPlaying(true);
      }
      window.removeEventListener('click', handleUserInteraction);
    };

    window.addEventListener('click', handleUserInteraction);

    return () => {
      window.removeEventListener('click', handleUserInteraction);
    };
  }, []);

  // Show the volume control
  const showVolume = () => {
    setShowVolumeControl(true);
    resetHideTimeout();
  };

  // Hide the volume control after 3 seconds
  const hideVolume = () => {
    timeoutRef.current = setTimeout(() => {
      setShowVolumeControl(false);
    }, 3000);
  };

  // Reset the timeout to hide the volume control
  const resetHideTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    hideVolume();
  };

  // Clear timeout on component unmount
  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const containerStyle = {
    position: 'fixed',
    bottom: '2%',
    left: '1%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const buttonStyle = {
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2vh',
  };

  const sliderStyle = {
    marginTop: '10px',
    display: showVolumeControl ? 'block' : 'none', // Show/hide slider
    width: '100px',
  };

  return (
    <div
      style={containerStyle}
      onMouseEnter={showVolume} // Show slider on hover for desktop
      onMouseLeave={resetHideTimeout} // Hide slider after leaving the button area
      onTouchStart={showVolume} // Show slider on touch for mobile
      onTouchEnd={resetHideTimeout} // Hide slider after a few seconds on mobile
    >
      <button onClick={toggleMusic} style={buttonStyle}>
        {isPlaying ? <FaVolumeUp /> : <FaVolumeMute />}
      </button>

      {/* Volume slider */}
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
        style={sliderStyle}
      />

      {/* Audio element */}
      <audio ref={audioRef} loop>
        <source src={MusicFile} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default SoundToggle;

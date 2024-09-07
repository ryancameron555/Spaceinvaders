/** @format */
import React, { useState, useRef } from 'react';
import MusicFile from '../../assets/music.mp3'; // Adjust the path to your music file

const SoundToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Function to toggle music playback
  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const buttonStyle = {
    position: 'fixed',
    bottom: '20px',
    left: '20px',
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div>
      <button onClick={toggleMusic} style={buttonStyle}>
        {isPlaying ? 'Turn Music Off' : 'Turn Music On'}
      </button>

      {/* Audio element */}
      <audio ref={audioRef} loop>
        <source src={MusicFile} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default SoundToggle;

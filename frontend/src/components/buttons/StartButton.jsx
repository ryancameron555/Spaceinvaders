/** @format */
import StartImage from '../../assets/startimage.png';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const StartB = () => {
  const titleStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '25%',
    animation: 'zoomTitle 2s infinite alternate',
  };

  const imgStyle = {
    width: '25%',
    maxWidth: '600px',
  };

  return (
    <div style={titleStyle}>
      {/* Link to the new page */}
      <Link to="/Game">
        <img src={StartImage} alt="Start" style={imgStyle} />
      </Link>
      <style jsx>{`
        @keyframes zoomTitle {
          0% {
            transform: scale(0.75);
          }
          100% {
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  );
};

export default StartB;

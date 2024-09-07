/** @format */
import StartImage from '../../assets/startimage.png';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const StartB = () => {
  const titleStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
    animation: 'zoomTitle 2s infinite alternate',
  };

  const imgStyle = {
    width: '50%',
    maxWidth: '600px',
  };

  return (
    <div style={titleStyle}>
      {/* Link to the new page */}
      <Link to="/newpage">
        <img src={StartImage} alt="Start" style={imgStyle} />
      </Link>
      <style jsx>{`
        @keyframes zoomTitle {
          0% {
            transform: scale(1);
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

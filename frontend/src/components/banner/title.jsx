/** @format */
import TitleImage from '../../assets/titleimage.png';

const SpaceInvadersTitle = () => {
  const titleStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    animation: 'moveTitle 5s infinite alternate',
    margin: '10vh',
  };

  const imgStyle = {
    width: '100%',
    maxWidth: '600px',
  };

  return (
    <div style={titleStyle}>
      <img src={TitleImage} alt="Title" style={imgStyle} />
      <style jsx>{`
        @keyframes moveTitle {
          0% {
            transform: translateY(-30px);
          }
          100% {
            transform: translateY(30px);
          }
        }
      `}</style>
    </div>
  );
};

export default SpaceInvadersTitle;

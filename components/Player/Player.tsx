import { Frame } from './Player.styled';

const Player = ({ contentSrc }) => {
  return (
    <Frame>
      <iframe
        src={contentSrc}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </Frame>
  );
};

export default Player;

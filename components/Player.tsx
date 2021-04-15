import { FC } from 'react';

interface IPlayerProps {
  contentSrc: string;
  title: string;
}

const Player: FC<IPlayerProps> = ({ contentSrc, title }) => {
  return (
    <iframe
      height='315'
      src={contentSrc}
      allowFullScreen
      title={title}
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      className='w-full'
    ></iframe>
  );
};

export default Player;

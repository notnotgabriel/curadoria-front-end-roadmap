interface Props {
  contentSrc: string;
  title: string;
}

const Player = ({ contentSrc, title }: Props) => {
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

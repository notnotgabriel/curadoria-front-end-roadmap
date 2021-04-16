import { FC, useState, useRef, useLayoutEffect } from 'react';

interface IPlayerProps {
  contentSrc: string;
  title: string;
}

const Player: FC<IPlayerProps> = ({ contentSrc, title }) => {
  const iframeRef = useRef(null);
  const [iframeHeight, setIframeHeight] = useState(720);

  useLayoutEffect(() => {
    function handleResize() {
      const iframeWidth = iframeRef?.current?.getBoundingClientRect().width;
      const newIframeheight = 0.56 * iframeWidth;
      setIframeHeight(newIframeheight);
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <iframe
        ref={iframeRef}
        height={iframeHeight}
        src={contentSrc}
        allowFullScreen
        title={title}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        className='w-full'
      ></iframe>
      <p className='font-semibold p-4'>{title}</p>
    </div>
  );
};

export default Player;

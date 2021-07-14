import { FC, useState, useRef, useLayoutEffect } from "react";

interface IPlayerProps {
  contentSrc: string;
  title: string;
}

const Player: FC<IPlayerProps> = ({ contentSrc, title }) => {
  const iframeRef = useRef(null);
  const [[iframeWidth, iframeHeight], setIframeHeight] = useState([872, 720]);

  const isVideoContent = contentSrc.includes("youtube");

  useLayoutEffect(() => {
    function handleResize() {
      const iframeWidth = iframeRef?.current?.getBoundingClientRect().width;
      const newIframeheight = 0.56 * iframeWidth;
      setIframeHeight([iframeWidth, newIframeheight]);
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {isVideoContent ? (
        <iframe
          ref={iframeRef}
          height={iframeHeight}
          src={contentSrc}
          allowFullScreen
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="w-full"
        ></iframe>
      ) : (
        <a
          ref={iframeRef}
          href={contentSrc}
          target="_blank"
          className="block relative"
        >
          <img
            src="/images/reading.jpg"
            width={`${iframeWidth}px`}
            height={`${iframeHeight}px`}
            className="filter brightness-75"
          />

          <div className="bg-white absolute rounded-sm pt-2 pb-0 w-3/4 left-1/2 -translate-x-1/2 -top-4 text-center shadow">
            <p className="my-2">Clique para acessar este conteúdo em texto</p>
            <div className="w-full bg-red-500 h-1" />
          </div>
        </a>
      )}

      <p className="font-semibold py-4">{title}</p>
    </div>
  );
};

export default Player;

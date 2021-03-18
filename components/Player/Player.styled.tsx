import styled from 'styled-components';

import playIcon from '../../public/images/icons/play.svg';

export const FrameOverlay = styled.div`
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  font-size: 1.3em;
  margin: 0;
  min-height: 30px;
  padding: 1em;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
`;

export const FrameTitle = styled.p`
  font-size: 0.8em;
  font-weight: 300;
  margin: 0;
  max-width: 80%;
  padding: 0;
`;

export const Frame = styled.div`
  background: #5d5d5d;
  border: 5px solid #5d5d5d;
  border-radius: 3px;
  height: 315px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  width: 560px;

  iframe,
  a {
    display: block;
    height: 100%;
    width: 100%;
  }
`;

export const PlayIcon = styled(playIcon)`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 68px;

  path:first-child {
    fill-opacity: 0.8;
    fill: #212121;

    transition: fill 0.1s cubic-bezier(0.4, 0, 1, 1),
      fill-opacity 0.1s cubic-bezier(0.4, 0, 1, 1);
  }

  ${Frame}:hover & {
    path:first-child {
      fill: #f01;
    }
  }
`;

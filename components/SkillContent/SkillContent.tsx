import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import {
  Frame,
  FrameOverlay,
  FrameTitle,
  PlayIcon,
} from '../Player/Player.styled';
import Player from '../Player/Player';

const SkillContainer = styled.section`
  padding-top: 5em;
`;

const StyledImage = styled(Image)`
  filter: saturate(0.5);
`;

const SkillContent = ({ title, url }) => {
  const isYoutube = url.includes('youtube.com');

  return (
    <SkillContainer>
      {isYoutube ? (
        <Player contentSrc={url} />
      ) : (
        <Frame>
          <a href={url} title={title} target='_blank'>
            <StyledImage
              src='/images/theme/reading.jpg'
              alt='Garota do lofi brasileiro estudando em sua mesa'
              width={560}
              height={315}
            />
            <FrameOverlay>
              <FrameTitle>{title}</FrameTitle>
            </FrameOverlay>
            <PlayIcon />
          </a>
        </Frame>
      )}
    </SkillContainer>
  );
};

export default SkillContent;

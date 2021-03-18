import styled, { css } from 'styled-components';

export const StyledSkillTree = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const SkillBranch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 10px;
`;

export const SkillTitle = styled.p<{ align?: string }>`
  text-transform: uppercase;
  color: #faf6f7;
  text-align: center;
  height: 50px;

  ${({ align }) =>
    css`
      text-align: ${align};
    `}
`;

export const SkillButton = styled.button<{ active: boolean }>`
  background: #33322d;
  border-radius: 10px;
  border: 2px solid #cccccc;
  height: 100px;
  margin: 0;
  padding: 0;
  width: 100px;
  position: relative;
  margin-bottom: 2em;
  cursor: pointer;

  &:active,
  &:focus {
    border-color: #d7c676;
    outline: none;
    outline-color: #d7c676;
  }

  &:last-child {
    margin-bottom: 0;
    &::after {
      display: none;
    }
  }

  &::after {
    content: '';
    background: #faf6f7;
    opacity: 0.7;
    height: 30px;
    width: 10px;
    display: block;
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
  }

  ${({ active }) =>
    active &&
    css`
      border-color: #d7c676;
    `}
`;

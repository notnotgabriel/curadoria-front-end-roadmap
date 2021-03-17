import BrowserIcon from '../Icon/BrowserIcon';

import {
  StyledSkillTree,
  SkillBranch,
  SkillTitle,
  SkillButton,
} from './SkillTree.styled';

const SkillTree = ({ branches, activeBranch, activeLink, onSkillClick }) => {
  return (
    <StyledSkillTree>
      {branches.map((branch, branchIndex) => {
        return (
          <SkillBranch key={branchIndex}>
            <SkillTitle>{branch.title}</SkillTitle>
            {branch.links.map((link, linkIndex) => {
              return (
                <SkillButton
                  type='button'
                  key={linkIndex}
                  active={
                    activeBranch === branchIndex && activeLink === linkIndex
                  }
                  onClick={() => onSkillClick([branchIndex, linkIndex])}
                >
                  <BrowserIcon />
                </SkillButton>
              );
            })}
          </SkillBranch>
        );
      })}
    </StyledSkillTree>
  );
};

export default SkillTree;

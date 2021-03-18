import styled, { css } from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

const StyledHeaderList = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
`;

const StyledLink = styled.a<{ active?: boolean }>`
  text-transform: uppercase;
  color: #a7b2b4;
  padding: 10px;
  transition: color ease 0.3s;
  font-size: 1.5em;
  cursor: pointer;

  &:hover {
    color: #d7c676;
  }

  ${(props) =>
    props.active &&
    css`
      color: #d7c676;
      border-bottom: 1px solid;
    `}
`;

const StyledHeader = styled.header`
  height: 60px;
  padding: 1.5em 0;
`;

const Header = ({ navLinks }) => {
  const { query } = useRouter();
  return (
    <StyledHeader>
      <nav>
        <StyledHeaderList>
          {navLinks.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link href={`/${id}`}>
                  <StyledLink active={id === query?.id}>{title}</StyledLink>
                </Link>
              </li>
            );
          })}
        </StyledHeaderList>
      </nav>
    </StyledHeader>
  );
};

export default Header;

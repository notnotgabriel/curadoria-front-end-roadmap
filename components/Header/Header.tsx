import styled, { css } from 'styled-components';
import Link from 'next/link';

const StyledHeaderList = styled.ul`
  display: flex;
  justify-content: center;
`;

interface ILinkProps {
  active?: boolean;
}

const StyledLink = styled.a<ILinkProps>`
  text-transform: uppercase;
  color: #a7b2b4;
  padding: 10px;
  transition: color ease 0.3s;
  font-size: 1.3em;
  cursor: pointer;

  &:hover {
    color: #d7c676;
  }

  ${(props) =>
    props.active &&
    css`
      color: #d7c676;
    `}
`;

const Header = ({ navLinks }) => {
  return (
    <header>
      <nav>
        <StyledHeaderList>
          {navLinks.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link href={`/${id}`}>
                  <StyledLink>{title}</StyledLink>
                </Link>
              </li>
            );
          })}
        </StyledHeaderList>
      </nav>
    </header>
  );
};

export default Header;

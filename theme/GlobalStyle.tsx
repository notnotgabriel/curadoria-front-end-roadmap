import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Noto Sans TC', sans-serif;
    background: url("/images/theme/bg.jpg"),
    linear-gradient(
      90deg,
      rgba(113, 39, 18, 1) 0%,
      rgba(188, 107, 62, 1) 33%,
      rgba(127, 142, 113, 1) 67%,
      rgba(23, 78, 106, 1) 100%
    );
    background-size: cover;
    margin: 0;
  }

  ul {
    list-style-type: none;
  }
  
  a {
    text-decoration: none;
  }
`;
export default GlobalStyle;

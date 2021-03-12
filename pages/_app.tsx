import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';

import GlobalStyle from '../theme/GlobalStyle';
import theme from '../theme/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
}

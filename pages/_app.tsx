import { AppProps } from 'next/app';

import '../theme/styles.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

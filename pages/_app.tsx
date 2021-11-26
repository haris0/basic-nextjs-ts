import '../styles/globals.css';
import '../styles/layout.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';

type NextPageWithLayout = NextPage & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: ReactElement) => ReactNode;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const theme = {
  colors: {
    primary: '#355C7D',
  },
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>,
  );
};

export default MyApp;

import '@styles/globals.css';
import '@styles/layout.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import { AppPropsWithLayout } from '../types';

const theme = {
  colors: {
    primary: '#355C7D',
  },
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <ThemeProvider theme={theme}>
      <Head>
        <title>Learning Project</title>
        <meta
          name="description"
          content="Learning Next from Codevolution"
        />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>,
  );
};

export default MyApp;

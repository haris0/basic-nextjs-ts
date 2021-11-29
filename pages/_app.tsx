import '../styles/globals.css';
import '../styles/layout.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';
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
      <Component {...pageProps} />
    </ThemeProvider>,
  );
};

export default MyApp;

import { ReactElement } from 'react';
import Head from 'next/head';
import Layout from '@components/layout';

const About = () => (
  <div>
    <Head>
      <meta
        name="description"
        content="Next Js with Ts Tutorial"
      />
    </Head>
    <h1>About</h1>
  </div>
);

export default About;

About.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

import { ReactElement } from 'react';
import Layout from '../components/layout';

const About = () => (
  <div>
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

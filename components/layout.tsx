import dynamic from 'next/dynamic';
import { FC } from 'react';

const Header = dynamic(() => import('./header'));
const Footer = dynamic(() => import('./footer'));

const Layout:FC<{}> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;

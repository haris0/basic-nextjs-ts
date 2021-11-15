import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => (
  <>
    <h1>Home</h1>
    <Link href="/about">
      <button type="button">about</button>
    </Link>
    <Link href="/user">
      <button type="button">user</button>
    </Link>
  </>
);

export default Home;

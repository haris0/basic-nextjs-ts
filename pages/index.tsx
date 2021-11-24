import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();

  const handleClick = () => {
    console.log('Placing Order');
    router.push('/product');
  };

  return (
    <>
      <h1>Home</h1>
      <Link href="/about" passHref>
        <button type="button">about</button>
      </Link>
      <br />
      <Link href="/users" passHref>
        <button type="button">user</button>
      </Link>
      <br />
      <Link href="/posts" passHref>
        <button type="button">Post</button>
      </Link>
      <br />
      <button
        type="button"
        onClick={handleClick}
      >
        Product
      </button>
      <br />
      <Link href="/news" passHref>
        <button type="button">News</button>
      </Link>
      <br />
      <Link href="/dashboard" passHref>
        <button type="button">Dashboard</button>
      </Link>
    </>
  );
};

export default Home;

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
      <Link href="/about">
        <button type="button">about</button>
      </Link>
      <Link href="/users">
        <button type="button">user</button>
      </Link>
      <br />
      <button
        type="button"
        onClick={handleClick}
      >
        Place Order
      </button>
    </>
  );
};

export default Home;

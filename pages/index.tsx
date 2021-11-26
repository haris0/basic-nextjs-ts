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
        <button type="button" className="btn btn-primary">
          about
        </button>
      </Link>
      <br />
      <Link href="/users" passHref>
        <button type="button" className="btn btn-primary">
          user
        </button>
      </Link>
      <br />
      <Link href="/posts" passHref>
        <button type="button" className="btn btn-primary">
          Post
        </button>
      </Link>
      <br />
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleClick}
      >
        Product
      </button>
      <br />
      <Link href="/news" passHref>
        <button type="button" className="btn btn-primary">
          News
        </button>
      </Link>
      <br />
      <Link href="/dashboard" passHref>
        <button type="button" className="btn btn-primary">
          Dashboard
        </button>
      </Link>
      <br />
      <Link href="/events" passHref>
        <button type="button" className="btn btn-primary">
          Events
        </button>
      </Link>
      <br />
      <Link href="/comments" passHref>
        <button type="button" className="btn btn-primary">
          Comments
        </button>
      </Link>
    </>
  );
};

export default Home;

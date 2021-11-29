import type { ReactElement } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.css';

const Layout = dynamic(() => import('../components/layout'));

const Home = () => {
  const router = useRouter();

  const handleClick = () => {
    console.log('Placing Order');
    router.push('/product');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Home</h1>
      <Link href="/about" passHref>
        <button type="button" className="btn btn-primary">
          about
        </button>
      </Link>
      <Link href="/users" passHref>
        <button type="button" className="btn btn-primary">
          user
        </button>
      </Link>
      <Link href="/posts" passHref>
        <button type="button" className="btn btn-primary">
          Post
        </button>
      </Link>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleClick}
      >
        Product
      </button>
      <Link href="/news" passHref>
        <button type="button" className="btn btn-primary">
          News
        </button>
      </Link>
      <Link href="/dashboard" passHref>
        <button type="button" className="btn btn-primary">
          Dashboard
        </button>
      </Link>
      <Link href="/events" passHref>
        <button type="button" className="btn btn-primary">
          Events
        </button>
      </Link>
      <Link href="/comments" passHref>
        <button type="button" className="btn btn-primary">
          Comments
        </button>
      </Link>
      <Link href="/blogs" passHref>
        <button type="button" className="btn btn-primary">
          Blogs
        </button>
      </Link>
      <Link href="/cover" passHref>
        <button type="button" className="btn btn-primary">
          OP Cover
        </button>
      </Link>
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

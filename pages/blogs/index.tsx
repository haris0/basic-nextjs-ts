import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Blog } from '../../types';

const BlogsList: NextPage<{ blogs: Blog[]}> = ({ blogs }) => (
  <>
    <Head>
      <title>
        Blog List
      </title>
      <meta
        name="description"
        content="Blog List"
      />
    </Head>
    <h2>List of New Articles:</h2>
    {blogs.map((blog) => (
      <div key={blog.id}>
        <Link href={`blogs/${blog.id}`} passHref>
          <h2>
            {blog.id} {blog.title} | {blog.category}
          </h2>
        </Link>
      </div>
    ))}
  </>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('http://localhost:4000/blog');
  const data: Blog[] = await response.json();

  return {
    props: {
      blogs: data,
    },
  };
};

export default BlogsList;

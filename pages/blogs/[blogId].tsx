import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { Blog } from '../../types';

const DetailBlog: NextPage<{ blog: Blog}> = ({ blog }) => (
  <>
    <Head>
      <title>
        {blog.title}
      </title>
      <meta
        name="description"
        content={blog.description}
      />
    </Head>
    <div className="detail-blog">
      <h2>{`${blog.id}. ${blog.title}`}</h2>
      <p>{blog.description}</p>
    </div>
  </>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const blogId = params?.blogId;

  const response = await fetch(`http://localhost:4000/blog/${blogId}`);
  const data: Blog = await response.json();

  return {
    props: {
      blog: data,
    },
  };
};

export default DetailBlog;

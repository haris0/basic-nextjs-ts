import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { PostType } from '../../types';

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data: PostType[] = await response.json();

  return {
    props: {
      posts: data,
    },
  };
};

const PostList: NextPage<{ posts: PostType[] }> = ({ posts }) => (
  <>
    <h1>List of Posts</h1>
    {posts.map((post) => (
      <div key={post.id}>
        <Link href={`posts/${post.id}`} passHref>
          <h2>{post.id} {post.title}</h2>
        </Link>
        <hr />
      </div>
    ))}
  </>
);

export default PostList;

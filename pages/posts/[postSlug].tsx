import type {
  GetStaticPaths,
  GetStaticProps,
  NextPage,
} from 'next';
import { useRouter } from 'next/router';
import { Post } from '../../types';

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [
    {
      params: { postSlug: '1' },
    },
  ],
  fallback: true,
});

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.postSlug}`);
  const data: Post = await response.json();

  if (!data.id) {
    return { notFound: true };
  }

  console.log(`Generate page for /post/${params?.postSlug}`);

  return {
    props: {
      post: data,
    },
  };
};

const PostDetail: NextPage<{ post: Post}> = ({ post }) => {
  const router = useRouter();

  return (
    <div className="detail-post">
      {router.isFallback && <h1>Loading...</h1>}
      {!router.isFallback && (
        <>
          <h2>{`${post.id}. ${post.title}`}</h2>
          <p>{post.body}</p>
        </>
      )}
    </div>
  );
};

export default PostDetail;

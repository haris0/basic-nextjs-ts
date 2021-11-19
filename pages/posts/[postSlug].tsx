import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { useRouter } from 'next/router';
import { PostType } from '../../types';

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
  const data: PostType = await response.json();

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

const PostDetail: NextPage = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
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

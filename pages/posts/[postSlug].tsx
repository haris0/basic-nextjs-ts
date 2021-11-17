import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { PostType } from '../../types';

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data: PostType[] = await response.json();
  const paths = data.map((post) => ({
    params: {
      postSlug: post.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.postSlug}`);
  const data: PostType = await response.json();

  return {
    props: {
      post: data,
    },
  };
};

const PostDetail: NextPage = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <h2>{ `${post.id}. ${post.title}` }</h2>
    <p>{ post.body }</p>
  </>
);

export default PostDetail;

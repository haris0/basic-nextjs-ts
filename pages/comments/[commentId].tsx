import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import comments from '../../data/comments';
import { Comment } from '../../types';

export const getStaticPaths: GetStaticPaths = () => ({
  paths: [{ params: { commentId: '1' } }],
  fallback: 'blocking',
});

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const commentId = params?.commentId;

  const comment = comments.find((com) => com.id.toString() === commentId);

  return {
    props: {
      comment,
    },
  };
};

const CommentDetail: NextPage<{ comment: Comment}> = ({ comment }) => (
  <h2>{ comment.id } { comment.text }</h2>
);

export default CommentDetail;

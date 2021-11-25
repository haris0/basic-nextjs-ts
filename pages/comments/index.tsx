import { useRouter } from 'next/router';
import { useState } from 'react';
import { Comment } from '../../types';

const CommentsList = () => {
  const router = useRouter();
  const [comments, setComments] = useState<Comment[]>();
  const [comment, setComment] = useState('');

  const fetchComments = async () => {
    const response = await fetch('/api/comments');
    const data: Comment[] = await response.json();
    setComments(data);
  };

  const submitComment = async () => {
    const response = await fetch('api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    console.log(data);
    setComment('');
    fetchComments();
  };

  const deleteComment = async (commentId: number) => {
    const response = await fetch(`api/comments/${commentId}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    console.log(data);
    fetchComments();
  };

  const updateComment = async (
    commentId: number,
    commentText: string,
  ) => {
    const updatedComment = `${commentText} Updated`;
    const response = await fetch(`api/comments/${commentId}`, {
      method: 'PATCH',
      body: JSON.stringify({ updatedComment }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    console.log(data);
    fetchComments();
  };

  const detailComment = (commentId: number) => {
    router.push(`/comments/${commentId}`);
  };

  return (
    <>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button
        type="button"
        onClick={submitComment}
      >
        Submit Comment
      </button>
      <button
        type="button"
        onClick={fetchComments}
      >
        Load Comments
      </button>
      {comments?.map((com) => (
        <div key={com.id}>
          {com.id} {com.text}
          <button
            type="button"
            onClick={() => deleteComment(com.id)}
          >
            Delete
          </button>
          <button
            type="button"
            onClick={() => updateComment(com.id, com.text)}
          >
            Update
          </button>
          <button
            type="button"
            onClick={() => detailComment(com.id)}
          >
            Detail
          </button>
        </div>
      ))}
    </>
  );
};

export default CommentsList;

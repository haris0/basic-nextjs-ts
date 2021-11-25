import { useState } from 'react';
import { Comment } from '../../types';

const CommentsList = () => {
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
        </div>
      ))}
    </>
  );
};

export default CommentsList;

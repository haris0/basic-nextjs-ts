import { useState } from 'react';
import { Comments } from '../../types';

const CommentsList = () => {
  const [comments, setComments] = useState<Comments[]>();

  const fetchComments = async () => {
    const response = await fetch('http://localhost:3000/api/comments');
    const data: Comments[] = await response.json();
    setComments(data);
  };

  return (
    <>
      <button
        type="button"
        onClick={fetchComments}
      >
        Load Comments
      </button>
      {comments?.map((comment) => (
        <div key={comment.id}>
          {comment.id} {comment.text}
        </div>
      ))}
    </>
  );
};

export default CommentsList;

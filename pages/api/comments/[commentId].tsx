import type { NextApiRequest, NextApiResponse } from 'next';
import comments from '../../../data/comments';
import { Comment } from '../../../types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse< Comment | undefined>,
) {
  const { commentId } = req.query;
  const index = comments.findIndex((com) => com.id === +commentId);

  if (req.method === 'GET') {
    res.status(201).json(comments[index]);
  } else if (req.method === 'DELETE') {
    const comment = comments[index];
    comments.splice(index, 1);
    res.status(201).json(comment);
  } else if (req.method === 'PATCH') {
    const { updatedComment } = req.body;
    console.log(updatedComment);

    comments[index] = {
      ...comments[index],
      text: updatedComment,
    };

    res.status(201).json(comments[index]);
  }
}

import type { NextApiRequest, NextApiResponse } from 'next';
import comments from '../../../data/comments';
import { Comment } from '../../../types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse< Comment | undefined>,
) {
  const { commentId } = req.query;
  const comment = comments.find((com) => com.id === +commentId);
  res.status(201).json(comment);
}

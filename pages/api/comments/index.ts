import type { NextApiRequest, NextApiResponse } from 'next';
import comments from '../../../data/comments';
import { Comments } from '../../../types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Comments[]>,
) {
  res.status(200).json(comments);
}

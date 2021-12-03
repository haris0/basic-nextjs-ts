import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.setPreviewData({ user: 'Zero' });
  res.redirect(<string>req.query.redirect);
}

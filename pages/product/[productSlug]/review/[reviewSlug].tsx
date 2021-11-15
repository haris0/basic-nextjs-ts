import { useRouter } from 'next/router';
import type { NextPage } from 'next';

const ReviewDetail: NextPage = () => {
  const router = useRouter();
  const { productSlug, reviewSlug } = router.query;
  return (
    <div>
      <h1>Review Slug {reviewSlug} for product {productSlug}</h1>
    </div>
  );
};

export default ReviewDetail;

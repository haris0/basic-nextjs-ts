import { useRouter } from 'next/router';
import type { NextPage } from 'next';

const ProducDetail: NextPage = () => {
  const router = useRouter();
  const { productSlug } = router.query;
  return (
    <div>
      <h1>Product Slug {productSlug}</h1>
    </div>
  );
};

export default ProducDetail;

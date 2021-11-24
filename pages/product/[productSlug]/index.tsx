import { useRouter } from 'next/router';
import type {
  GetStaticPaths,
  GetStaticProps,
  NextPage,
} from 'next';
import { Product } from '../../../types';

export const getStaticPaths: GetStaticPaths = () => ({
  paths: [{ params: { productSlug: '1' } }],
  fallback: true,
});

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  console.log(`Regenerating ProductList ${params?.productSlug}`);
  const response = await fetch(`http://localhost:4000/product/${params?.productSlug}`);
  const data: Product = await response.json();

  return {
    props: {
      product: data,
    },
    revalidate: 10,
  };
};

const ProducDetail: NextPage<{ product: Product }> = ({ product }) => {
  const router = useRouter();
  const { productSlug } = router.query;

  return (
    <div className="product-details">
      {router.isFallback && <h2>Loading...</h2> }
      {!router.isFallback && (
        <>
          <h1>Product Slug {productSlug}</h1>
          <h2>{product.id} {product.title} {product.price}</h2>
          <p>{product.description}</p>
          <hr />
        </>
      )}
    </div>
  );
};

export default ProducDetail;

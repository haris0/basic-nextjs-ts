import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { ProductType } from '../../types';

export const getStaticProps: GetStaticProps = async () => {
  console.log('Generating/ Regenerating ProductList');
  const response = await fetch('http://localhost:4000/product');
  const data: ProductType[] = await response.json();

  return {
    props: {
      products: data,
    },
    revalidate: 30,
  };
};

const Product: NextPage = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <div>
    <h1>Product List</h1>
    {products?.map((product: ProductType) => (
      <div key={product.id}>
        <h2>{product.id} {product.title} {product.price}</h2>
      </div>
    ))}
  </div>
);

export default Product;

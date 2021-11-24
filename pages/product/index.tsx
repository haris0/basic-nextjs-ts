import type { GetStaticProps, NextPage } from 'next';
import { Product } from '../../types';

export const getStaticProps: GetStaticProps = async () => {
  console.log('Generating/ Regenerating ProductList');
  const response = await fetch('http://localhost:4000/product');
  const data: Product[] = await response.json();

  return {
    props: {
      products: data,
    },
    revalidate: 30,
  };
};

const ProductList: NextPage<{ products: Product[] }> = ({ products }) => (
  <div>
    <h1>Product List</h1>
    {products.map((product) => (
      <div key={product.id}>
        <h2>{product.id} {product.title} {product.price}</h2>
      </div>
    ))}
  </div>
);

export default ProductList;

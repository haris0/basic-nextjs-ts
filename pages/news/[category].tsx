import type { GetServerSideProps, NextPage } from 'next';
import { Article } from '../../types';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const category = params?.category;
  const response = await fetch(`http://localhost:4000/news?category=${category}`);
  const data: Article[] = await response.json();

  return {
    props: {
      articles: data,
      category,
    },
  };
};

const ArticelByCategory: NextPage<{
  articles: Article[],
  category: string
}> = ({ articles, category }) => (
  <>
    <h1>Showing news for article {category}</h1>
    {articles.map((article) => (
      <div key={article.id}>
        <h2>
          {article.id} {article.title}
        </h2>
        <p>{article.description}</p>
        <hr />
      </div>
    ))}
  </>
);

export default ArticelByCategory;

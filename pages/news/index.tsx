import type { GetServerSideProps, NextPage } from 'next';
import { Article } from '../../types';

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('http://localhost:4000/News');
  const data: Article[] = await response.json();

  return {
    props: {
      articles: data,
    },
  };
};

const NewsArticelList: NextPage<{ articles: Article[] }> = ({ articles }) => (
  <>
    <h2>List of New Articles:</h2>
    { articles.map((article) => (
      <div key={article.id}>
        <h2>
          {article.id} {article.title} | {article.category}
        </h2>
      </div>
    ))}
  </>
);

export default NewsArticelList;

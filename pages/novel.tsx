import type { GetStaticProps, NextPage } from 'next';

const NovelList: NextPage<{ novels: string }> = ({ novels }) => (
  <>
    <h1 className="content">
      {novels}
    </h1>
    <h2>
      Env user: {process.env.DB_USER}
      password: {process.env.DB_PASS}
      analytics: {process.env.NEXT_PUBLIC_ANALYTICS}
    </h2>
  </>
);

export const getStaticProps: GetStaticProps = async (context) => {
  const user = process.env.DB_USER;
  const pass = process.env.DB_PASS;

  console.log(user, pass);

  console.log('Running getStaticProps', context.previewData);

  return {
    props: {
      novels: context.preview
        ? 'List Of draft Novel'
        : 'List Of published novel',
    },
  };
};

export default NovelList;

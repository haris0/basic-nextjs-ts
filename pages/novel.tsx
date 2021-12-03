import type { GetStaticProps, NextPage } from 'next';

const NovelList: NextPage<{ novels: string }> = ({ novels }) => (
  <h1 className="content">
    {novels}
  </h1>
);

export const getStaticProps: GetStaticProps = async (context) => {
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

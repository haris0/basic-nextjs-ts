import { useRouter } from 'next/router';
import type { NextPage } from 'next';

const Docs: NextPage = () => {
  const router = useRouter();
  const { params = [] } = router.query;

  if (params.length === 2) {
    return (
      <div>
        <h1>
          Viewing docs for feature {params[0]} and concept {params[1]}
        </h1>
      </div>
    );
  } if (params.length === 1) {
    return (
      <div>
        <h1>
          Viewing docs for feature {params[0]}
        </h1>
      </div>
    );
  }
  return (
    <div>
      <h1>Doc Home Page</h1>
    </div>
  );
};

export default Docs;

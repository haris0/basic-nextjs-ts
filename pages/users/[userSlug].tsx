import { useRouter } from 'next/router';
import type { NextPage } from 'next';

const Detail: NextPage = () => {
  const router = useRouter();
  const { userSlug } = router.query;

  return (
    <div>
      <h1>
        User Page Detail {userSlug}
      </h1>
    </div>
  );
};

export default Detail;

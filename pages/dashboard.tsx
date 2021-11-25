import { NextPage } from 'next';
import useSWR from 'swr';
import { Dashboard } from '../types';

const fetcher = async (url: string): Promise<any> => {
  const res = await fetch(url);
  return res.json();
};

const DashboardPage: NextPage = () => {
  const { data, error } = useSWR<Dashboard, Error>(
    'http://localhost:4000/dashboard',
    fetcher,
  );

  return (
    <div className="dashboard">
      {!data && !error && (<h2>Loading...</h2>)}
      {data && (
        <div>
          <h2>Dashboard</h2>
          <h2>Post - {data.post}</h2>
          <h2>Likes - {data.likes}</h2>
          <h2>Followers - {data.followers}</h2>
          <h2>Followings - {data.following}</h2>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;

import { NextPage } from 'next';
import useSWR from 'swr';
import styled from 'styled-components';
import { Dashboard } from '../types';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary}
`;

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
          <Title>Dashboard</Title>
          <h2 style={{ color: 'black' }}>Post - {data.post}</h2>
          <h2 style={{ color: 'black' }}>Likes - {data.likes}</h2>
          <h2 style={{ color: 'black' }}>Followers - {data.followers}</h2>
          <h2 style={{ color: 'black' }}>Followings - {data.following}</h2>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;

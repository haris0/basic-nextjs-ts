import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Dashboard } from '../types';

const DashboardPage: NextPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [dashboardData, setDashboardData] = useState<Dashboard | null>(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      const response = await fetch('http://localhost:4000/dashboard');
      const data: Dashboard = await response.json();
      setDashboardData(data);
      setIsLoading(false);
    };
    fetchDashboardData();
  }, []);

  return (
    <div className="dashboard">
      {isLoading && (<h2>Loading...</h2>)}
      {!isLoading && dashboardData && (
        <div>
          <h2>Dashboard</h2>
          <h2>Post - {dashboardData.post}</h2>
          <h2>Likes - {dashboardData.likes}</h2>
          <h2>Followers - {dashboardData.followers}</h2>
          <h2>Followings - {dashboardData.following}</h2>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;

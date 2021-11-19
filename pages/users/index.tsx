import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { UserType } from '../../types';

const UserCard = dynamic(() => import('../../components/users/userCard'));

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data: UserType[] = await response.json();

  return {
    props: {
      users: data,
    },
  };
};

const UserList: NextPage<{ users: UserType[] }> = ({ users }) => (
  <div>
    <h1>User List</h1>
    <ul>
      {users.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </ul>
  </div>
);

export default UserList;

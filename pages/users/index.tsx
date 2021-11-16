import type { NextPage } from 'next';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { User } from '../../types';

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data: User[] = await response.json();

  return {
    props: {
      users: data,
    },
  };
};

const UserList: NextPage = ({ users }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <div>
    <h1>User List</h1>
    <ul>
      {users.map((user: User) => (
        <li key={user.id}>
          <p>{user.name} - ({user.email})</p>
        </li>
      ))}
    </ul>
  </div>
);

export default UserList;

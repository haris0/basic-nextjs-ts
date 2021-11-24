import { User } from '../../types';

type props ={
  user: User
}

const UserCard = ({ user }: props) => (
  <li>
    <p>{user.name} - ({user.email})</p>
  </li>
);

export default UserCard;

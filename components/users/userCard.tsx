import { UserType } from '../../types';

type props ={
  user: UserType
}

const UserCard = ({ user }: props) => (
  <li>
    <p>{user.name} - ({user.email})</p>
  </li>
);

export default UserCard;

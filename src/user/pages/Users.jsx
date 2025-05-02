import React from 'react';
import UsersList from '../components/UsersList';
const USERS = [
  {
    id: 'u1',
    name: 'Aiu',
    image:
      'https://images.pexels.com/photos/7046685/pexels-photo-7046685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    places: 3,
  },
];

function Users() {
  return <UsersList items={USERS} />;
}

export default Users;

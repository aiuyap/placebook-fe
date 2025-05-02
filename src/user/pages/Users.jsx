import React from 'react';
import UsersList from '../components/UsersList';
const USERS = [
  {
    id: 'u1',
    name: 'Aiu',
    image: 'sample image url',
    places: 3,
  },
];

function Users() {
  return <UsersList items={USERS} />;
}

export default Users;

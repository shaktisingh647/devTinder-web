import React from 'react';
import EditProfile from './EditProfile';

const Profile = ({ user }) => {  // Either receive user as a prop
  return (
    <div>
      <EditProfile user={user} />
    </div>
  );
};
export default Profile;


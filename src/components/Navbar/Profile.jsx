// Profile.js

import React from 'react';

const Profile = ({ user }) => {
  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      {/* Add more profile information here */}
    </div>
  );
};

export default Profile;

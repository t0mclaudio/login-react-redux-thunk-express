import React from 'react';

const Profile = props => {
  return (
    <div>
      <h1>Name: Tom Claudio</h1>
      <h2>Title: Software Developer</h2>
      <button onClick={props.handleLogOut}>Log out</button>
    </div>
  )
};

export default Profile;
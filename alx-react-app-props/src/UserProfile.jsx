// src/UserProfile.jsx
import { useContext } from 'react';
import UserContext from './UserContext';

function UserProfile() {
  const userData = useContext(UserContext);

  return (
    <div
      style={{
        border: '1px solid gray',
        padding: '15px',
        margin: '20px',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        width: '300px',
        textAlign: 'left',
      }}
    >
      <h3 style={{ color: 'blue', textAlign: 'center' }}>User Profile</h3>
      <p>
        <strong>Name:</strong> {userData.name}
      </p>
      <p>
        <strong>Email:</strong> {userData.email}
      </p>
    </div>
  );
}

export default UserProfile;

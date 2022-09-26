import React from 'react';
import Profile from './profile/Profile';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: '#E7ECF2'
      }}
    >
      <Profile/>
    </div>
  );
};
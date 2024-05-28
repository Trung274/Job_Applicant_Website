import React from 'react';

const Connect = ({ contacts }) => {
  return (
    <div>
      <h2>Connect</h2>
      <p>LinkedIn: {contacts.linkedin}</p>
      <p>Facebook: {contacts.facebook}</p>
    </div>
  );
};

export default Connect;
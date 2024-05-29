import React from 'react';
import './Connect.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Connect = ({ contacts }) => {
  return (
    <div className='connect-frame'>
      <h2 className="text-xl font-semibold mb-4">Connect</h2>
      <p><span className="connect-icon">&#9742;</span> {contacts.phone}</p>
      <p><span className="connect-icon">&#9993;</span> {contacts.email}</p>
      <p><FontAwesomeIcon icon={faLinkedin} /> <a href={contacts.linkedin}>{contacts.linkedin}</a></p>
      <p><FontAwesomeIcon icon={faFacebook} /> <a href={contacts.facebook}>{contacts.facebook}</a></p>
    </div>
  );
};

export default Connect;
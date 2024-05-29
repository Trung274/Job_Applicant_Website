import React from 'react';
import './AboutMe.css' 

const AboutMe = ({ user }) => {
    return (
        <div className='about-frame'>
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <p>{user.description}</p>
        </div>
    );
};

export default AboutMe;
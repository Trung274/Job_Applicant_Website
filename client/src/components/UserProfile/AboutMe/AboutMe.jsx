import React from 'react';

const AboutMe = ({ user }) => {
    return (
        <div>
            <h2>About Me</h2>
            <p>{user.description}</p>
        </div>
    );
};

export default AboutMe;
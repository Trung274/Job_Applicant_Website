import React from "react";

const BusinessProfile = ({ profile }) => {
    return (
        <div>
            <h1>Hello Business</h1>
            {!!profile && (<h1>Hi {profile.name}!</h1>)}
        </div>
    );
};

export default BusinessProfile;
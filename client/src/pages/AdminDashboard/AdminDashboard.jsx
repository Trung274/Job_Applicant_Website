import React from "react";

const AdminDashboard = ({ profile }) => {
    return (
        <div>
            <h1>Hello Admin</h1>
            {!!profile && (<h1>Hi {profile.name}!</h1>)}
        </div>
    );
};

export default AdminDashboard;
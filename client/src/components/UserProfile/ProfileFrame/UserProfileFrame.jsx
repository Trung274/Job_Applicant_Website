import React from "react";
import { Badge } from "../../../components/ui/badge";
import "./UserProfileFrame.css";

const UserProfileFrame = ({ user }) => {
    return (
        <div className="profile-frame">
            <div className="background-image" style={{ backgroundImage: `url(${user.userBackground})` }}>
                <div className="profile-image">
                    <img src={user.userAvatar} alt={`${user.name}'s avatar`} />
                </div>
            </div>
            <div className="profile-info">
                <h1>{user.name}</h1>
                <div className="profile-titles">
                    {user.userTitle.map((title, index) => (
                        <Badge key={index} className="title-badge">{title}</Badge>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserProfileFrame;
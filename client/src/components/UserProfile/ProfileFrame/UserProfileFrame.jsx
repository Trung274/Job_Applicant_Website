import React from "react";
import { Badge } from "../../../components/ui/badge";
import "./UserProfileFrame.css";

const UserProfileFrame = ({ user }) => {
    return (
        <div className="profile-frame bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="background-container">
                <div className="background-image" style={{ backgroundImage: `url(${user.userBackground})` }}></div>
                <div className="profile-image absolute left-4 bottom-[-75px] border-4 border-white rounded-full overflow-hidden">
                    <img src={user.userAvatar} alt={`${user.name}'s avatar`} className="w-36 h-36" />
                </div>
                <h1 className="text-xl font-bold ml-44 mt-4 user-name-1">{user.name}</h1>
            </div>
            <div className="profile-info pt-4 pb-4 text-center">
                <div className="profile-titles flex justify-center space-x-2 mt-2">
                    {user.userTitle.map((title, index) => (
                        <Badge key={index} className="title-badge">{title}</Badge>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserProfileFrame;
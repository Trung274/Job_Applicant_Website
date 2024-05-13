import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge"
import './UserProfileFrame.css'; 

function UserProfileFrame({ imageUrl, name, title, backgroundUrl }) {
  return (
    <div className="profile-background" style={{ backgroundImage: `url(${backgroundUrl})` }}>
      <div className="profile-details">
        <Avatar src={imageUrl} size="large" className="profile-avatar" />
        <div>
          <h1 className="profile-name">{name}</h1>
          <Badge color="blue" className="profile-title">{title}</Badge>
        </div>
      </div>
    </div>
  );
}
export default UserProfileFrame;
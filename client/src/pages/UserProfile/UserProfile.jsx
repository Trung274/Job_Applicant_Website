import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AboutMe from "../../components/UserProfile/AboutMe/AboutMe";
import Connect from "../../components/UserProfile/Connect/Connect";
import Language from "../../components/UserProfile/Language/Language";
import Location from "../../components/UserProfile/Location/Location";
import UserProfileFrame from "../../components/UserProfile/ProfileFrame/UserProfileFrame";

export default function UserProfile() {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem('accessToken');
            if (token) {
                axios.get('/api/auth/profile', {
                    headers: { Authorization: `Bearer ${token}` }
                }).then(response => {
                    setProfile(response.data);
                    setLoading(false);
                }).catch(error => {
                    setError("Failed to fetch user profile");
                    setLoading(false);
                });
            }
        };

        fetchProfile();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!profile) {
        return <div>User not found</div>;
    }

    const { phone, email, linkedin, facebook } = profile.profileLink || {};

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                    <UserProfileFrame user={profile} />
                    <AboutMe user={profile} />
                </div>
                <div className="md:col-span-1 p-0 rounded-lg shadow-lg">
                    <div className="profile-details grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
                        <Location location={profile.city} />
                        <Connect contacts={{ phone, email, linkedin, facebook }} />
                        <Language languages={profile.languages} />
                    </div>
                </div>
            </div>
        </div>
    );
}
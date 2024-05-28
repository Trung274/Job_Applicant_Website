import AboutMe from "../../components/UserProfile/AboutMe/AboutMe";
import Connect from "../../components/UserProfile/Connect/Connect";
import Language from "../../components/UserProfile/Language/Language";
import Location from "../../components/UserProfile/Location/Location";
import UserProfileFrame from "../../components/UserProfile/ProfileFrame/UserProfileFrame";

const dummyData = {
    _id: "60c72b2f5f1b2c001c8e4d8a",
    role: "user",
    userTitle: ["Software Engineer", "Project Manager"],
    name: "Adrian Chase",
    email: "trungnt261@gmail.com",
    phone: "0981568196",
    profileLink: {
        linkedin: "https://www.linkedin.com/in/trungnt261/",
        facebook: "http://www.facebook.com/trungnt261"
    },
    city: "Hanoi city",
    userAvatar: "/path_to_avatar_image", // Replace with actual image path
    userBackground: "/path_to_background_image", // Replace with actual image path
    gender: "Male",
    description: "Hey there! I'm Adrian...",
    languages: ["English", "Vietnamese"],
    savedJobs: [
        {
            id: "60c72b2f5f1b2c001c8e4d8b",
            jobTitle: "Senior Backend Developer",
            business: "Tech Corp",
            city: "Hanoi",
            description: "Looking for a senior backend developer to join our dynamic team. Must have experience with Node.js and MongoDB.",
            salary: 2500,
            createdAt: "2024-05-10T08:00:00Z",
            updatedAt: "2024-05-20T08:00:00Z"
        },
        {
            id: "60c72b2f5f1b2c001c8e4d8c",
            jobTitle: "Full Stack Developer",
            business: "InnovateX",
            city: "Hanoi",
            description: "We need a talented full stack developer proficient in React and Node.js.",
            salary: 3000,
            createdAt: "2024-04-15T08:00:00Z",
            updatedAt: "2024-05-18T08:00:00Z"
        }
    ]
};

export default function UserProfile() {
    const user = dummyData;
    return (
        <div className="profile-container">
            <UserProfileFrame user={user} />
            <div className="profile-main">
                <div className="profile-about">
                    <AboutMe user={user} />
                </div>
                <div className="profile-details">
                    <Location location={user.city} />
                    <Connect contacts={user.profileLink} />
                    <Language languages={user.languages} />
                </div>
            </div>
        </div>
    );
}
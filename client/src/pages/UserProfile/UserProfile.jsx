import React from "react";
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
    userAvatar: "/assets/avatars/guy-1.jpg",
    userBackground: "/assets/backgrounds/mountain.jpg",
    gender: "Male",
    description: `Hey there!👌💕 I'm Adrian, a seasoned software engineer with a passion for crafting elegant solutions to complex problems. Here's a deeper dive into what makes me tick: 
Tech Stack Mastery: My toolbox includes languages like Python, Java, and JavaScript. I've danced with frameworks like React, Angular, and Django. Whether it's building APIs, optimizing database queries, or creating seamless UIs, I'm in my element. 
Architectural Enthusiast: I geek out over system design. Scalability, microservices, and cloud architecture—these are my playgrounds. I've even been known to sketch out service diagrams during coffee breaks. 
Agile Advocate: I thrive in collaborative environments. Agile methodologies? Check. Scrum ceremonies? Double-check. I believe in iterative development, user stories, and sprint planning. Let's build great things together! 
Open Source Contributor: When I'm not coding for work, I'm contributing to open-source projects. From fixing bugs to adding new features, I love giving back to the community. GitHub is my second home. 
Hackathon Aficionado: Give me 24 hours, a whiteboard, and a team, and I'll cook up something innovative. I've won a few hackathons, and the adrenaline rush keeps me coming back for more. 
Lifelong Learner: The tech world evolves faster than a SpaceX rocket. That's why I'm always learning. Whether it's reading tech blogs, attending conferences, or diving into online courses, I'm hungry for knowledge. 
Coffee Connoisseur: A well-brewed cup of coffee fuels my code. Espresso, pour-over, or cold brew—I appreciate them all. Let's grab a virtual coffee and chat about code!`,
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
    const { phone, email, linkedin, facebook } = user.profileLink;
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                    <UserProfileFrame user={user} />
                    <AboutMe user={user} />
                </div>
                <div className="md:col-span-1 p-0 rounded-lg shadow-lg">
                    <div className="profile-details grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
                        <Location location={user.city} />
                        <Connect contacts={{ phone, email, linkedin, facebook }} />
                        <Language languages={user.languages} />
                    </div>
                </div>
            </div>
        </div>
    );
}
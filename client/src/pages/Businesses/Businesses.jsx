import React from 'react';
import BusinessCard from './../../components/BusinessCard/BusinessCard';

const businesses = [
  {
    "_id": "unique_id_1",
    "role": "business",
    "name": "Tech Solutions Inc.",
    "email": "info@techsolutions.com",
    "phone": "123-456-7890",
    "companyProfileLink": "https://techsolutions.com",
    "city": "San Francisco",
    "address": "123 Tech Lane",
    "profileImage": "/assets/imgs/logos/logo6.png",
    "description": "Leading tech solutions provider.",
    "jobOpenings": []
  },
  {
    "_id": "unique_id_2",
    "role": "business",
    "name": "Green Earth Co.",
    "email": "contact@greenearth.com",
    "phone": "987-654-3210",
    "companyProfileLink": "https://greenearth.com",
    "city": "New York",
    "address": "456 Green Street",
    "profileImage": "/assets/imgs/logos/logo7.png",
    "description": "Sustainable and eco-friendly products.",
    "jobOpenings": [
      {
        "title": "Marketing Manager",
        "description": "Looking for an experienced marketing manager.",
        "requirements": ["3+ years in marketing", "Proven track record"]
      }
    ]
  },
  {
    "_id": "unique_id_3",
    "role": "business",
    "name": "Urban Eats",
    "email": "info@urbaneats.com",
    "phone": "321-654-9870",
    "companyProfileLink": "https://urbaneats.com",
    "city": "Chicago",
    "address": "789 Food Blvd",
    "profileImage": "/assets/imgs/logos/logo8.png",
    "description": "Innovative urban restaurant.",
    "jobOpenings": [
      {
        "title": "Head Chef",
        "description": "Seeking a creative head chef.",
        "requirements": ["5+ years in culinary", "Experience in urban cuisine"]
      },
      {
        "title": "Waitstaff",
        "description": "Friendly and professional waitstaff needed.",
        "requirements": ["Customer service skills", "Prior experience preferred"]
      }
    ]
  },
  {
    "_id": "unique_id_4",
    "role": "business",
    "name": "Fitness Pro",
    "email": "support@fitnesspro.com",
    "phone": "456-789-1234",
    "companyProfileLink": "https://fitnesspro.com",
    "city": "Los Angeles",
    "address": "101 Gym Street",
    "profileImage": "/assets/imgs/logos/logo9.png",
    "description": "Premier fitness and wellness center.",
    "jobOpenings": [
      {
        "title": "Personal Trainer",
        "description": "Certified personal trainer wanted.",
        "requirements": ["Certification required", "1+ year experience"]
      }
    ]
  },
  {
    "_id": "unique_id_5",
    "role": "business",
    "name": "EduSmart Tutors",
    "email": "admin@edusmart.com",
    "phone": "789-123-4567",
    "companyProfileLink": "https://edusmart.com",
    "city": "Seattle",
    "address": "202 Knowledge Ave",
    "profileImage": "/assets/imgs/logos/logo10.png",
    "description": "Tutoring services for all ages.",
    "jobOpenings": [
      {
        "title": "Math Tutor",
        "description": "Experienced math tutor needed.",
        "requirements": ["Degree in Mathematics", "Teaching experience"]
      },
      {
        "title": "Science Tutor",
        "description": "Science tutor with a passion for teaching.",
        "requirements": ["Science degree", "Teaching certification preferred"]
      }
    ]
  },
  {
    "_id": "unique_id_6",
    "role": "business",
    "name": "Creative Designs Studio",
    "email": "hello@creativedesigns.com",
    "phone": "654-321-7890",
    "companyProfileLink": "https://creativedesigns.com",
    "city": "Austin",
    "address": "303 Art Drive",
    "profileImage": "/assets/imgs/logos/logo11.png",
    "description": "Design and branding agency.",
    "jobOpenings": [
      {
        "title": "Graphic Designer",
        "description": "Creative graphic designer needed.",
        "requirements": ["Portfolio of design work", "2+ years experience"]
      }
    ]
  }
];


const Businesses = () => {
  const handleViewJobs = (businessId) => {
    // Implement logic to view job openings for the business
    console.log(`View jobs for business with ID: ${businessId}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Businesses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {businesses.map(business => (
          <BusinessCard
            key={business._id}
            business={business}
            onClickViewJobs={() => handleViewJobs(business._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Businesses;

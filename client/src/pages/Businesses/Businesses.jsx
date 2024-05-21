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
    "jobOpenings": [
      {
        "id": "job_id_1",
        "jobTitle": "Software Engineer",
        "business": "Tech Solutions Inc.",
        "businessLogoUrl": "/assets/logos/logo1.png",
        "location": "San Francisco, CA",
        "description": "Develop and maintain software solutions.",
        "salary": "12$ per year",
        "employmentType": "Fulltime",
        "createdAt": "2024-05-14T00:00:00Z",
        "updatedAt": "2024-05-14T00:00:00Z"
      },
      // Add more job openings here
    ]
  },
  // Add more businesses here
];

const App = () => {
  const handleViewJobs = (businessId) => {
    // Implement logic to view job openings for the business
    console.log(`View jobs for business with ID: ${businessId}`);
  };

  return (
    <div>
      {businesses.map(business => (
        <BusinessCard 
          key={business._id}
          business={business}
          onClickViewJobs={() => handleViewJobs(business._id)}
        />
      ))}
    </div>
  );
};

export default App;

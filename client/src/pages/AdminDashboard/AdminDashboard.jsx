// AdminDashboard.jsx
import React, { useState, useEffect } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  // Mock database
  const mockDatabase = [
    { id: 1, name: "John Doe", role: "user" },
    { id: 2, name: "Jane Smith", role: "business" },
    { id: 3, name: "Bob Johnson", role: "admin" },
    { id: 4, name: "Alice Brown", role: "user" },
    { id: 5, name: "Michael Davis", role: "business" },
    { id: 6, name: "Emily Wilson", role: "user" },
    { id: 7, name: "David Taylor", role: "admin" },
    { id: 8, name: "Sarah Anderson", role: "business" },
    { id: 9, name: "Daniel Martinez", role: "user" },
    { id: 10, name: "Olivia Thomas", role: "business" },
    { id: 11, name: "James Jackson", role: "admin" },
    { id: 12, name: "Sophia White", role: "user" },
    { id: 13, name: "Benjamin Harris", role: "business" },
    { id: 14, name: "Ava Martin", role: "user" },
    { id: 15, name: "William Thompson", role: "admin" },
    { id: 16, name: "Isabella Garcia", role: "business" },
    { id: 17, name: "Liam Martinez", role: "user" },
    { id: 18, name: "Charlotte Robinson", role: "admin" },
    { id: 19, name: "Henry Clark", role: "business" },
    { id: 20, name: "Amelia Lewis", role: "user" },
    { id: 21, name: "Alexander Walker", role: "admin" },
    { id: 22, name: "Mia Hall", role: "business" },
    { id: 23, name: "Daniel Young", role: "user" },
    { id: 24, name: "Harper Allen", role: "admin" },
    { id: 25, name: "Matthew King", role: "business" },
    { id: 26, name: "Elizabeth Wright", role: "user" },
    { id: 27, name: "David Scott", role: "admin" },
    { id: 28, name: "Sofia Green", role: "business" },
    { id: 29, name: "Joseph Baker", role: "user" },
    { id: 30, name: "Avery Adams", role: "admin" },
  ];

  useEffect(() => {
    // Simulating fetching users from MongoDB
    setUsers(mockDatabase);
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleRoleFilter = (role) => {
    setRoleFilter(role);
    setCurrentPage(1);
  };

  const filteredUsers = users.filter((user) => {
    const nameMatch = user.name.toLowerCase().includes(searchTerm.toLowerCase());
    const roleMatch = roleFilter === "" || user.role === roleFilter;
    return nameMatch && roleMatch;
  });

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleShowProfile = (userId) => {
    // Logic to show user profile
    console.log(`Showing profile for user with ID: ${userId}`);
  };

  const handleEdit = (userId) => {
    // Logic to edit user
    console.log(`Editing user with ID: ${userId}`);
  };

  const handleDelete = (userId) => {
    // Logic to delete user
    console.log(`Deleting user with ID: ${userId}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <div className="mb-4 flex items-center justify-between">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearch}
          className="border border-gray-300 rounded-l px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-[#646cff]"
        />
        <div>
          <button
            onClick={() => handleRoleFilter("user")}
            className="bg-[#646cff] hover:bg-[#4b50c2] text-white font-bold py-2 px-4 rounded-l mr-2"
          >
            User
          </button>
          <button
            onClick={() => handleRoleFilter("business")}
            className="bg-[#646cff] hover:bg-[#4b50c2] text-white font-bold py-2 px-4 mr-2"
          >
            Business
          </button>
          <button
            onClick={() => handleRoleFilter("")}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-r"
          >
            All
          </button>
        </div>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Role</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.id}</td>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.role}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleShowProfile(user.id)}
                  className="bg-[#646cff] hover:bg-[#4b50c2] text-white font-bold py-1 px-2 rounded mr-2"
                >
                  Show Profile
                </button>
                <button
                  onClick={() => handleEdit(user.id)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              />
            </PaginationItem>
            {Array.from({ length: Math.ceil(filteredUsers.length / usersPerPage) }, (_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  href="#"
                  onClick={() => paginate(i + 1)}
                  active={currentPage === i + 1}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === Math.ceil(filteredUsers.length / usersPerPage)}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default AdminDashboard;
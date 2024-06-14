import React, { useState } from 'react';
import { Avatar } from '@radix-ui/react-avatar';

const UserSettings = () => {
  const [name, setName] = useState('Trung');
  const [phone, setPhone] = useState('');
  const [link, setLink] = useState('');
  const [city, setCity] = useState('');
  const [description, setDescription] = useState('');
  const [languages, setLanguages] = useState('');
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('trungnt.bh11-274@st.usth.edu.vn');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Call API to update user settings
  };

  return (
    <div className="flex">
      <div className="w-1/4 bg-gray-100 p-4">
        <ul className="space-y-2">
          <li><a href="#profile" className="block hover:bg-gray-200 p-2">Profile</a></li>
          <li><a href="#account" className="block hover:bg-gray-200 p-2">Account</a></li>
        </ul>
      </div>
      <div className="w-3/4 p-8">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        <form onSubmit={handleSubmit}>
          <section id="profile">
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-2">Profile picture and cover</h2>
              <div className="flex items-center space-x-4">
                <Avatar src="https://i.pravatar.cc/150" alt="Profile picture" className="w-20 h-20 rounded-full" />
                <button className="px-4 py-2 bg-blue-500 text-white rounded">Change</button>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-2">Profile details</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label htmlFor="link" className="block mb-1">Profile Link</label>
                  <input
                    type="url"
                    id="link"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block mb-1">City</label>
                  <input
                    type="text"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="description" className="block mb-1">Description</label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                ></textarea>
              </div>
              <div className="mt-4">
                <label htmlFor="languages" className="block mb-1">Languages</label>
                <input
                  type="text"
                  id="languages"
                  value={languages}
                  onChange={(e) => setLanguages(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="title" className="block mb-1">User Title</label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-2">Public profile</h2>
              <div className="flex items-center">
                <input type="checkbox" id="publicProfile" className="mr-2" />
                <label htmlFor="publicProfile">Make my profile public</label>
              </div>
              <p className="text-sm text-gray-600 mt-1">This will allow others to discover you on Postman and learn more about your work.</p>
            </div>
          </section>
          
          <section id="account" className="mt-12">
            <h2 className="text-xl font-bold mb-4">Account</h2>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">Email</label>
              <div className="flex items-center">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mr-4"
                />
                <button className="px-4 py-2 bg-blue-500 text-white rounded">Update Email Address</button>
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-1">Password</label>
              <button className="px-4 py-2 bg-blue-500 text-white rounded">Change Password</button>
            </div>
            <div>
              <label className="block mb-1">Delete Account</label>
              <button className="px-4 py-2 bg-red-500 text-white rounded">Delete Account</button>
            </div>
          </section>
          
          <button type="submit" className="mt-8 px-6 py-3 bg-green-500 text-white rounded">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default UserSettings;
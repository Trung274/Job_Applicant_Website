import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import AuthPage from './pages/Auth/AuthPage';
import Jobs from './pages/Jobs/Jobs';
import Businesses from './pages/Businesses/Businesses'
import Footer from './components/Footer/Footer';
import UserProfile from './pages/UserProfile/UserProfile';
import BusinessProfile from './pages/BusinessProfile/BusinessProfile';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { UserContextProvider, UserContext } from './../context/userContext';

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
  const { user } = React.useContext(UserContext); // Use context to access user

  return (
    <UserContextProvider>
      <Navbar />
      <Toaster position='top-right' toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/businesses' element={<Businesses />} />
        <Route path='/profile' element={
          user ? (user.role === 'admin' ? <AdminDashboard /> :
            user.role === 'business' ? <BusinessProfile /> :
              <UserProfile />) :
            <Navigate to="/auth" replace /> // Redirect to login if not authenticated 
        } />
      </Routes>
      <Footer />
    </UserContextProvider>
  );
}

export default App;
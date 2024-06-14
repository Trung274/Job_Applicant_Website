import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import AuthPage from './pages/Auth/AuthPage';
import Jobs from './pages/Jobs/Jobs';
import Businesses from './pages/Businesses/Businesses';
import Footer from './components/Footer/Footer';
import UserProfile from './pages/UserProfile/UserProfile';
import BusinessProfile from './pages/BusinessProfile/BusinessProfile';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { UserContextProvider } from './../context/userContext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
  return (
      <UserContextProvider>
        <Navbar />
        <Toaster position='top-right' toastOptions={{ duration: 2000 }} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<AuthPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/jobs' element={<Jobs />} />
          <Route path='/businesses' element={<Businesses />} />
          <Route path='/profile' element={
            <PrivateRoute requiredRoles={['user', 'business', 'admin']}>
              <UserProfile />
            </PrivateRoute>
          } />
          <Route path='/admin' element={
            <PrivateRoute requiredRoles={['admin']}>
              <AdminDashboard />
            </PrivateRoute>
          } />
          <Route path='/business' element={
            <PrivateRoute requiredRoles={['business']}>
              <BusinessProfile />
            </PrivateRoute>
          } />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
        <Footer />
      </UserContextProvider>
  );
}

export default App;
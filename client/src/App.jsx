import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import axios from 'axios';
import { Toaster } from 'react-hot-toast'
import { UserContextProvider } from '../context/userContext';
import Dashboard from './pages/Dashboard/Dashboard';
import AuthPage from './pages/Auth/AuthPage';

axios.defaults.baseURL = "http//localhost:8000";
axios.defaults.withCredentials = true

function App() {
  return (
    <UserContextProvider>
      <Navbar />
      <Toaster position='top-right' toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </UserContextProvider>
  )
}

export default App;

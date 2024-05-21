import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { UserContext } from '../../../context/userContext';
import './Login.css';

export default function Login() {
    const { login } = useContext(UserContext);
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const loginUser = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/login', data);
            if (response.data.error) {
                toast.error(response.data.error);
            } else {
                login(response.data.user, response.data.token); // Backend returns user data and token
                navigate('/'); // Redirected to home
            }
        } catch (error) {
            console.error('Login error:', error);
            toast.error('Failed to log in');
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={loginUser} className="login-form">
                <label>Email</label>
                <input type="email" placeholder='Enter email...' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                <label>Password</label>
                <input type="password" placeholder='Enter Password...' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
                <button type='submit'>Login</button>
            </form>
        </div>
    );
}
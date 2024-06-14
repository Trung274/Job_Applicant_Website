import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { UserContext } from '../../../context/userContext';
import './Login.css';

export default function Login() {
    const { login } = useContext(UserContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = formData;

        if (email && password) {
            try {
                const response = await axios.post('/api/auth/login', { email, password });
                if (response.data.error) {
                    toast.error(response.data.error);
                } else {
                    login(response.data.profile, response.data.accessToken);
                    navigate('/');
                }
            } catch (error) {
                console.error('Login error:', error);
                toast.error('Failed to log in');
            }
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email..."
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password..."
                        value={formData.password}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
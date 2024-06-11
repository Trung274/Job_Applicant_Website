import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import "./Register.css"

export default function Register() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        role: '',
    })

    const registerUser = async (e) => {
        e.preventDefault();
        const { name, email, password, role, phone, city, avatar, background, description, languages, userTitle, profileLink, businessLink, address } = data;
        try {
            const response = await axios.post('/api/auth/register', {
                name,
                email,
                password,
                roleName: role,
                phone,
                city,
                avatar,
                background,
                description,
                languages,
                userTitle,
                profileLink,
                businessLink,
                address
            });
            if (response.data.error) {
                toast.error(response.data.error);
            } else {
                setData({});
                toast.success('Registration Successful, Welcome!');
                navigate('/auth');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="register-container">
            <form onSubmit={registerUser} className="register-form">
                <label>Name</label>
                <input type="text" placeholder='Enter name...' value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />

                <label>Email</label>
                <input type="email" placeholder='Enter email...' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />

                <label>Password</label>
                <input type="password" placeholder='Enter Password...' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />

                <label>You are here as..?</label>
                <select value={data.role} onChange={(e) => setData({ ...data, role: e.target.value })} className="role-dropdown">
                    <option value="">Select role</option>
                    <option value="user">User</option>
                    <option value="business">Business</option>
                </select>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
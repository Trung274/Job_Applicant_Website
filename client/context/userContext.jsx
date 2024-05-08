import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios.get('/profile', {
                headers: { Authorization: `Bearer ${token}` }
            }).then(response => {
                setUser(response.data); // Set user data if token is valid and user is authenticated
            }).catch(error => {
                console.log('Authentication token invalid:', error);
                localStorage.removeItem('token'); // Remove invalid token
            });
        }
    }, []);

    const login = (userData, token) => {
        localStorage.setItem('token', token); // Store token in localStorage
        setUser(userData); // Set user state
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; // Set default auth header for axios requests
    };

    const logout = () => {
        localStorage.removeItem('token'); // Remove token from localStorage
        setUser(null); // Clear user state
        delete axios.defaults.headers.common['Authorization']; // Remove auth header
    };

    return (
        <UserContext.Provider value={{ user, setUser, login, logout }}>
            {children}
        </UserContext.Provider> 
    );
}
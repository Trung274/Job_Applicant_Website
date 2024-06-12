import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = (userData, token) => {
        localStorage.setItem('accessToken', token);
        localStorage.setItem('userId', userData._id);
        localStorage.setItem('roleId', userData.roleId._id);
        setUser({ ...userData, id: userData._id });
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    };

    const logout = () => {
        localStorage.clear();
        setUser(null); // Clear user state
        delete axios.defaults.headers.common['Authorization']; // Remove auth header
    };

    return (
        <UserContext.Provider value={{ user, setUser, login, logout }}>
            {children}
        </UserContext.Provider> 
    );
}
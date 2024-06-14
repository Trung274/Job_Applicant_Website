import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('/api/user', { withCredentials: true });
                setUser(response.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    const login = async (username, password) => {
        try {
            const response = await axios.post('/api/login', { username, password });
            const { accessToken, userData } = response.data;
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('userId', userData._id);
            localStorage.setItem('roleId', userData.roleId._id);
            setUser({ ...userData, id: userData._id, refreshToken: response.data.refreshToken });
            axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        } catch (error) {
            console.error(error);
        }
    };

    const logout = async () => {
        try {
            await axios.post('/api/logout', {}, { withCredentials: true });
            localStorage.clear();
            setUser(null);
            delete axios.defaults.headers.common['Authorization'];
        } catch (error) {
            console.error(error);
        }
    };

    const refreshToken = async () => {
        try {
            const response = await axios.post('/api/refresh', { refreshToken: user.refreshToken });
            setUser((prevUser) => ({ ...prevUser, accessToken: response.data.accessToken }));
            localStorage.setItem('accessToken', response.data.accessToken);
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;
        } catch (error) {
            console.error(error);
            setUser(null);
            localStorage.clear();
            delete axios.defaults.headers.common['Authorization'];
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (user && user.refreshToken) {
                refreshToken();
            }
        }, 5 * 60 * 1000); // Refresh every 5 minutes

        return () => clearInterval(interval);
    }, [user]);

    const contextValue = {
        user,
        loading,
        login,
        logout,
        refreshToken,
    };

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
}
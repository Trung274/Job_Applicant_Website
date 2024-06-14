import React, { useContext, useEffect } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { UserContext } from '../../../context/userContext';
import axios from 'axios';

const PrivateRoute = ({ children, requiredRoles = [], ...rest }) => {
    const { user, loading, logout, setUser, refreshToken } = useContext(UserContext);

    useEffect(() => {
        const verifyToken = async () => {
            try {
                const token = localStorage.getItem('accessToken');
                if (token) {
                    const tokenParts = token.split('.');
                    const encodedPayload = tokenParts[1];
                    const decodedPayload = JSON.parse(atob(encodedPayload));

                    if (decodedPayload.exp * 1000 < Date.now()) {
                        // Token has expired, refresh the token
                        await refreshToken();
                    } else {
                        // Token is still valid
                        const response = await axios.get('/api/user', {
                            headers: { Authorization: `Bearer ${token}` },
                        });
                        setUser(response.data);
                    }
                }
            } catch (error) {
                console.error(error);
                logout();
            }
        };

        verifyToken();
    }, [logout, setUser, refreshToken]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <Navigate to="/auth" replace />;
    }

    const hasRequiredRole = requiredRoles.includes(user.roleId.name);
    if (!hasRequiredRole) {
        return <Navigate to="/auth" replace />;
    }

    return <Route {...rest} render={() => children} />;
};

export default PrivateRoute;
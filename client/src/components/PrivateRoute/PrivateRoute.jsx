import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../../context/userContext';

const PrivateRoute = ({ children, requiredRoles = [] }) => {
    debugger
    const { user } = useContext(UserContext);

    if (!user) {
        return <Navigate to="/auth" replace />;
    }

    const hasRequiredRole = requiredRoles.includes(user.roleId.name);
    if (!hasRequiredRole) {
        return <Navigate to="/auth" replace />;
    }

    return children;
};

export default PrivateRoute;
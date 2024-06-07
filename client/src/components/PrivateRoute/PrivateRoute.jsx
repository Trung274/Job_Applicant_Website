import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../../../context/userContext';

const PrivateRoute = ({ children, requiredRoles = [] }) => {
    const { user } = useContext(UserContext); // Access authentication and roles

    if (!user) {
      // Redirect to login page if not authenticated
      return <Navigate to="/auth" replace />;
    }
  
    const hasRequiredRole = requiredRoles.includes(user.role); // Check for required role
    if (!hasRequiredRole) {
      // Redirect to unauthorized page (optional)
      return <Navigate to="/auth" replace />;
    }
  
    return children || <Outlet />; // Render children or Outlet for nested routes
};
  
export default PrivateRoute;
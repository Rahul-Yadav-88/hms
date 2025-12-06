import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../../stores/authStore';

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const { user, isAuthenticated } = useAuthStore();
  const location = useLocation();

  // If not authenticated, redirect to login with return url
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If specific roles are required but user doesn't have any of them
  if (allowedRoles.length > 0 && (!user?.role || !allowedRoles.includes(user.role))) {
    // Redirect to appropriate dashboard based on role
    const roleRedirects = {
      admin: '/admin/dashboard',
      warden: '/warden/dashboard',
      accountant: '/accountant/dashboard',
    };
    
    return <Navigate to={roleRedirects[user.role] || '/login'} replace />;
  }

  return children;
};

export default ProtectedRoute;
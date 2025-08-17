import useAuthProvider from '@/hooks/useAuthProvider';
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router';

const ProtectedRoute = ({ role }) => {
  const { auth, loading } = useAuthProvider();
  const location = useLocation();

  // Show loading state while checking auth
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-purple-600 border-t-transparent"></div>
      </div>
    );
  }

  // Check if user is authenticated
  if (!auth?.user) {
    return (
      <Navigate to="/SignIn" state={{ from: location.pathname }} replace />
    );
  }

  // Check if user has required role
  if (role && auth?.user.role !== role) {
    return <Navigate to="/unauthorize" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;

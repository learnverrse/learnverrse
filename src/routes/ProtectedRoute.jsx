import useAuthProvider from '@/hooks/useAuthProvider';
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';

const ProtectedRoute = ({ role }) => {
  const navigate = useNavigate();
  const { auth } = useAuthProvider();

  useEffect(() => {
    if (!auth?.user) {
      navigate('/signIn');
      return;
    }

    // Redirect if role does not match
    if (role && auth.user.role !== role) {
      navigate('/signIn');
    }
  }, [auth, navigate, role]);

  // Optional: prevent flicker
  if (!auth?.user || (role && auth.user.role !== role)) return null;

  return <Outlet />;
};

export default ProtectedRoute;

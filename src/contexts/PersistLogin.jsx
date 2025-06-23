import React, { useEffect } from 'react';

import { axiosInstance } from '@/apis/axios';
import useAuthProvider from '@/hooks/useAuthProvider';
import { Outlet } from 'react-router';

const PersistLogin = () => {
  const { auth, setAuth, loading, setLoading } = useAuthProvider();

  useEffect(() => {
    let isMounted = true;

    const verifyUser = async () => {
      setLoading(true);
      try {
        // Refresh token using httpOnly cookie
        const tokenRes = await axiosInstance.get(import.meta.env.VITE_REFRESH, {
          withCredentials: true,
        });

        // Get user info with new token
        const userRes = await axiosInstance.get(
          import.meta.env.VITE_CHECK_AUTH,
          {
            headers: {
              Authorization: `Bearer ${tokenRes.data.token}`,
            },
          }
        );

        if (isMounted) {
          setAuth({
            token: tokenRes.data.token,
            user: userRes.data.data,
          });
        }
      } catch (error) {
        if (isMounted) {
          setAuth(null); // Clear auth on error
        }
        console.error(error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    if (!auth?.token) {
      verifyUser();
    } else {
      setLoading(false);
    }

    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line
  }, [auth?.token]);

  return <>{loading ? <p>Loading...</p> : <Outlet />}</>;
};

export default PersistLogin;

import { axiosPrivate } from '@/apis/axios';
import { useEffect } from 'react';
import useRefreshToken from './useRefreshToken';
import useAuthProvider from './useAuthProvider';

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const { auth } = useAuthProvider();

  useEffect(() => {
    const requestInterceptor = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${auth?.token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseInterceptor = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        console.log(error);
        const originalRequest = error?.config;
        // Check if token expired
        if (error.response?.status === 403 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            // Attempt to refresh the token
            const newAccessToken = await refresh();
            originalRequest.headers['Authorization'] =
              `Bearer ${newAccessToken}`;
            return axiosPrivate(originalRequest);
          } catch (refreshError) {
            // Redirect to login or logout user
            return Promise.reject(refreshError);
          }
        }
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestInterceptor);
      axiosPrivate.interceptors.response.eject(responseInterceptor);
    };
  }, [auth, refresh]);
  return axiosPrivate;
};

export default useAxiosPrivate;

import { axiosInstance } from '@/apis/axios';
import { toast } from 'react-toastify';
import useAuthProvider from './useAuthProvider';
import { useNavigate } from 'react-router';

const useLogout = () => {
  const { setAuth } = useAuthProvider();
  const navigate = useNavigate();

  const logout = async () => {
    await toast.promise(
      axiosInstance.post(import.meta.env.VITE_LOGOUT, null, {
        withCredentials: true,
      }),
      {
        pending: 'Logging out...',
        success: {
          render({ data }) {
            // cleanup after successful logout
            setAuth({});
            localStorage.removeItem('leseauth');
            navigate('/SignIn');
            return data?.data?.message || 'Logout successful!';
          },
        },
        error: {
          render({ data: err }) {
            const message =
              err?.response?.data?.message ||
              (err.message === 'Network Error'
                ? 'Network Error: Please check your internet connection'
                : 'Logout failed');
            return message;
          },
        },
      }
    );
  };

  return logout;
};

export default useLogout;

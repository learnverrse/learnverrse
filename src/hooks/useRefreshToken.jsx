import { axiosInstance } from '@/apis/axios';
import useAuthProvider from './useAuthProvider';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const useRefreshToken = () => {
  const { setAuth } = useAuthProvider();
  const navigate = useNavigate();
  const refresh = async () => {
    try {
      const response = await axiosInstance.get(import.meta.env.VITE_REFRESH, {
        withCredentials: true,
      });

      setAuth((prev) => {
        return { ...prev, token: response.data.token };
      });
      return response.data.token;
    } catch (error) {
      console.log('Error refreshing:', error);
      toast.error('Failed to refresh. Please Login.');
      localStorage.removeItem('leseauth');
      setAuth({ user: null, token: null });
      navigate('/SignIn');
    }
  };
  return refresh;
};

export default useRefreshToken;

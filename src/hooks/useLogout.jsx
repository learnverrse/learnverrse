import { axiosInstance } from '@/apis/axios';
import { toast } from 'react-toastify';
import useAuthProvider from './useAuthProvider';
import { useNavigate } from 'react-router';

const useLogout = () => {
  const { setAuth } = useAuthProvider();
  const navigate = useNavigate();
  const logout = async () => {
    try {
      const response = await axiosInstance.post('/logout', null, {
        withCredentials: true,
      });
      console.log(response.data);
      setAuth({});
      toast.success(response.data.message);
      setAuth({});
      localStorage.removeItem('leseauth');
      navigate('/login');
    } catch (error) {
      console.log(error);
      if (error.message === 'Network Error') {
        toast.error('Network Error: Please check your internet connection');
      }
      toast.error(error.response.data.message);
    }
  };
  return logout;
};

export default useLogout;

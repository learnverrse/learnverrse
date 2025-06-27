import { axiosInstance } from '@/apis/axios';
import useAuthProvider from './useAuthProvider';

const useRefreshToken = () => {
  const { setAuth } = useAuthProvider();
  const refresh = async () => {
    const response = await axiosInstance.get(import.meta.env.VITE_REFRESH, {
      withCredentials: true,
    });

    setAuth((prev) => {
      return { ...prev, token: response.data.token };
    });

    return response.data.token;
  };
  return refresh;
};

export default useRefreshToken;

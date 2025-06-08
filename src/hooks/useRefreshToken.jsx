import { axiosInstance } from '@/apis/axios';
import useAuthProvider from './useAuthProvider';

const useRefreshToken = () => {
  const { setAuth } = useAuthProvider();
  const refresh = async () => {
    const response = await axiosInstance.get('refresh', {
      withCredentials: true,
    });

    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log('new: ', JSON.stringify(response.data.token));
      return { ...prev, token: response.data.token };
    });

    return response.data.token;
  };
  return refresh;
};

export default useRefreshToken;

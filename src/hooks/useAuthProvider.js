import { AuthContext } from '@/contexts/AuthProvider';
import { useContext } from 'react';

const useAuthProvider = () => useContext(AuthContext);

export default useAuthProvider;

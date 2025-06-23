import { AppContext } from '@/contexts/AppProvider';
import { useContext } from 'react';

const useAppContext = () => useContext(AppContext);

export default useAppContext;

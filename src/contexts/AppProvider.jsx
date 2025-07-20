import React, { createContext, useReducer } from 'react';
import { AppReducer } from './Reducers/AppReducer';

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, {
    courseData: JSON.parse(localStorage.getItem('newCourseData')) || {},
  });

  // useEffect(() => {
  //   const handlekeyDown = (e) => {
  //     console.log(e.key);
  //     if (e.ctrlKey || (e.metaKey && e.key === 'p')) {
  //       e.preventDefault();
  //       toast.warning('printing is disabbled');
  //     }
  //   };

  //   const handleBlur = () => {
  //     document.body.style.filter = 'blur(30px)';
  //   };

  //   const handleFocus = () => {
  //     document.body.style.filter = 'none';
  //   };

  //   window.addEventListener('blur', handleBlur);
  //   window.addEventListener('focus', handleFocus);
  //   window.addEventListener('keydown', handlekeyDown);

  //   return () => window.removeEventListener('keydown', handlekeyDown);
  // }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
export { AppContext };

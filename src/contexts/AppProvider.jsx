import React, { createContext, useReducer } from 'react';
import { AppReducer } from './Reducers/AppReducer';

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, {
    courseData: JSON.parse(localStorage.getItem('newCourseData')) || {},
  });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
export { AppContext };

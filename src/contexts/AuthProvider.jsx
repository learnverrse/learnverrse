import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const storedAuth = localStorage.getItem('leseauth');
    return storedAuth ? JSON.parse(storedAuth) : {};
  });

  // Keep localStorage in sync when auth changes
  useEffect(() => {
    if (auth?.token) {
      localStorage.setItem('leseauth', JSON.stringify(auth));
    } else {
      localStorage.removeItem('leseauth');
    }
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

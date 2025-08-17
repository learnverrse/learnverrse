import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const storedAuth = localStorage.getItem('leseauth');
    return storedAuth ? JSON.parse(storedAuth) : { user: null, token: null };
  });

  const [loading, setLoading] = useState(true);

  // Keep localStorage in sync when auth changes
  useEffect(() => {
    if (auth?.token) {
      localStorage.setItem('leseauth', JSON.stringify(auth));
    } else {
      localStorage.removeItem('leseauth');
    }
  }, [auth]);

  // Set loading to false after initial auth check
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

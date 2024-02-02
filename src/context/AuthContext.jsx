import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return JSON.parse(localStorage.getItem('isAuthenticated')) || false;
  });
  const [userData, setUserData] = useState(() => {
    return JSON.parse(localStorage.getItem('userData')) || null;
  });
  const [userToken, setUserToken] = useState(() => {
    return localStorage.getItem('userToken') || null;
  });
  const [avatar, setAvatar] = useState(`${process.env.REACT_APP_URL}/${userData?.id}`);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const login = (token, userData) => {
    setIsAuthenticated(true);
    setUserToken(token);
    setUserData(userData);
    setAvatar(`${process.env.REACT_APP_URL}/${userData?.id}`);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserToken(null);
    setUserData(null);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userData');
    localStorage.removeItem('userToken');
  };

  useEffect(() => {
    localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
    localStorage.setItem('userData', JSON.stringify(userData));
    localStorage.setItem('userToken', userToken);
  }, [isAuthenticated, userData, userToken]);

  useEffect(() => {
    setIsImageLoaded(false);

    const img = new Image();
    img.onload = () => {
      setIsImageLoaded(true);
    };
    img.src = avatar;
  }, [avatar]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        userData,
        setUserData,
        userToken,
        setUserToken,
        avatar,
        setAvatar,
        isImageLoaded,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

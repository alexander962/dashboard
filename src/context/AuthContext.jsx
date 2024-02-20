import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

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
  const [userRefreshToken, setUserRefreshToken] = useState(() => {
    return localStorage.getItem('userRefreshToken') || null;
  });
  const [avatar, setAvatar] = useState(`${process.env.REACT_APP_URL}/${userData?.id}`);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const login = (token, userData, refreshToken) => {
    setIsAuthenticated(true);
    setUserToken(token);
    setUserRefreshToken(refreshToken);
    setUserData(userData);
    setAvatar(`${process.env.REACT_APP_URL}/${userData?.id}`);

    const tokenExpirationTime = 23 * 60 * 60 * 1000;
    setTimeout(() => refreshTokenFunc(), tokenExpirationTime);
  };

  const refreshTokenFunc = async () => {
    const apiUrl = process.env.REACT_APP_API_URL;

    try {
      const response = await axios.post(`${apiUrl}/auth/refresh`, {
        refreshToken: localStorage.getItem('userRefreshToken'),
      });

      setUserToken(response?.data?.accessToken);
      localStorage.setItem('userToken', response?.data?.accessToken);
      setUserRefreshToken(response?.data?.refreshToken);
      localStorage.setItem('userRefreshToken', response?.data?.refreshToken);
    } catch (error) {
      console.error('Error refreshing token:', error);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserToken(null);
    setUserRefreshToken(null);
    setUserData(null);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userData');
    localStorage.removeItem('userToken');
    localStorage.removeItem('userRefreshToken');
  };

  useEffect(() => {
    localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
    localStorage.setItem('userData', JSON.stringify(userData));
    localStorage.setItem('userToken', userToken);
    localStorage.setItem('userRefreshToken', userRefreshToken);
  }, [isAuthenticated, userData, userToken, userRefreshToken]);

  useEffect(() => {
    setIsImageLoaded(false);

    const img = new Image();
    img.onload = () => {
      setIsImageLoaded(true);
    };
    img.src = avatar;
  }, [avatar]);

  useEffect(() => {
    const lastTokenUpdateTime = localStorage.getItem('lastTokenUpdateTime');
    if (lastTokenUpdateTime) {
      const currentTime = new Date().getTime();
      const timeSinceLastUpdate = currentTime - Number(lastTokenUpdateTime);
      const tokenExpirationTime = 23 * 60 * 60 * 1000;
      if (timeSinceLastUpdate < tokenExpirationTime) {
        const timeUntilExpiration = tokenExpirationTime - timeSinceLastUpdate;
        setTimeout(() => refreshTokenFunc(), timeUntilExpiration);
      } else {
        refreshTokenFunc();
      }
    } else {
      refreshTokenFunc();
    }
  }, []);

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
        userRefreshToken,
        setUserRefreshToken,
        avatar,
        setAvatar,
        isImageLoaded,
        refreshTokenFunc,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

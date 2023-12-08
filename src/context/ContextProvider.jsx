import React, { createContext, useContext, useEffect, useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';

const StateContext = createContext();

const initialState = {
  userProfile: false,
};

export const ContextProvider = ({ children }) => {
  const { width } = useWindowSize();
  const [activeMenu, setActiveMenu] = useState(true);
  const [activePlans, setActivePlans] = useState(true);
  const [tableDisplay, setTableDisplay] = useState(false);

  useEffect(() => {
    setActiveMenu(width > 1024);
  }, [width]);
  return (
    <StateContext.Provider
      value={{
        initialState,
        activeMenu,
        setActiveMenu,
        activePlans,
        setActivePlans,
        tableDisplay,
        setTableDisplay,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

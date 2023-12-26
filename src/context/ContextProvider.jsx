import React, { createContext, useContext, useEffect, useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';

const StateContext = createContext();

const initialState = {
  userProfile: false,
};

export const ContextProvider = ({ children }) => {
  const { width } = useWindowSize();
  const [activeMenu, setActiveMenu] = useState(true);
  const [activeMenuMobile, setActiveMenuMobile] = useState(false);
  const [activePlans, setActivePlans] = useState(true);
  const [tableDisplay, setTableDisplay] = useState(false);
  const [selectedField, setSelectedField] = useState('Production');

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
        activeMenuMobile,
        setActiveMenuMobile,
        selectedField,
        setSelectedField,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

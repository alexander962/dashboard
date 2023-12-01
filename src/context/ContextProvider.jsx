import React, { createContext, useContext } from 'react';

const StateContext = createContext();

const initialState = {
  userProfile: false,
};

export const ContextProvider = ({ children }) => {
  return (
    <StateContext.Provider
      value={{
        initialState,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

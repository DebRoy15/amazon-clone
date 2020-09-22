import React, { createContext, useContext, useReducer } from "react";

// Need Context API
// 1. To track basket
// 2. To Track user

//Prepare the dateLayer
export const StateContext = createContext();

//Wrap our app
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Pull information from the data layer
export const useStateValue = () => useContext(StateContext);

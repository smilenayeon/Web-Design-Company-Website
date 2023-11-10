import React, { createContext, useReducer } from "react";

const initialState = {
  isAuthenticated: false
};

const AuthContext = createContext({});

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const login = () => {
    dispatch({
      type: "LOGIN"
    });
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;

import React, { createContext } from "react";
export const AuthContext = createContext();
const UserContext = ({ children }) => {
  return (
    <div>
      <AuthContext.Provider value={{ a: "al" }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default UserContext;

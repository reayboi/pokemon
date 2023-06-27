import React, { useState, useMemo, ReactNode } from "react";
import AuthContext from "./AuthContext";
import type { User } from "../../types/User";

type AuthContextProviderProps = {
  children: ReactNode;
};

function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [token, setToken] = useState<string | null>(null);
  const [userData, setUserData] = useState<User | null>(null);

  const authContextMemoized = useMemo(
    () => ({
      token,
      setToken,
      userData,
      setUserData,
    }),
    [token, userData]
  );

  return (
    <AuthContext.Provider value={authContextMemoized}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;

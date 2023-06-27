import { createContext } from "react";
import type { User } from "../../types/User";

type AuthContextType = {
  token: string | null | undefined;
  userData: User | null | undefined;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  setUserData: React.Dispatch<React.SetStateAction<User | null>>;
};
const AuthContext = createContext<AuthContextType>({
  token: null,
  userData: null,
  setToken: () => null,
  setUserData: () => null,
});

export default AuthContext;

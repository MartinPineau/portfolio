import { useReducer, type ReactNode } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { type User } from "../types";
import { AuthContext, type AuthAction } from "./authContext";
import { GOOGLE_CLIENT_ID, logout as googleLogout } from "../services/authService";

function authReducer(_state: User | null, action: AuthAction): User | null {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "LOGOUT":
      return null;
  }
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, dispatch] = useReducer(authReducer, null);

  const login = (user: User) => dispatch({ type: "LOGIN", payload: user });
  const logout = () => {
    googleLogout();
    dispatch({ type: "LOGOUT" });
  };

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <AuthContext.Provider value={{ user, login, logout }}>
        {children}
      </AuthContext.Provider>
    </GoogleOAuthProvider>
  );
};

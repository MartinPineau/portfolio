import { useReducer, useEffect, type ReactNode } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { UserSchema, type User } from "../types";
import { AuthContext, type AuthAction } from "./authContext";
import { GOOGLE_CLIENT_ID, logout as googleLogout } from "../services/authService";

const STORAGE_KEY = "portfolio_auth";

function authReducer(_state: User | null, action: AuthAction): User | null {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "LOGOUT":
      return null;
  }
}

function getInitialUser(): User | null {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return null;
  const result = UserSchema.safeParse(JSON.parse(stored));
  return result.success ? result.data : null;
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, dispatch] = useReducer(authReducer, undefined, getInitialUser);

  useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [user]);

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

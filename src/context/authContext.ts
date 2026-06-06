import { createContext } from "react";
import { type User } from "../types";

export type AuthContextType = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
};

export type AuthAction =
  | { type: "LOGIN"; payload: User }
  | { type: "LOGOUT" };

export const AuthContext = createContext<AuthContextType | null>(null);

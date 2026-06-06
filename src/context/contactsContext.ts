import { createContext } from "react";
import { type ContactMessage } from "../types";

export type ContactsContextType = {
  messages: ContactMessage[];
  addMessage: (message: ContactMessage) => void;
  markAsRead: (id: string) => void;
};

export type ContactsAction =
  | { type: "ADD"; payload: ContactMessage }
  | { type: "MARK_READ"; payload: string };

export const ContactsContext = createContext<ContactsContextType | null>(null);

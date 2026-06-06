import { useReducer, useEffect, type ReactNode } from "react";
import { ContactMessageSchema, type ContactMessage } from "../types";
import { ContactsContext, type ContactsAction } from "./contactsContext";
import { z } from "zod";

const STORAGE_KEY = "portfolio_messages";

function contactsReducer(state: ContactMessage[], action: ContactsAction): ContactMessage[] {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state];
    case "MARK_READ":
      return state.map((m) => (m.id === action.payload ? { ...m, read: true } : m));
  }
}

function getInitialMessages(): ContactMessage[] {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return [];
  const result = z.array(ContactMessageSchema).safeParse(JSON.parse(stored));
  return result.success ? result.data : [];
}

export const ContactsProvider = ({ children }: { children: ReactNode }) => {
  const [messages, dispatch] = useReducer(contactsReducer, undefined, getInitialMessages);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  const addMessage = (message: ContactMessage) =>
    dispatch({ type: "ADD", payload: message });

  const markAsRead = (id: string) =>
    dispatch({ type: "MARK_READ", payload: id });

  return (
    <ContactsContext.Provider value={{ messages, addMessage, markAsRead }}>
      {children}
    </ContactsContext.Provider>
  );
};

import { useContext } from "react";
import { ContactsContext } from "../context/contactsContext";

export const useContacts = () => {
  const context = useContext(ContactsContext);
  if (!context) throw new Error("useContacts must be used within a ContactsProvider");
  return context;
};

import { createContext, useContext } from "react";
import {contactsMock} from "../model/contactsMock.model.js";

const ContactsContext = createContext(null);

export const ContactsProvider = ({ children }) => {
    return (
        <ContactsContext.Provider value={contactsMock}>
            {children}
        </ContactsContext.Provider>
    );
};

export const useContacts = () => {
    const ctx = useContext(ContactsContext);
    if (!ctx) throw new Error("useContacts must be used inside ContactsProvider");
    return ctx;
};
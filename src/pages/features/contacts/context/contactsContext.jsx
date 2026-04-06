import { createContext, useContext, useState, useEffect } from 'react';
import {getContacts} from "../model/contacts.api.js";

const ContactsContext = createContext();

export const ContactsProvider = ({ children }) => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        getContacts().then(setContacts);
    }, []);

    return (
        <ContactsContext.Provider value={{ contacts }}>
            {children}
        </ContactsContext.Provider>
    );
};

export const useContacts = () => useContext(ContactsContext);
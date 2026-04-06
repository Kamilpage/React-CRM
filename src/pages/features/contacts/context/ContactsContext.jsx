import { createContext, useContext, useState } from "react";
import { contactsMock } from "../model/contactsMock.model.js";

const ContactsContext = createContext(null);

export const ContactsProvider = ({ children }) => {
    const [contacts, setContacts] = useState(contactsMock);

    const addContact = (group, contact) =>
        setContacts(prev => ({
            ...prev,
            [group]: [...prev[group], { ...contact, id: crypto.randomUUID() }],
        }));

    const editContact = (id, updates) =>
        setContacts(prev =>
            Object.fromEntries(
                Object.entries(prev).map(([group, list]) => [
                    group,
                    list.map(c => (c.id === id ? { ...c, ...updates } : c)),
                ])
            )
        );

    const deleteContact = (id) =>
        setContacts(prev =>
            Object.fromEntries(
                Object.entries(prev).map(([group, list]) => [
                    group,
                    list.filter(c => c.id !== id),
                ])
            )
        );

    return (
        <ContactsContext.Provider value={{ contacts, addContact, editContact, deleteContact }}>
            {children}
        </ContactsContext.Provider>
    );
};

export const useContacts = () => {
    const ctx = useContext(ContactsContext);
    if (!ctx) throw new Error("useContacts must be used inside ContactsProvider");
    return ctx;
};

import { createContext, useContext, useState } from "react";
import { EMAILS } from "../model/emails.data";
import {useSearch} from "../../../../app/context/SearchContext.jsx";

const EmailsContext = createContext();

export const EmailsProvider = ({ children }) => {
    const [emails, setEmails] = useState(EMAILS);
    const [search, setSearch] = useState("");
    const { query } = useSearch();

    const filteredEmails = emails.filter((email) =>
        email.subject.toLowerCase().includes(query.toLowerCase()) ||
        email.preview.toLowerCase().includes(query.toLowerCase())
    );

    const markAsRead = (id) => {
        setEmails((prev) =>
            prev.map((email) =>
                email.id === id ? { ...email, read: true } : email
            )
        );
    };

    const addEmail = (newEmail) => {
        setEmails((prev) => [
            {
                id: Date.now(),
                ...newEmail,
                date: new Date().toLocaleString(),
                read: false,
            },
            ...prev,
        ]);
    };

    return (
        <EmailsContext.Provider
            value={{
                emails: filteredEmails,
                search,
                setSearch,
                markAsRead,
                addEmail
            }}
        >
            {children}
        </EmailsContext.Provider>
    );
};

export const useEmails = () => useContext(EmailsContext);
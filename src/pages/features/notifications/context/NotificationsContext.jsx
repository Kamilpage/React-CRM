import { createContext, useContext, useState } from "react";

const NotificationsContext = createContext();

export const NotificationsProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const [notifications, setNotifications] = useState([
        { id: 1, text: "Frank mentioned you in a comment", read: false },
        { id: 2, text: "Elsa requesting edit access", read: false },
        { id: 3, text: "You were added to group 'Managers'", read: true }
    ]);

    const toggle = () => setIsOpen(prev => !prev);

    const markAllRead = () => {
        setNotifications(n => n.map(item => ({ ...item, read: true })));
    };

    const markRead = id => {
        setNotifications(n => n.map(item =>
            item.id === id ? { ...item, read: true } : item
        ));
    };

    return (
        <NotificationsContext.Provider
            value={{ isOpen, toggle, notifications, markAllRead, markRead }}
        >
            {children}
        </NotificationsContext.Provider>
    );
};

export const useNotifications = () => useContext(NotificationsContext);
import React, { useState } from 'react';
import {users} from './users.model.js'

const UserContext = React.createContext(null);
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(users[0]);

    return (
        <UserContext.Provider value={{ user, setUser, users }}>
            {children}
        </UserContext.Provider>
    );
};
export const useUser = () => {
    const context = React.useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within UserProvider');
    }
    return context;
};
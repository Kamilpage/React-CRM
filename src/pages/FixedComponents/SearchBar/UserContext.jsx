import React, { useState } from 'react';
import user1 from '../../../assets/icons/others/person.png';
import defaultUser from '../../../assets/icons/others/defaultUser.svg';

const UserContext = React.createContext(null);

export const UserProvider = ({ children }) => {
    const users = [
        { id: 1, name: 'Alex J.', avatar: user1 },
        { id: 2, name: 'Maria S.', avatar: defaultUser },
        { id: 3, name: 'Daniel K.', avatar: defaultUser },
    ];

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
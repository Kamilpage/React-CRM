import React from 'react';
import {ContactsProvider} from "../context/ContactsContext.jsx";
import ContactsTopbar from "../ui/ContactsTopbar/ContactsTopbar.jsx";
import {Outlet} from "react-router-dom";

const ContactsLayout = () => {
    return (
        <>
            <ContactsProvider>
                <ContactsTopbar/>
                <Outlet/>
            </ContactsProvider>
            
        </>
    );
};

export default ContactsLayout;
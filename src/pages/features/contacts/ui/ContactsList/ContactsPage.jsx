import React, { useState } from 'react';
import {ContactsProvider} from "../../context/contactsContext.jsx";
import ContactsList from "./ContactsList.jsx";
import Modal from "../../../../../shared/modals/Modal/Modal.jsx";
import ContactDetails from "./ContactDetails.jsx";


const ContactsPage = () => {
    const [selectedContact, setSelectedContact] = useState(null);

    return (
        <ContactsProvider>

            <ContactsList onSelect={setSelectedContact} />

            <Modal
                isOpen={!!selectedContact}
                onClose={() => setSelectedContact(null)}
            >
                {selectedContact && (
                    <ContactDetails contact={selectedContact} />
                )}
            </Modal>
        </ContactsProvider>
    );
};

export default ContactsPage;
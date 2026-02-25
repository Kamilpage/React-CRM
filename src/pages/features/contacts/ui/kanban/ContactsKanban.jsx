import ContactsColumn from "./ContactsColumn.jsx";
import styles from "./contactsKanban.module.css";
import {useContacts} from "../../context/ContactsContext.jsx";

const ContactsKanban = () => {
    const contacts = useContacts();

    return (
        <div className={styles.wrapper}>
            <ContactsColumn
                title="Customers"
                items={contacts.customers}
                color="#4F46E5"
            />

            <ContactsColumn
                title="Employee"
                items={contacts.employees}
                color="#7C3AED"
            />

            <ContactsColumn
                title="Partners"
                items={contacts.partners}
                color="#F59E0B"
            />
        </div>
    );
};

export default ContactsKanban;
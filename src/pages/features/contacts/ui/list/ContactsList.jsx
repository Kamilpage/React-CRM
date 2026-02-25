import { useContacts } from "../../context/ContactsContext.jsx";
import ContactsListGroup from "./ContactsListGroup.jsx";
import styles from "./contactsList.module.css";

const ContactsList = () => {
    const contacts = useContacts();

    return (
        <div className={styles.wrapper}>
            <ContactsListGroup
                title="Customers"
                color="#10B981"
                items={contacts.customers}
            />

            <ContactsListGroup
                title="Employees"
                color="#3B82F6"
                items={contacts.employees}
            />

            <ContactsListGroup
                title="Partners"
                color="#F59E0B"
                items={contacts.partners}
            />
        </div>
    );
};

export default ContactsList;
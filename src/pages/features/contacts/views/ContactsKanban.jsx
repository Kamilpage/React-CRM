import { useContacts } from "../context/ContactsContext";
import { ContactCard } from "../components/ContactCard/ContactCard";
import styles from "./kanban.module.css";

export const ContactsKanban = () => {
    const { groups } = useContacts();

    return (
        <div className={styles.kanban}>
            {groups.map(group => (
                <div key={group.id} className={styles.column}>
                    <div className={styles.columnHeader}>
                        <span className={styles.title}>{group.title}</span>
                        <span className={styles.count}>{group.contacts.length}</span>
                    </div>

                    <div className={styles.cards}>
                        {group.contacts.map(c => (
                            <ContactCard key={c.id} contact={c} groupId={group.id} />
                        ))}
                    </div>
                </div>
            ))}
        </div>

    );
};
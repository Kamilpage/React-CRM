import { useContacts } from "../../context/ContactsContext.jsx";
import styles from "./contactsGrid.module.css";

const ContactsGrid = () => {
    const contacts = useContacts();

    // объединяем как в таблице
    const rows = [
        ...contacts.customers.map(c => ({ ...c, group: "Customer" })),
        ...contacts.employees.map(c => ({ ...c, group: "Employee" })),
        ...contacts.partners.map(c => ({ ...c, group: "Partner" })),
    ];

    return (
        <div className={styles.gridWrapper}>
            <div className={styles.grid}>
                {rows.map(item => (
                    <div className={styles.card} key={item.id}>
                        <div className={styles.top}>
                            <img src={item.avatar} className={styles.avatar} alt="" />

                            <div className={styles.info}>
                                <div className={styles.name}>{item.name}</div>
                                <div className={styles.email}>{item.email}</div>
                                <div className={styles.city}>{item.city}</div>
                            </div>

                            <button className={styles.menu}>⋯</button>
                        </div>

                        <div className={styles.footer}>
              <span className={`${styles.tag} ${styles[item.group.toLowerCase()]}`}>
                {item.group}
              </span>

                            <button className={styles.btn}>Call</button>
                            <button className={styles.btn}>Mail</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContactsGrid;
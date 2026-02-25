import { useContacts } from "../../context/ContactsContext.jsx";
import styles from "./contactsTable.module.css";

const ContactsTable = () => {
    const contacts = useContacts();

    // Объединяем все категории в одну таблицу
    const rows = [
        ...contacts.customers.map(c => ({ ...c, group: "Customer" })),
        ...contacts.employees.map(c => ({ ...c, group: "Employee" })),
        ...contacts.partners.map(c => ({ ...c, group: "Partner" })),
    ];

    return (
        <div className={styles.tableWrapper}>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Type</th>
                    <th>Phone</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                {rows.map(item => (
                    <tr key={item.id}>
                        <td>
                            <input type="checkbox" className={styles.checkbox} />
                        </td>

                        <td className={styles.nameCell}>
                            <img src={item.avatar} alt="" className={styles.avatar} />
                            <span>{item.name}</span>
                        </td>

                        <td>{item.email}</td>
                        <td>{item.city}</td>

                        <td>
                <span className={`${styles.tag} ${styles[item.group.toLowerCase()]}`}>
                  {item.group}
                </span>
                        </td>

                        <td>{item.phone}</td>

                        <td>
                            <button className={styles.menu}>⋯</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ContactsTable;
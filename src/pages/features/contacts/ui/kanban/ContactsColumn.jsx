import ContactCard from "./ContactCard.jsx";
import styles from "./contactsColumn.module.css";

const ContactsColumn = ({ title, items, color }) => {
    return (
        <div className={styles.column}>
            <div className={styles.header}>
                <div className={styles.titleGroup}>
          <span className={styles.title} style={{ background: color + "22" }}>
            {title}
          </span>

                    <span className={styles.count}>{items.length}</span>
                </div>

                <button className={styles.addButton}>+</button>
            </div>

            <div className={styles.cards}>
                {items.map(item => (
                    <ContactCard key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
};

export default ContactsColumn;
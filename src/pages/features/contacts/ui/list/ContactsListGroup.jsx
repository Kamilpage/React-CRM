import ContactsListItem from "./ContactsListItem.jsx";
import styles from "./contactsListGroup.module.css";

const ContactsListGroup = ({ title, items, color }) => {
    return (
        <div className={styles.group}>
            <div className={styles.header}>
                <div className={styles.left}>
          <span
              className={styles.dot}
              style={{ background: color }}
          ></span>
                    <span className={styles.title}>{title}</span>
                    <span className={styles.count}>{items.length} contacts</span>
                </div>

                <button className={styles.createBtn}>+ Create Contact</button>
            </div>

            <div className={styles.list}>
                {items.map(item => (
                    <ContactsListItem key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
};

export default ContactsListGroup;
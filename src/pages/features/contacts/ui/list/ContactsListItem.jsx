import styles from "./contactsListItem.module.css";

const ContactsListItem = ({ data }) => {
    return (
        <div className={styles.item}>
            <input type="checkbox" className={styles.checkbox} />

            <div className={styles.info}>
                <div className={styles.name}>{data.name}</div>
                <div className={styles.email}>{data.email}</div>
            </div>

            <div className={styles.tags}>
                <span className={styles.tag}>{data.city}</span>
            </div>

            <img src={data.avatar} alt="" className={styles.avatar} />

            <button className={styles.menu}>⋯</button>
        </div>
    );
};

export default ContactsListItem;
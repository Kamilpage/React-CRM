import styles from './contacts.module.css';
import Card from "./Card.jsx";

const ContactCard = ({ contact, onClick }) => {
    return (
        <div onClick={onClick}>
            <Card>
                <div className={styles.header}>
                    <div className={styles.avatar}>
                        {contact.name[0]}
                    </div>

                    <div>
                        <div className={styles.name}>{contact.name}</div>
                        <div className={styles.email}>{contact.email}</div>
                    </div>
                </div>

                <div className={styles.company}>
                    {contact.company}
                </div>
            </Card>
        </div>
    );
};

export default ContactCard;
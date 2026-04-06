import styles from './contactDetails.module.css';

const ContactDetails = ({ contact }) => {
    return (
        <div className={styles.container}>

            <div className={styles.top}>
                <div className={styles.avatar}>
                    {contact.name[0]}
                </div>

                <div>
                    <h2>{contact.name}</h2>
                    <p>{contact.email}</p>
                </div>
            </div>

            <div className={styles.info}>
                <div>
                    <span>Company</span>
                    <p>{contact.company}</p>
                </div>

                <div>
                    <span>Phone</span>
                    <p>{contact.phone || '+998 90 000 00 00'}</p>
                </div>
            </div>

            <div className={styles.actions}>
                <button className={styles.primary}>
                    💬 Message
                </button>

                <button className={styles.secondary}>
                    📞 Call
                </button>
            </div>

        </div>
    );
};

export default ContactDetails;
import styles from "./contactCard.module.css";

const ContactCard = ({ data }) => {
    return (
        <div className={styles.card}>
            <div className={styles.top}>
                <img src={data.avatar} alt={data.name} className={styles.avatar} />

                <div className={styles.info}>
                    <div className={styles.name}>{data.name}</div>
                    <div className={styles.city}>{data.city}</div>
                </div>

                <button className={styles.menu}>⋯</button>
            </div>

            <div className={styles.contacts}>
                <div>{data.email}</div>
                <div>{data.phone}</div>
            </div>

            <div className={styles.buttons}>
                <button className={styles.btn}>Call</button>
                <button className={styles.btn}>Mail</button>
            </div>
        </div>
    );
};

export default ContactCard;
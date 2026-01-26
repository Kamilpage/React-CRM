import styles from './agenda.module.css';

const AgendaItem = ({ item }) => {
    return (
        <div className={styles.item}>
            <span className={`${styles.time} ${styles[item.color]}`}>
                {item.time}
            </span>

            <strong className={styles.itemTitle}>
                {item.title}
            </strong>

            <span className={styles.description}>
                {item.description}
            </span>
        </div>
    );
};

export default AgendaItem;

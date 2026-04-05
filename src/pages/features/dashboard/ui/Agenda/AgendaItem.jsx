import { motion } from "framer-motion";
import styles from './agenda.module.css';

const itemAnimation = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.3 },

    }
};

const AgendaItem = ({ item }) => {
    return (
        <motion.div
            className={styles.item}
            variants={itemAnimation}
            whileHover={{ x: 4 }}
        >
            <span className={`${styles.time} ${styles[item.color]}`}>
                {item.time}
            </span>

            <strong className={styles.itemTitle}>
                {item.title}
            </strong>

            <span className={styles.description}>
                {item.description}
            </span>
        </motion.div>
    );
};

export default AgendaItem;
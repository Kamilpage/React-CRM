import { motion } from "framer-motion";
import styles from '../emailsTopbar/emailsTopbar.module.css'

const EmailCard = ({ email }) => {
    return (
        <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.02 }}
        >
            <div className={styles.subject}>
                {email.subject}
            </div>

            <div className={styles.preview}>
                {email.preview}
            </div>

            <div className={styles.footer}>
                <div className={styles.user}>
                    <img src={email.avatar} />
                    {email.sender}
                </div>

                <span className={styles.date}>
                    {email.date}
                </span>
            </div>
        </motion.div>
    );
};

export default EmailCard;
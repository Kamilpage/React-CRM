import AgendaItem from './AgendaItem';
import styles from './agenda.module.css';
import {DASHBOARD_AGENDA} from "../../model/dashboard.agenda.js";
import { motion } from "framer-motion";


const UpcomingAgenda = () => {
    return (
        <motion.div
            className={styles.card}
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.08 }}
        >

            <h3 className={styles.title}>Upcoming Agenda</h3>

            <div className={styles.list}>
                {DASHBOARD_AGENDA.map(item => (
                    <AgendaItem key={item.id} item={item} />
                ))}
            </div>
        </motion.div>
    );
};

export default UpcomingAgenda;

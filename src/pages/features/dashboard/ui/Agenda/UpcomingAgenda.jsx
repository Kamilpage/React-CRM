import AgendaItem from './AgendaItem';
import styles from './agenda.module.css';
import {DASHBOARD_AGENDA} from "../../model/dashboard.agenda.js";

const UpcomingAgenda = () => {
    return (
        <div className={styles.card}>
            <h3 className={styles.title}>Upcoming Agenda</h3>

            <div className={styles.list}>
                {DASHBOARD_AGENDA.map(item => (
                    <AgendaItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default UpcomingAgenda;

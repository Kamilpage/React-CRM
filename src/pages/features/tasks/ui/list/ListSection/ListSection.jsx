import { ListItem } from "../ListItem/ListItem.jsx";
import styles from './listSection.module.css'

export const ListSection = ({ column, onCreateTask }) => {
    return (
        <section className={styles.listSection}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <span className={`${styles.statusDot} ${styles[`statusDot_${column.id}`]}`} />
                    {column.title}
                    <span className={styles.count}>{column.tasks.length} tasks</span>
                </div>

                <button className={styles.createTaskBtn} onClick={onCreateTask}>
                    + Create Task
                </button>
            </div>

            <div className={styles.tasks}>
                {column.tasks.map(task => (
                    <ListItem key={task.id} task={task} />
                ))}
            </div>
        </section>
    );
};
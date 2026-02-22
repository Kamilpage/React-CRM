import React from 'react';
import styles from './completedTasksCard.module.css'

const CompletedTasksCard = ({ summary }) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>Completed Task</h2>

            <div className={styles.row}>
                <h1 className={styles.value}>{summary.total} Task</h1>

                <button className={styles.button}>View All</button>
            </div>
        </div>
    );
};

export default CompletedTasksCard;
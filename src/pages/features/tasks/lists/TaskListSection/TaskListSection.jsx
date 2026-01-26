import React from 'react';
import styles from './taskListSection.module.css'
import TaskListRow from "../TaskListRow/TaskListRow.jsx";

const TaskListSection = ({ column }) => {
    return (
        <section className={styles.section}>
            <header className={styles.sectionHeader}>
                <span className={styles.dot} />
                <h3>{column.title}</h3>
                <span className={styles.count}>
          {column.tasks.length} tasks
        </span>
            </header>

            <button className={styles.createBtn}>
                + Create Task
            </button>

            <div className={styles.rows}>
                {column.tasks.map(task => (
                    <TaskListRow
                        key={task.id}
                        task={task}
                    />
                ))}
            </div>
        </section>
    );
};

export default TaskListSection;
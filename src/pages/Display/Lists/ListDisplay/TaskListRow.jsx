import React from 'react';
import styles from "./listTopbar.module.css";
import {TAGS_MAP} from "../../../FixedComponents/TasksTopbar/AddTaskModal/tags.js";

const TaskListRow = ({ task }) => {

    return (
        <div className={styles.row}>
            <input type="checkbox" />

            <span className={styles.title}>
        {task.title}
      </span>

            {task.dueDate && (
                <span className={styles.dueDate}>
          📅 {task.dueDate}
        </span>
            )}

            <div className={styles.tags}>
                {task.tags?.map(tagId => {
                    const tag = TAGS_MAP[tagId];
                    return (
                        <span
                            key={tagId}
                            className={styles.tag}
                            style={{
                                color: tag.color,
                                background: tag.background,
                            }}
                        >
              {tag.label}
            </span>
                    );
                })}
            </div>

            <div className={styles.actions}>⋮</div>
        </div>
    );
};
export default TaskListRow;

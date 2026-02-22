import React from 'react';
import styles from "./taskListView.module.css";
import TaskListRow from "../TaskListRow/TaskListRow.jsx";
import { useTasks} from "../../context/TasksContext.jsx";

const TaskListView = () => {
    const { tasks } = useTasks();
    const tasksItem = tasks.flatMap(col =>
        col.tasks.map(task => ({
            ...task,
            columnId: col.id,
            columnTitle: col.title,
        }))
    );

    return (
        <>
            <div className={styles.list}>
                {tasksItem.map(task => (
                    <TaskListRow
                        key={task.id}
                        task={task}
                    />
                ))}
            </div>
        </>
    );
};

export default TaskListView;
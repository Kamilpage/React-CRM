import React from 'react';
import styles from "./taskListView.module.css";
import TaskListRow from "../ListDisplay/TaskListRow.jsx";
import {useKanban} from "../../Kanban/Kanban/KanbanContext.jsx";

const TaskListView = () => {
    const { kanbanType } = useKanban();
    const tasks = kanbanType.flatMap(col =>
        col.tasks.map(task => ({
            ...task,
            columnId: col.id,
            columnTitle: col.title,
        }))
    );

    return (
        <>
            <div className={styles.list}>
                {tasks.map(task => (
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
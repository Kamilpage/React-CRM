import React from 'react';
import styles from "./listUnit.module.css";
import ListDisplay from "../ListDisplay/ListDisplay.jsx";
import {useKanban} from "../../Kanban/Kanban/KanbanContext.jsx";

const ListUnit = () => {
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
                    <ListDisplay
                        key={task.id}
                        task={task}
                    />
                ))}
            </div>
        </>
    );
};

export default ListUnit;
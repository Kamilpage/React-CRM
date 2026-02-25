import React from 'react';
import { DndContext } from '@dnd-kit/core';
import styles from './kanbanBoard.module.css';
import KanbanColumn from './KanbanColumn.jsx';
import { useTasks } from '../../context/TasksContext.jsx';
import { useOutletContext } from "react-router-dom";

const KanbanBoard = () => {
    const { onOpenAddTask } = useOutletContext();
    const { columns, moveTask, canMove } = useTasks();
    const handleAddTask = (columnId) => {
        onOpenAddTask(columnId);
    };

    const handleDragEnd = ({ active, over }) => {
        if (!over) return;

        const fromColumn = active.data.current.columnId;
        const toColumn = over.data.current?.columnId;
        const toIndex = over.data.current?.index ?? 0;

        if (!fromColumn || !toColumn) return;

        // правила статусов
        if (!canMove(fromColumn, toColumn)) return;

        moveTask(fromColumn, toColumn, active.id, toIndex);
    };

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <div className={styles.kanban}>
                {columns.map(col => (
                    <KanbanColumn
                        key={col.id}
                        col={col}
                        onAddTask={() => handleAddTask(col.id)}
                    />
                ))}
            </div>
        </DndContext>
    );
};

export default KanbanBoard;
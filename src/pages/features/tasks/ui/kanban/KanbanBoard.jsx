import React from 'react';
import styles from './kanbanBoard.module.css';
import { DndContext } from '@dnd-kit/core';
import { useTasks} from '../../context/TasksContext.jsx';
import KanbanColumn from './KanbanColumn.jsx';
import AddTaskModal from "../modals/AddTaskModal/AddTaskModal.jsx";

const KanbanBoard = () => {
    const { columns, moveTask } = useTasks();

    const [isAddOpen, setIsAddOpen] = React.useState(false);
    const [defaultStatus, setDefaultStatus] = React.useState('planned');

    const handleAddKanban = (columnId) => {
        setDefaultStatus(columnId);
        setIsAddOpen(true);
    };

    const handleDragEnd = ({ active, over }) => {
        if (!over) return;

        const fromColumn = active.data.current.columnId;

        let toColumn;
        let toIndex = 0;

        if (over.data.current?.type === 'task') {
            toColumn = over.data.current.columnId;
            toIndex = over.data.current.index;
        }

        if (over.data.current?.type === 'column') {
            toColumn = over.data.current.columnId;
            toIndex = 0;
        }

        if (!fromColumn || !toColumn) return;

        if (fromColumn === 'completed') return;
        if (fromColumn === 'planned' && toColumn === 'completed') return;

        moveTask(fromColumn, toColumn, active.id, toIndex);
    };

    return (
        <>
            <DndContext onDragEnd={handleDragEnd}>
                <div className={styles.kanban}>
                    {columns.map(col => (
                        <KanbanColumn
                            key={col.id}
                            col={col}
                            onAddTask={handleAddKanban}
                        />
                    ))}
                </div>
            </DndContext>

            <AddTaskModal
                isOpen={isAddOpen}
                onClose={() => setIsAddOpen(false)}
                defaultStatus={defaultStatus}
            />
        </>
    );
};

export default KanbanBoard;
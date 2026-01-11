import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import TaskUnit from '../routing/TaskUnit.jsx';
import styles from './kanban.module.css';

const KanbanColumn = ({ col, onAddTask }) => {
    const { setNodeRef } = useDroppable({
        id: col.id,
        data: {
            type: 'column',
            columnId: col.id,
        },
    });

    return (
        <div className={styles.kanban__type}>
            <div className={styles.kanban__heading}>
                <div
                    style={{
                        backgroundColor: col.color,
                        padding: 4,
                        borderRadius: '50%',
                    }}
                />
                <h2>{col.title}</h2>
                <span>
                    {col.tasks.length}{' '}
                    {col.id === 'completed' ? 'completed tasks' : 'open tasks'}
                </span>
            </div>

            <button
                type="button"
                onClick={() => onAddTask(col.id)}
                className={styles.createBtn}
            >
                + Create Task
            </button>

            <div ref={setNodeRef} className={styles.kanban__planned}>
                <SortableContext
                    items={col.tasks.map(t => t.id)}
                    strategy={verticalListSortingStrategy}
                >
                    {col.tasks.map(task => (
                        <TaskUnit
                            key={task.id}
                            task={task}
                            columnId={col.id}
                        />
                    ))}
                </SortableContext>
            </div>
        </div>
    );
};

export default KanbanColumn;

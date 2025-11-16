import React from 'react';
import styles from './kanban.module.css';
import TaskUnit from '../routing/TaskUnit.jsx';
import Modal from "../../../Reusable/Modal/Modal.jsx";
import TasksTopbar from "../TasksTopbar/TasksTopbar.jsx";

const Kanban = () => {
    const [kanbanType, setKanbanType] = React.useState([
        {
            id: 'planned',
            title: 'Planned',
            tasks: [
                {id: 1, title: 'Monthly Product Discussion', description:'', comments: [], attachments: []},
            ],
        },
        {
            id: 'upcoming',
            title: 'Upcoming',
            tasks: [
                {id: 4, title: 'Create Monthly Revenue Recap', description:'', comments: [], attachments: []},

            ],
        },
        {
            id: 'completed',
            title: 'Completed',
            tasks: [
                {id: 9, title: 'Uploading New Items to Marketplace (done)', description:'', comments: [], attachments: []},
            ],
        },
    ]);

    const [isOpen, setIsOpen] = React.useState(false);
    const [activeColumn, setActiveColumn] = React.useState(null);
    const [newTaskTitle, setNewTaskTitle] = React.useState('');
    const [newTaskDescription, setNewTaskDescription] = React.useState('');

    React.useEffect(() => {
        if (isOpen) {
            const prev = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
            return () => (document.body.style.overflow = prev);
        }
    }, [isOpen]);

    const handleAddKanban = (columnId) => {
        setActiveColumn(columnId);
        setIsOpen(true);
    };

    const onClose = () => {
        setIsOpen(false);
        setActiveColumn(null);
        setNewTaskTitle('');
    };

    const handleCreateTask = (e) => {
        e.preventDefault();
        const title = newTaskTitle.trim();
        const description = newTaskDescription.trim();
        if (!title) return;
        if (!description) return;

        setKanbanType(prev =>
            prev.map(col => {
                if (col.id !== activeColumn) return col;
                const newTask = {id: Date.now(), title, description, comments: [], attachments: []};
                return {
                    ...col,
                    tasks: [...col.tasks, newTask],
                };
            })
        );

        onClose();
    };

    return (
        <>
            <TasksTopbar/>
            <div className={styles.kanban}>
                {kanbanType.map((col) => (
                    <div className={styles.kanban__type} key={col.id}>
                        <div className={styles.kanban__heading}>
                            <h2>{col.title}</h2>
                            <span>{col.tasks.length} {col.id === 'completed' ? 'completed tasks' : 'open tasks'}</span>
                        </div>
                        <button
                            type="button"
                            onClick={() => handleAddKanban(col.id)}
                           className={styles.createBtn}
                        >
                            + Create Task
                        </button>
                        <div className={styles.kanban__planned}>
                            {col.tasks.map(task => (
                                <TaskUnit key={task.id} task={task} tagsMap={[{
                                    title: 'Internal', color: '#D28E3D', backgroundColor: '#FBF4EC'
                                },
                                    {title: 'Marketing', color: '#B1AB1D', backgroundColor: '#F7F7E8'},
                                    {title: 'Urgent', color: '#AF4B4B', backgroundColor: '#F7EDED'}
                                ]}/>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <Modal isOpen={isOpen} onClose={onClose}>
                <form onSubmit={handleCreateTask} className={styles.modalForm}>
                    <h3>Create task in: {activeColumn}</h3>
                    <input
                        type="text"
                        value={newTaskTitle}
                        onChange={(e) => setNewTaskTitle(e.target.value)}
                        placeholder="Task title"
                        autoFocus
                    />
                    <textarea name="" id="" cols="30" rows="10" maxLength='350' value={newTaskDescription}
                    onChange={(e) => setNewTaskDescription(e.target.value)}
                    >

                    </textarea>
                    <div style={{marginTop: 12}}>
                        <button type="submit">Create</button>
                        <button type="button" onClick={onClose} style={{marginLeft: 8}}>
                            Cancel
                        </button>
                    </div>
                </form>
            </Modal>
        </>
    );
};

export default Kanban;

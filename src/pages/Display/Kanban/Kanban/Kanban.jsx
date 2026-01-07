import React from 'react';
import styles from './kanban.module.css';
import TaskUnit from '../routing/TaskUnit.jsx';
import { useKanban } from "./KanbanContext.jsx";
import AddTaskModal from "../../../FixedComponents/TasksTopbar/AddTaskModal.jsx";
const Kanban = () => {


    const { kanbanType, addTask } = useKanban();

    const [isAddOpen, setIsAddOpen] = React.useState(false);
    const [defaultStatus, setDefaultStatus] = React.useState(null);
    const handleAddKanban = (columnId) => {
        setDefaultStatus(columnId);
        setIsAddOpen(true);
    };
    const [isOpen, setIsOpen] = React.useState(false);
    const [activeColumn, setActiveColumn] = React.useState(null);



    const [form, setForm] = React.useState({
        title: '',
        description: '',
    });
    const [errors, setErrors] = React.useState({});

    const updateField = (field, value) => {
        setForm(prev => ({ ...prev, [field]: value }));
        setErrors(prev => ({ ...prev, [field]: false }));
    };


    const [activeColumnColor, setActiveColumnColor] = React.useState(null);


    React.useEffect(() => {
        if (isOpen) {
            const prev = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
            return () => (document.body.style.overflow = prev);
        }
    }, [isOpen]);



    const onClose = () => {
        setIsOpen(false);
        setActiveColumn(null);
        setActiveColumnColor(null);

        setForm({
            title: '',
            description: '',
        });

        setErrors({
            title: false,
            description: false,
        });
    };


    const validate = () => {
        const newErrors = {};
        if (!form.title.trim()) newErrors.title = true;
        if (!form.description.trim()) newErrors.description = true;
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleCreateTask = (e) => {
        e.preventDefault();
        if (!validate()) return;

        addTask(activeColumn, {
            id: Date.now(),
            title: form.title,
            description: form.description,
            comments: [ {
                id,
                author: 'Alex J.',
                text: 'Please update numbers',
                createdAt
            }],
            attachments: [{
                id,
                name: 'report.pdf',
                size: 1200000,
                type: 'pdf'
            }],
        });

        onClose();
    };

    return (<>
            <div className={styles.kanban}>
                {kanbanType.map((col) => (<div className={styles.kanban__type} key={col.id}>
                        <div className={styles.kanban__heading}>
                            <div style={{backgroundColor: `${col.color}`, padding: '4px', borderRadius: '50%'}}></div>
                            <h2>{col.title}</h2>
                            <span>{col.tasks.length} {col.id === 'completed' ? 'completed tasks' : 'open tasks'}</span>
                        </div>
                        <button
                            type="button"
                            onClick={() => handleAddKanban(col.id, col.color)}
                            className={styles.createBtn}
                        >
                            + Create Task
                        </button>
                        <div className={styles.kanban__planned}>
                            {col.tasks.map(task => (
                                <TaskUnit
                                    key={task.id}
                                    task={task}
                                    columnId={col.id}
                                />
                            ))}
                        </div>
                    </div>))}
                <AddTaskModal
                    isOpen={isAddOpen}
                    onClose={() => setIsAddOpen(false)}
                    defaultStatus={defaultStatus}
                />
            </div>
        </>);
};

export default Kanban;

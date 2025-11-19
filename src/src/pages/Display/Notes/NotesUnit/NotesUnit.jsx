import React from 'react';
import styles from "./notesUnit.module.css";
import NotesDisplay from "../NotesDisplay/NotesDisplay.jsx";

const NotesUnit = () => {
    const [kanbanType] = React.useState([
        {
            id: 'planned',
            title: 'Planned',
            tasks: [
                {id: 1, title: 'Monthly Product Discussion', description: 'weqweqweqweq', comments: [], attachments: []},
            ],
        },
        {
            id: 'upcoming',
            title: 'Upcoming',
            tasks: [
                {id: 2, title: 'Create Monthly Revenue Recap', description: 'qwewqeqweqwe', comments: [], attachments: []},
            ],
        },
        {
            id: 'completed',
            title: 'Completed',
            tasks: [
                {id: 3, title: 'Uploading New Items to Marketplace (done)', description: 'grewgvsf sdfesfse', comments: [], attachments: []
                },
            ],
        },
    ]);

    return (
        <div className={styles.kanban}>
            {kanbanType.map((col) => (
                <div className={styles.kanban__planned} key={col.id}>
                    {col.tasks.map(task => (
                        <NotesDisplay key={task.id} task={task} tagsMap={[{
                            title: 'Weekly', color: '#B1AB1D', backgroundColor: '#F7F7E8'
                        },
                            {title: 'Product', color: '#4976F4', backgroundColor: '#EDF2FE'},
                        ]}/>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default NotesUnit;
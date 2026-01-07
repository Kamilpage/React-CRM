import React from "react";
import {useUser} from "../../../FixedComponents/SearchBar/UserContext.jsx";

const KanbanContext = React.createContext(null);
const STORAGE_KEY = 'kanban_tasks';

export const KanbanProvider = ({ children }) => {
    const { user } = useUser();
    const [kanbanType, setKanbanType] = React.useState(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : [
            {
                id: 'planned',
                color: '#B1AB1D',
                title: 'Planned',
                tasks: [{ id: 1, title: 'Monthly Product Discussion', description: '', comments: [], attachments: [] }],
            },
            {
                id: 'upcoming',
                color: '#6884FD',
                title: 'Upcoming',
                tasks: [{ id: 4, title: 'Create Monthly Revenue Recap', description: '', comments: [], attachments: [] }],
            },
            {
                id: 'completed',
                color: '#39C682',
                title: 'Completed',
                tasks: [{ id: 9, title: 'Uploading New Items to Marketplace (done)', description: '', comments: [], attachments: [] }],
            }
        ];
    });

    React.useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(kanbanType));
    }, [kanbanType]);

    const addTask = (columnId, task) => {
        setKanbanType(prev =>
            prev.map(col =>
                col.id === columnId
                    ? { ...col, tasks: [...col.tasks, task] }
                    : col
            )
        );
    };
    const removeTask = (columnId, taskId) => {
        setKanbanType(prev =>
            prev.map(col =>
                col.id === columnId
                    ? {
                        ...col,
                        tasks: col.tasks.filter(task => task.id !== taskId),
                    }
                    : col
            )
        );
    };

    const addComment = (columnId, taskId, text) => {
        setKanbanType(prev =>
            prev.map(col =>
                col.id === columnId
                    ? {
                        ...col,
                        tasks: col.tasks.map(task =>
                            task.id === taskId
                                ? {
                                    ...task,
                                    comments: [
                                        ...task.comments,
                                        {
                                            id: Date.now(),
                                            author: user.name,
                                            text,
                                            createdAt: new Date().toISOString(),
                                        }
                                    ]
                                }
                                : task
                        )
                    }
                    : col
            )
        );
    };

    const addAttachment = (columnId, taskId, file) => {
        setKanbanType(prev =>
            prev.map(col =>
                col.id === columnId
                    ? {
                        ...col,
                        tasks: col.tasks.map(task =>
                            task.id === taskId
                                ? {
                                    ...task,
                                    attachments: [
                                        ...task.attachments,
                                        {
                                            id: Date.now(),
                                            name: file.name,
                                            size: file.size,
                                            type: file.type,
                                        }
                                    ]
                                }
                                : task
                        )
                    }
                    : col
            )
        );
    };

    return (
        <KanbanContext.Provider
            value={{ kanbanType, addTask, removeTask, addComment, addAttachment }}
        >            {children}
        </KanbanContext.Provider>
    );
};

export const useKanban = () => {
    const context = React.useContext(KanbanContext);
    if (!context) {
        throw new Error('useKanban must be used within KanbanProvider');
    }
    return context;
};



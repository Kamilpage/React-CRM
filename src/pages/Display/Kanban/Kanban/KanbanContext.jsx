import React, {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState
} from 'react';

import { useUser } from '../../../FixedComponents/SearchBar/UserContext.jsx';
import { useSearch } from '../../../FixedComponents/SearchBar/SearchContext.jsx';

const KanbanContext = createContext(null);
const STORAGE_KEY = 'kanban_tasks';

export const KanbanProvider = ({ children }) => {
    const { user } = useUser();
    const { query } = useSearch();

    /* 🔹 source of truth */
    const [kanbanType, setKanbanType] = useState(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            return saved
                ? JSON.parse(saved)
                : [
                    {
                        id: 'planned',
                        color: '#B1AB1D',
                        title: 'Planned',
                        tasks: [],
                    },
                    {
                        id: 'upcoming',
                        color: '#6884FD',
                        title: 'Upcoming',
                        tasks: [],
                    },
                    {
                        id: 'completed',
                        color: '#39C682',
                        title: 'Completed',
                        tasks: [],
                    }
                ];
        } catch {
            return [];
        }
    });

    /* 🔹 persist raw kanban */
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(kanbanType));
    }, [kanbanType]);

    /* 🔹 derived state: search */
    const filteredKanban = useMemo(() => {
        if (!query.trim()) return kanbanType;

        const q = query.toLowerCase();

        return kanbanType.map(col => ({
            ...col,
            tasks: col.tasks.filter(task =>
                task.title.toLowerCase().includes(q) ||
                task.description.toLowerCase().includes(q)
            )
        }));
    }, [kanbanType, query]);

    /* 🔹 actions */
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

    const moveTask = (fromColumnId, toColumnId, taskId, newIndex) => {
        setKanbanType(prev => {
            const next = structuredClone(prev);

            const fromCol = next.find(c => c.id === fromColumnId);
            const toCol = next.find(c => c.id === toColumnId);

            const taskIndex = fromCol.tasks.findIndex(t => t.id === taskId);
            const [task] = fromCol.tasks.splice(taskIndex, 1);

            toCol.tasks.splice(newIndex, 0, task);

            return next;
        });
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
                                        },
                                    ],
                                }
                                : task
                        ),
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
                                        },
                                    ],
                                }
                                : task
                        ),
                    }
                    : col
            )
        );
    };

    return (
        <KanbanContext.Provider
            value={{
                kanbanType: filteredKanban, // 👈 UI получает отфильтрованную структуру
                addTask,
                removeTask,
                moveTask,
                addComment,
                addAttachment,
            }}
        >
            {children}
        </KanbanContext.Provider>
    );
};

export const useKanban = () => {
    const ctx = useContext(KanbanContext);
    if (!ctx) {
        throw new Error('useKanban must be used within KanbanProvider');
    }
    return ctx;
};

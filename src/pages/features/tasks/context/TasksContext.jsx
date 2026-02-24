

import { createContext, useContext } from "react";

import { useUser } from "../../../../app/context/UserContext.jsx";
import { useSearch } from "../../../../app/context/SearchContext.jsx";

import { useTasksData } from "./useTasksData.js";
import { useTasksProcessing } from "./useTasksProcessing.js";
import { useTasksSearchSortFilter } from "./useTasksSearchSortFilter.js";

const TasksContext = createContext(null);

export const TasksProvider = ({ children }) => {
    const { user } = useUser();
    const { query } = useSearch();

    
    const {
        columns,
        setColumns,
        addTask,
        removeTask,
        moveTask,
    } = useTasksData();

    

    
    const editTask = (taskId, updates) => {
        setColumns(prev =>
            prev.map(col => ({
                ...col,
                tasks: col.tasks.map(task =>
                    task.id === taskId
                        ? { ...task, ...updates }
                        : task
                )
            }))
        );
    };

    
    const deleteTask = (taskId) => {
        setColumns(prev =>
            prev.map(col => ({
                ...col,
                tasks: col.tasks.filter(t => t.id !== taskId)
            }))
        );
    };

    
    const moveTaskTo = (taskId, newColumnId) => {
        setColumns(prev => {
            let movedTask = null;

            const withoutTask = prev.map(col => {
                const filtered = col.tasks.filter(t => {
                    if (t.id === taskId) {
                        movedTask = t;
                        return false;
                    }
                    return true;
                });
                return { ...col, tasks: filtered };
            });

            return withoutTask.map(col =>
                col.id === newColumnId
                    ? { ...col, tasks: [...col.tasks, movedTask] }
                    : col
            );
        });
    };

    
    const duplicateTask = (taskId) => {
        setColumns(prev =>
            prev.map(col => {
                const t = col.tasks.find(x => x.id === taskId);
                if (!t) return col;

                const copy = {
                    ...t,
                    id: Date.now(),
                    title: t.title + " (Copy)"
                };

                return { ...col, tasks: [...col.tasks, copy] };
            })
        );
    };

    
    const { flatTasks } = useTasksProcessing(columns, []);

    
    const {
        tasks: processedTasks,
        filters,
        setFilters,
        sortKey,
        setSortKey
    } = useTasksSearchSortFilter(flatTasks, query);

    
    const { uiColumns } = useTasksProcessing(columns, processedTasks);

    
    const addComment = (columnId, taskId, text) => {
        setColumns(prev =>
            prev.map(col =>
                col.id === columnId
                    ? {
                        ...col,
                        tasks: col.tasks.map(task =>
                            task.id === taskId
                                ? {
                                    ...task,
                                    comments: [
                                        ...(task.comments || []),
                                        {
                                            id: Date.now(),
                                            author: user.name,
                                            text,
                                            createdAt: new Date().toISOString()
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
        setColumns(prev =>
            prev.map(col =>
                col.id === columnId
                    ? {
                        ...col,
                        tasks: col.tasks.map(task =>
                            task.id === taskId
                                ? {
                                    ...task,
                                    attachments: [
                                        ...(task.attachments || []),
                                        {
                                            id: Date.now(),
                                            name: file.name,
                                            size: file.size,
                                            type: file.type
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
        <TasksContext.Provider
            value={{
                
                columns: uiColumns,

                
                filters,
                setFilters,
                sortKey,
                setSortKey,

                
                addTask,
                removeTask,
                moveTask,

                
                editTask,
                deleteTask,
                moveTaskTo,
                duplicateTask,

                
                addComment,
                addAttachment
            }}
        >
            {children}
        </TasksContext.Provider>
    );
};

export const useTasks = () => {
    const ctx = useContext(TasksContext);
    if (!ctx) throw new Error("useTasks must be used inside TasksProvider");
    return ctx;
};
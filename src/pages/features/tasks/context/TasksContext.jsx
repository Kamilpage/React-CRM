// src/pages/features/tasks/context/TasksContext.jsx

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

    /* 1) Raw data layer */
    const {
        columns,
        setColumns,
        addTask,
        removeTask,
        moveTask,
    } = useTasksData();

    /* CRUD EXTENSIONS */

    // Edit
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

    // Delete (simple remove by ID)
    const deleteTask = (taskId) => {
        setColumns(prev =>
            prev.map(col => ({
                ...col,
                tasks: col.tasks.filter(t => t.id !== taskId)
            }))
        );
    };

    // Move To (quick change column)
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

    // Duplicate
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

    /* 2) Flatten for search/filter/sort engine */
    const { flatTasks } = useTasksProcessing(columns, []);

    /* 3) UI search/filters/sort */
    const {
        tasks: processedTasks,
        filters,
        setFilters,
        sortKey,
        setSortKey
    } = useTasksSearchSortFilter(flatTasks, query);

    /* 4) Rebuild UI columns */
    const { uiColumns } = useTasksProcessing(columns, processedTasks);

    /* 5) Comments (optional) */
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

    /* 6) Attachments (optional) */
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
                // UI-ready columns
                columns: uiColumns,

                // Filters & sort
                filters,
                setFilters,
                sortKey,
                setSortKey,

                // Base CRUD
                addTask,
                removeTask,
                moveTask,

                // Extended CRUD
                editTask,
                deleteTask,
                moveTaskTo,
                duplicateTask,

                // Extra features
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
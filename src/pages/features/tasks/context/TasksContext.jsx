// src/pages/features/tasks/context/TasksContext.jsx

import { createContext, useContext } from "react";

import { useUser } from "../../../../app/context/UserContext.jsx";
import { useSearch } from "../../../../app/context/SearchContext.jsx";
import {useTasksProcessing} from "./useTasksProcessing.js";
import {useTasksData} from "./useTasksData.js";
import {useTasksSearchSortFilter} from "./useTasksSearchSortFilter.js";


const TasksContext = createContext(null);

export const TasksProvider = ({ children }) => {
    const { user } = useUser();
    const { query } = useSearch();

    const {
        columns,
        setColumns,
        addTask,
        removeTask,
        moveTask
    } = useTasksData();

    // 2) Get flat list for search/filter/sort engine
    const { flatTasks } = useTasksProcessing(columns, []); // processed = []

    // 3) UI search + filter + sort
    const {
        tasks: processedTasks,
        filters,
        setFilters,
        sortKey,
        setSortKey
    } = useTasksSearchSortFilter(flatTasks, query);

    const { uiColumns } = useTasksProcessing(columns, processedTasks);

    // 5) Additional logic: comments & attachments (depend on raw data)
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
                // UI-ready columns (Planned / Upcoming / Completed)
                columns: uiColumns,

                // search / filter / sort controllers
                filters,
                setFilters,
                sortKey,
                setSortKey,

                // CRUD
                addTask,
                removeTask,
                moveTask,

                // Additional features
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
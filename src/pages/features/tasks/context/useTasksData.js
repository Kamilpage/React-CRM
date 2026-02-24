
import { useState, useEffect } from "react";
import {DEFAULT_TASK_COLUMNS} from "./taskBoardTypes.js";

const STORAGE_KEY = "tasks_board";

export function useTasksData() {
    const [columns, setColumns] = useState(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            return saved ? JSON.parse(saved) : DEFAULT_TASK_COLUMNS;
        } catch {
            return DEFAULT_TASK_COLUMNS;
        }
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(columns));
    }, [columns]);

    const addTask = (columnId, task) => {
        setColumns(prev =>
            prev.map(col =>
                col.id === columnId
                    ? { ...col, tasks: [...col.tasks, task] }
                    : col
            )
        );
    };

    const removeTask = (columnId, taskId) => {
        setColumns(prev =>
            prev.map(col =>
                col.id === columnId
                    ? { ...col, tasks: col.tasks.filter(t => t.id !== taskId) }
                    : col
            )
        );
    };

    const moveTask = (fromColumnId, toColumnId, taskId, newIndex) => {
        setColumns(prev => {
            const draft = structuredClone(prev);

            const fromCol = draft.find(c => c.id === fromColumnId);
            const toCol = draft.find(c => c.id === toColumnId);

            const idx = fromCol.tasks.findIndex(t => t.id === taskId);
            const [task] = fromCol.tasks.splice(idx, 1);

            toCol.tasks.splice(newIndex, 0, task);

            return draft;
        });
    };

    return {
        columns,
        setColumns,
        addTask,
        removeTask,
        moveTask
    };
}
// src/pages/features/tasks/hooks/useTasksProcessing.js
import { useMemo } from "react";

export function useTasksProcessing(columns, processedTasks) {
    // 1) Плоский массив задач
    const flatTasks = useMemo(() => {
        return columns.flatMap(col =>
            col.tasks.map(task => ({
                ...task,
                columnId: col.id
            }))
        );
    }, [columns]);

    // 2) Пересобираем колонки для UI
    const uiColumns = useMemo(() => {
        return columns.map(col => ({
            ...col,
            tasks: processedTasks.filter(t => t.columnId === col.id)
        }));
    }, [columns, processedTasks]);

    return {
        flatTasks,
        uiColumns
    };
}
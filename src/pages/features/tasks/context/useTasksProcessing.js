
import { useMemo } from "react";

export function useTasksProcessing(columns, processedTasks) {
    
    const flatTasks = useMemo(() => {
        return columns.flatMap(col =>
            col.tasks.map(task => ({
                ...task,
                columnId: col.id
            }))
        );
    }, [columns]);

    
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
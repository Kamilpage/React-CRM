
import { useMemo, useState } from "react";

export function useTasksSearchSortFilter(flatTasks, searchQuery) {
    const [filters, setFilters] = useState([]);
    const [sortKey, setSortKey] = useState(null);

    
    const searched = useMemo(() => {
        if (!searchQuery) return flatTasks;

        const q = searchQuery.toLowerCase();
        return flatTasks.filter(t =>
            (t.title + " " + (t.description || "")).toLowerCase().includes(q)
        );
    }, [flatTasks, searchQuery]);

    
    const filtered = useMemo(() => {
        if (!filters.length) return searched;

        return searched.filter(task =>
            task.tags?.some(tag => filters.includes(tag))
        );
    }, [searched, filters]);

    
    const sorted = useMemo(() => {
        if (!sortKey) return filtered;

        const sorters = {
            created: (a, b) =>
                new Date(b.createdAt) - new Date(a.createdAt),

            due: (a, b) =>
                new Date(a.dueDate) - new Date(b.dueDate),

            title: (a, b) =>
                a.title.localeCompare(b.title)
        };

        return [...filtered].sort(sorters[sortKey]);
    }, [filtered, sortKey]);

    return {
        tasks: sorted,
        filters,
        setFilters,
        sortKey,
        setSortKey
    };
}
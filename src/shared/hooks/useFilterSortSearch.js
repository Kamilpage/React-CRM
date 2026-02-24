import { useMemo, useState } from "react";

export function useFilterSortSearch(rawItems, query, config) {
    const {
        searchableFields = [],
        filterPredicate,
        sorters = {}
    } = config;

    const [sortBy, setSortBy] = useState(Object.keys(sorters)[0]);
    const [filters, setFilters] = useState([]);

    
    const searched = useMemo(() => {
        if (!query?.trim()) return rawItems;

        const q = query.toLowerCase();

        return rawItems.filter(item =>
            searchableFields.some(field => {
                const value = String(item[field] || "").toLowerCase();
                return value.includes(q);
            })
        );
    }, [rawItems, query, searchableFields]);

    
    const processed = useMemo(() => {
        let list = [...searched];

        if (filters.length && filterPredicate) {
            list = list.filter(item => filterPredicate(item, filters));
        }

        const sortFn = sorters[sortBy];
        if (sortFn) {
            list.sort(sortFn);
        }

        return list;
    }, [searched, filters, sortBy, sorters, filterPredicate]);

    return {
        items: processed,
        sortBy,
        setSortBy,
        filters,
        setFilters
    };
}

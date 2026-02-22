export const getFilteredPeople = (people, search, sort) => {
    let result = [...people];

    // Поиск по имени, email, телефону
    if (search.trim() !== '') {
        const q = search.toLowerCase();
        result = result.filter(
            (p) =>
                p.name.toLowerCase().includes(q) ||
                p.email.toLowerCase().includes(q) ||
                p.phone.toLowerCase().includes(q)
        );
    }

    // Сортировка
    if (sort.field) {
        result.sort((a, b) => {
            const fa = a[sort.field]?.toLowerCase?.() || a[sort.field];
            const fb = b[sort.field]?.toLowerCase?.() || b[sort.field];

            if (fa < fb) return sort.direction === 'asc' ? -1 : 1;
            if (fa > fb) return sort.direction === 'asc' ? 1 : -1;
            return 0;
        });
    }

    return result;
};
export const getFilteredCompanies = (
    companies,
    search,
    sort,
    category
) => {
    let result = [...companies];

    if (category) {
        result = result.filter(
            (c) => c.industry === category
        );
    }

    if (search.trim()) {
        const q = search.toLowerCase();
        result = result.filter(
            (c) =>
                c.name.toLowerCase().includes(q) ||
                c.industry.toLowerCase().includes(q)
        );
    }

    if (sort.field) {
        result.sort((a, b) => {
            if (a[sort.field] < b[sort.field])
                return sort.direction === 'asc' ? -1 : 1;
            if (a[sort.field] > b[sort.field])
                return sort.direction === 'asc' ? 1 : -1;
            return 0;
        });
    }

    return result;
};
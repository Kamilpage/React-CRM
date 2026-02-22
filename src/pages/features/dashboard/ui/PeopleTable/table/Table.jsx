import styles from './table.module.css';

const Table = ({
                   data = [],
                   columns = [],
                   rowKey = 'id',
                   sorting,
                   onSortChange,
               }) => {
    const handleSort = (key) => {
        if (!onSortChange) return;

        if (sorting?.field !== key) {
            onSortChange({ field: key, direction: 'asc' });
        } else {
            onSortChange({
                field: key,
                direction: sorting.direction === 'asc' ? 'desc' : 'asc',
            });
        }
    };

    return (
        <div className={styles.tableWrapper}>
            <table className={styles.table}>
                <thead>
                <tr>
                    {columns.map((col) => (
                        <th
                            key={col.key}
                            className={col.sortable ? styles.sortable : ''}
                            onClick={
                                col.sortable
                                    ? () => handleSort(col.key)
                                    : undefined
                            }
                        >
                            <span>{col.title}</span>

                            {col.sortable && sorting?.field === col.key && (
                                <span className={styles.sortIcon}>
                                        {sorting.direction === 'asc' ? '▲' : '▼'}
                                    </span>
                            )}
                        </th>
                    ))}
                </tr>
                </thead>

                <tbody>
                {data.length === 0 ? (
                    <tr>
                        <td
                            colSpan={columns.length}
                            className={styles.empty}
                        >
                            No data found
                        </td>
                    </tr>
                ) : (
                    data.map((row) => (
                        <tr key={row[rowKey]}>
                            {columns.map((col) => (
                                <td key={col.key}>
                                    {col.render
                                        ? col.render(row)
                                        : row[col.key]}
                                </td>
                            ))}
                        </tr>
                    ))
                )}
                </tbody>
            </table>
        </div>
    );
};

export default Table;

import styles from './table.module.css';
import {motion} from "framer-motion";


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

    const MotionRow = motion.tr;
    const rowAnimation = {
        hidden: { opacity: 0, y: 8 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.25 }
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

                <motion.tbody
                    initial="hidden"
                    animate="visible"
                    whileInView="true"
                    viewport={{once: true}}
                    transition={{ staggerChildren: 0.04 }}
                >
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
                        <MotionRow
                            key={row[rowKey]}
                            variants={rowAnimation}
                            layout
                            whileHover={{ backgroundColor: "rgba(0,0,0,0.03)" }}
                        >
                            {columns.map((col) => (
                                <td key={col.key}>
                                    {col.render
                                        ? col.render(row)
                                        : row[col.key]}
                                </td>
                            ))}
                        </MotionRow>
                    ))
                )}
                </motion.tbody>
            </table>
        </div>
    );
};

export default Table;

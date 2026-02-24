import { useTasks } from "../../context/TasksContext";
import { TableRow } from "./TableRow";
import styles from "./tableView.module.css";

 const TableView = () => {
    const { columns } = useTasks();

    
    const tasks = columns.flatMap(col =>
        col.tasks.map(t => ({ ...t, columnId: col.id }))
    );

    return (
        <div className={styles.tableWrapper}>

            <table className={styles.table}>
                <thead>
                <tr>
                    <th>Status</th>
                    <th>Title</th>
                    <th>Tags</th>
                    <th>Due</th>
                    <th>Assignees</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                {tasks.map(task => (
                    <TableRow key={task.id} task={task} />
                ))}
                </tbody>
            </table>
        </div>
    );
};
export default TableView;
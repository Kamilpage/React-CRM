import { useOutletContext } from "react-router-dom";
import {useTasks} from "../../../context/TasksContext.jsx";
import {ListSection} from "../ListSection/ListSection.jsx";
import styles from './listView.module.css'

export  const ListView = () => {
    const { columns } = useTasks();
    const { onOpenAddTask } = useOutletContext();

    return (
        <div className={styles.task_list_view}>
            {columns.map(col => (
                <ListSection
                    key={col.id}
                    column={col}
                    onCreateTask={() => onOpenAddTask(col.id)}
                />
            ))}
        </div>
    );
};
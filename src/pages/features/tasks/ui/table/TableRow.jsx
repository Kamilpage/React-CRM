import { useOutletContext } from "react-router-dom";
import { usePopover } from "../../../../../shared/hooks/usePopover";
import { Popover } from "../../../../../shared/modals/Popover/Popover";
import styles from "./tableView.module.css";

export const TableRow = ({ task }) => {
    const {
        onEditTask,
        onDeleteTask,
        onMoveTask,
        onDuplicateTask
    } = useOutletContext();

    const { open, coords, triggerRef, openPopover, closePopover } = usePopover();

    return (
        <tr className={styles.row}>
            <td>{task.columnId}</td>

            <td>{task.title}</td>

            <td>
                <div className={styles.tags}>
                    {task.tags?.map(tag => (
                        <span key={tag} className={styles.tag}>
              {tag}
            </span>
                    ))}
                </div>
            </td>

            <td>{task.dueDate || "-"}</td>

            <td>
                <div className={styles.assignees}>
                    {task.assignees?.map(a => (
                        <img key={a.id} src={a.avatar} className={styles.avatar} />
                    ))}
                </div>
            </td>

            <td>
                <button ref={triggerRef} onClick={openPopover} className={styles.menuBtn}>
                    ⋮
                </button>

                <Popover open={open} coords={coords}>
                    <button onClick={() => { onEditTask(task.id); closePopover(); }}>Edit</button>
                    <button onClick={() => { onDuplicateTask(task.id); closePopover(); }}>Duplicate</button>
                    <button onClick={() => { onMoveTask(task.id, "upcoming"); closePopover(); }}>Move</button>
                    <button className="danger" onClick={() => { onDeleteTask(task.id); closePopover(); }}>
                        Delete
                    </button>
                </Popover>
            </td>
        </tr>
    );
};
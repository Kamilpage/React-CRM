import styles from './listItem.module.css'
import {usePopover} from "../../../../../../shared/hooks/usePopover.js";
import {Popover} from "../../../../../../shared/modals/Popover/Popover.jsx";
import {useOutletContext} from "react-router-dom";

export const ListItem = ({task}) => {
    const {open, openPopover, closePopover, coords, triggerRef} = usePopover();
    const {
        onEditTask,
        onDeleteTask,
        onMoveTask,
        onDuplicateTask
    } = useOutletContext();
    return (
        <div className={styles.listItem}>
            <div className={styles.left}>
                <input type="checkbox"/>

                <div className={styles.title}>{task.title}</div>
            </div>

            <div className={styles.right}>
                <div className={styles.tags}>
                    {task.tags?.map(tag => (
                        <span key={tag} className={`${styles.tag} ${styles[`tag_${tag}`]}`}>
              {tag}
            </span>
                    ))}
                </div>

                {task.dueDate && (
                    <div className={styles.dueDate}>
                        <i className={styles.iconCalendar}/>
                        {task.dueDate}
                    </div>
                )}

                <div className={styles.assignees}>
                    {task.assignees?.map(user => (
                        <img
                            key={user.id}
                            src={user.avatar}
                            className={styles.avatar}
                            alt=""
                        />
                    ))}
                </div>

                <button ref={triggerRef} onClick={openPopover}>⋮</button>

                <Popover open={open} coords={coords}>
                    <button onClick={() => onEditTask(task.id)}>Edit</button>
                    <button onClick={() => onDuplicateTask(task.id)}>Duplicate</button>
                    <button onClick={() => onMoveTask(task.id, "upcoming")}>Move → Upcoming</button>
                    <button
                        onClick={() => {
                            onDeleteTask(task.id);
                            closePopover();
                        }}
                    >
                        Delete
                    </button>
                </Popover>
            </div>
        </div>
    );
};
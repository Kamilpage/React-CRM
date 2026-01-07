import React from 'react';
import deadline from '../../../../assets/icons/others/deadline.svg'
import styles from './taskUnit.module.css'
import chat from '../../../../assets/icons/others/chat.svg'
import attachments from '../../../../assets/icons/others/attachment.svg'
import DisplayModal from "../TaskDisplayModal/DisplayModal.jsx";
import {TAGS_MAP} from "../../../FixedComponents/TasksTopbar/tags.js";
import {useKanban} from "../Kanban/KanbanContext.jsx";


const TaskUnit = ({task, columnId}) => {
    const {removeTask} = useKanban();
    const handleDelete = (e) => {

        e.stopPropagation();
        if (!window.confirm('Delete this task?')) return;
        removeTask(columnId, task.id);
    };
    const [isOpen, setIsOpen] = React.useState(false);
    const handleOpen = () => {
        setIsOpen(!isOpen);
    }
    const handleClose = () => {
        setIsOpen(false);
    }
    return (
        <>
            <div className={styles.kanban__description}>
                <div className={`${styles.kanban__item}`}>
                    <div className={styles.kanban__tags}>
                        {task.tags?.map(tagId => {
                            const tag = TAGS_MAP[tagId];
                            if (!tag) return null;

                            return (
                                <span
                                    key={tagId}
                                    className={styles.tag}
                                    style={{
                                        color: tag.color,
                                        backgroundColor: tag.background,
                                    }}
                                >
                {tag.label}
            </span>
                            );
                        })}
                    </div>
                    <a onClick={handleOpen} href='#'>{task.title}</a>
                    <div className={styles.task__deadline}>
                        <img src={deadline} alt="deadline"/>
                        <p></p>
                    </div>
                    <div className={styles.task__details__bottom}>
                        <div className={styles.task__details__bottom_left}>
                            <p>people</p>
                            <button
                                type="button"
                                className={styles.deleteBtn}
                                onClick={handleDelete}
                            >
                                ✕
                            </button>
                        </div>
                        <div className={styles.task__details__bottom_right}>
                            <div>
                                <img src={attachments} alt="attachments"/>
                                <p>{task.attachments.length}</p>
                            </div>
                            <div>
                                <img src={chat} alt="comments"/>
                                <p>{task.comments.length}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DisplayModal
                task={task}
                columnId={columnId}
                isOpen={isOpen}
                onClose={handleClose}
            />        </>
    );
};

export default TaskUnit;
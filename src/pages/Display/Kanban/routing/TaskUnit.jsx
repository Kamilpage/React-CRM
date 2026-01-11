import React from 'react';
import deadline from '../../../../assets/icons/others/deadline.svg';
import styles from './taskUnit.module.css';
import chat from '../../../../assets/icons/others/chat.svg';
import attachments from '../../../../assets/icons/others/attachment.svg';
import DisplayModal from "../TaskDisplayModal/DisplayModal.jsx";
import { TAGS_MAP } from "../../../FixedComponents/TasksTopbar/AddTaskModal/tags.js";
import { useKanban } from "../Kanban/KanbanContext.jsx";
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {useConfirm} from "../../../Reusable/ConfirmModal/ConfirmContext.jsx";

const TaskUnit = ({ task, columnId }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({
        id: task.id,
        data: {
            type: 'task',
            columnId,
        },
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    const { removeTask } = useKanban();
    const [isOpen, setIsOpen] = React.useState(false);

    const confirm = useConfirm();


    const handleDelete = async () => {
        const ok = await confirm({
            title: "Delete task",
            description: "This action cannot be undone",
            confirmText: "Delete",
            danger: true,
        });

        if (!ok) return;

        removeTask(columnId, task.id);
    };

    return (
        <>
            <div
                ref={setNodeRef}
                style={style}
                className={styles.card}
                {...attributes}
            >
                <div className={styles.header}>
                    <div className={styles.tags}>
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

                    <div className={styles.actions}>
                        <span
                            className={styles.dragHandle}
                            {...listeners}
                            title="Drag"
                        >
                            ⠿
                        </span>

                        <button
                            type="button"
                            className={styles.deleteBtn}
                            onClick={handleDelete}
                        >
                            ×
                        </button>
                    </div>
                </div>

                <div
                    className={styles.title}
                    onClick={() => setIsOpen(true)}
                >
                    {task.title}
                </div>

                <div className={styles.deadline}>
                    <img src={deadline} alt="" />
                    <span>Due date</span>
                </div>

                <div className={styles.footer}>
                    <span className={styles.people}>people</span>

                    <div className={styles.meta}>
                        <span>
                            <img src={attachments} alt="" />
                            {task.attachments.length}
                        </span>
                        <span>
                            <img src={chat} alt="" />
                            {task.comments.length}
                        </span>
                    </div>
                </div>
            </div>

            <DisplayModal
                task={task}
                columnId={columnId}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </>
    );
};

export default TaskUnit;

import React from 'react';
import styles from "./listTopbar.module.css";
import {TAGS_MAP} from "../../../FixedComponents/TasksTopbar/tags.js";

const ListDisplay = ({ task }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className={styles.kanban__description}>
            <div className={styles.kanban__item}>

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

                <a onClick={() => setIsOpen(!isOpen)} href="#" style={{ color: "black" }}>
                    {task.title}
                </a>

            </div>
        </div>
    );
};

export default ListDisplay;

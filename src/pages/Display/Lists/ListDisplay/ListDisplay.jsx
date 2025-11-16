import React from 'react';
import styles from "./listTopbar.module.css";
import DisplayModal from "../../Kanban/TaskDisplayModal/DisplayModal.jsx";

const ListDisplay = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const handleOpen = () => {
        setIsOpen(!isOpen);
    }
    const handleClose = () => {
        setIsOpen(false);
    }
    return (
        <div>
            <div className={styles.kanban__description}>
                <div className={`${styles.kanban__item}`}>
                    <div className={styles.kanban__tags}>
                        {tagsMap.map((tag, index) => (<div key={index} style={{
                            color: `${tag.color}`,
                            backgroundColor: `${tag.backgroundColor}`,
                            padding: '4px 6px',
                            borderRadius: '4px',
                            fontSize: '14px',
                            lineHeight: '140%',
                        }}><p>{tag.title}</p></div>))
                        }
                    </div>
                    <a onClick={handleOpen} style={{color: "black"}} href='#'>{task.title}</a>

                </div>
            </div>
            <DisplayModal tasks={task} isOpen={isOpen} onClose={handleClose}/>
        </div>
    );
};

export default ListDisplay;
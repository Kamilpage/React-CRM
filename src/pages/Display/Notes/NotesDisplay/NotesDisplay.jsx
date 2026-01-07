import React from 'react';
import styles from "./notesDisplay.module.css";
import DisplayModal from "../../Kanban/TaskDisplayModal/DisplayModal.jsx";

const NotesDisplay = ({task, tagsMap}) => {
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
                    <p>{task.description}</p>
                </div>
            </div>
            <DisplayModal tasks={task} isOpen={isOpen} onClose={handleClose}/>
        </>
    );
};

export default NotesDisplay;
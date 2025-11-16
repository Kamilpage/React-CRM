import React from 'react';
import deadline from '../../../../assets/deadline.svg'
import styles from './taskUnit.module.css'
import chat from '../../../../assets/chat.svg'
import attachments from '../../../../assets/attachment.svg'
import DisplayModal from "../TaskDisplayModal/DisplayModal.jsx";


const TaskUnit = ({task, tagsMap}) => {
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
                            lineHeight: '140%'
                        }}><p>{tag.title}</p></div>))
                        }
                    </div>
                    <a onClick={handleOpen} href='#'>{task.title}</a>
                    <div className={styles.task__deadline}>
                        <img src={deadline} alt="deadline"/>
                        <p></p>
                    </div>
                    <div className={styles.task__details__bottom}>
                        <div className={styles.task__details__bottom_left}>
                            <p>people</p>
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
            <DisplayModal tasks={task} isOpen={isOpen} onClose={handleClose}/>
        </>
    );
};

export default TaskUnit;
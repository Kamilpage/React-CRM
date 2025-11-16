import React from 'react';
import Modal from "../../../Reusable/Modal/Modal.jsx";
import styles from './display.module.css'

const DisplayModal = ({tasks, isOpen, onClose}) => {

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <div className={styles.display}>
                    <h1>
                        {tasks.title}
                    </h1>
                    <p>{tasks.description}</p>
                </div>
            </Modal>
        </>
    );
};

export default DisplayModal;
import React, { useState, useEffect } from 'react';

import styles from './eventModal.module.css';
import Modal from "../../../../../shared/modals/Modal/Modal.jsx";
import {useCalendar} from "../../context/CalendarContext.jsx";

const EventModal = ({ isOpen, onClose }) => {
    const { addEvent, selectedDate } = useCalendar();
    const [title, setTitle] = useState('');

    useEffect(() => {
        if (isOpen) setTitle('');
    }, [isOpen]);

    const handleSubmit = () => {
        if (!title) return;

        addEvent({
            id: Date.now(),
            title,
            date: selectedDate || new Date().toISOString().slice(0, 10)
        });

        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className={styles.container}>
                <h3>Create Event</h3>

                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Event title"
                />

                <div className={styles.actions}>
                    <button onClick={onClose}>Cancel</button>
                    <button onClick={handleSubmit}>Save</button>
                </div>
            </div>
        </Modal>
    );
};

export default EventModal;
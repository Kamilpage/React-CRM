import React from 'react';
import styles from './calendarHeader.module.css';

const CalendarHeader = ({ onAdd }) => {
    return (
        <div className={styles.header}>
            <h2>Calendar</h2>

            <button className={styles.addBtn} onClick={onAdd}>
                + Add Event
            </button>
        </div>
    );
};

export default CalendarHeader;
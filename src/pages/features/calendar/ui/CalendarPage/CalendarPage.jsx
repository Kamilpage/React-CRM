import React, { useState } from 'react';
import styles from './calendarPage.module.css';
import Calendar from "../CalendarCore/CalendarCore.jsx";
import EventModal from "../EventModal/EventModal.jsx";

const CalendarPage = () => {
    const [events, setEvents] = useState([
        { id: 1, title: 'Meeting', date: '2026-04-03' }
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateClick = (date) => {
        setSelectedDate(date);
        setIsModalOpen(true);
    };

    const handleAddEvent = (event) => {
        setEvents((prev) => [...prev, event]);
    };

    return (
        <div className={styles.wrapper}>

            <Calendar
                events={events}
                onDateClick={handleDateClick}
            />

            <EventModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleAddEvent}
                selectedDate={selectedDate}
            />
        </div>
    );
};

export default CalendarPage;
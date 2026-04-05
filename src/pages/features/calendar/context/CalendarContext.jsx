import React, { createContext, useContext, useState } from 'react';

const CalendarContext = createContext();

export const useCalendar = () => useContext(CalendarContext);

export const CalendarProvider = ({ children }) => {
    const [events, setEvents] = useState([
        { id: 1, title: 'Meeting', date: '2026-04-03' }
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const openModal = (date = null) => {
        setSelectedDate(date);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedDate(null);
    };

    const addEvent = (event) => {
        setEvents((prev) => [...prev, event]);
    };

    return (
        <CalendarContext.Provider
            value={{
                events,
                addEvent,
                isModalOpen,
                openModal,
                closeModal,
                selectedDate
            }}
        >
            {children}
        </CalendarContext.Provider>
    );
};
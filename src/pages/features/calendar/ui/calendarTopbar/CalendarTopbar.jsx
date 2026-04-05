import styles from "./calendarTopbar.module.css";
import { Outlet } from "react-router-dom";
import React from "react";
import TopbarLayout from "../../../../../app/layout/TopbarLayout/TopbarLayout.jsx";
import EventModal from "../EventModal/EventModal";
import {useCalendar} from "../../context/CalendarContext.jsx";

const CalendarTopbar = () => {
    const { openModal, isModalOpen, closeModal } = useCalendar();

    return (
        <>
            <TopbarLayout
                left={<h1>Calendar</h1>}
                right={
                    <div className={styles.rightGroup}>
                        <button
                            className={styles.addBtn}
                            onClick={() => openModal()}
                        >
                            + Add Event
                        </button>
                    </div>
                }
            />

            <EventModal
                isOpen={isModalOpen}
                onClose={closeModal}
            />

            <Outlet />
        </>
    );
};

export default CalendarTopbar;
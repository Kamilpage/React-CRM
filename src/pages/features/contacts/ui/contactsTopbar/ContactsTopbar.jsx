import { Outlet } from "react-router-dom";
import styles from "./calendarTopbar.module.css"
import React from "react";
import TopbarLayout from "../../../../../app/layout/TopbarLayout/TopbarLayout.jsx";


const ContactsTopbar = () => {

    return (
        <>
            <TopbarLayout
                left={<h1>Contacts</h1>}
                right={
                    <div className={styles.rightGroup}>
                        <button
                            className={styles.addBtn}
                        >
                            + Add Event
                        </button>
                    </div>
                }
            />


            <Outlet />
        </>
    );
};

export default ContactsTopbar;
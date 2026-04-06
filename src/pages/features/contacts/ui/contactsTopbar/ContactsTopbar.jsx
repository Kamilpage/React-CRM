import { Outlet } from "react-router-dom";
import styles from "./calendarTopbar.module.css"
import React from "react";
import TopbarLayout from "../../../../../app/layout/TopbarLayout/TopbarLayout.jsx";
import AddButton from "../../../../../shared/ui/AddButton/AddButton.jsx";


const ContactsTopbar = () => {
const [isOpen, setIsOpen] = React.useState(false);
    return (
        <>
            <TopbarLayout
                left={<h1>Contacts</h1>}
                right={
                    <div className={styles.rightGroup}>
                       <AddButton
                       label={"Add Contact"}
                       onClick={()=> setIsOpen(true)}
                       ></AddButton>
                    </div>
                }
            />


            <Outlet />
        </>
    );
};

export default ContactsTopbar;
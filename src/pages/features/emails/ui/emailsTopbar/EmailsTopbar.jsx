import styles from "./emailsTopbar.module.css";
import TopbarLayout from "../../../../../app/layout/TopbarLayout/TopbarLayout.jsx";
import {Outlet} from "react-router-dom";
import React, {useState} from "react";
import CreateEmailModal from "../modal/CreateEmailModal.jsx";
import AddButton from "../../../../../shared/ui/AddButton/AddButton.jsx";

const EmailsTopbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <TopbarLayout
                left={<h1>
                    Emails
                </h1>}
                right={
                    <div className={styles.rightGroup}>
                        <div className={styles.vertical_line}></div>
                        <AddButton
                            label="+ Add event"
                            onClick={() => setIsOpen(true)}
                        />
                    </div>
                }
            />
            <Outlet />
        </>
    );
};

export default EmailsTopbar;

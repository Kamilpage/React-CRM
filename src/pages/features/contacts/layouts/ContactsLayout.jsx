import styles from "./contactsLayout.module.css";
import { Outlet } from "react-router-dom";

export const ContactsLayout = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.topbar}>
                <h1>Contacts</h1>

                <button className={styles.addBtn}>+ Add Contact</button>
            </div>

            <Outlet />
        </div>
    );
};
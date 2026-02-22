import React from 'react';
import styles from './notifications.module.css'
import {useNotifications} from "../context/NotificationsContext.jsx";
import Modal from "../../../../shared/modals/Modal/Modal.jsx";

const NotificationsModal = () => {
    const { isOpen, toggle, notifications, markAllRead, markRead } =
        useNotifications();

    return (
        <Modal isOpen={isOpen} onClose={toggle}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <h2>Notifications</h2>
                    <button className={styles.markAll} onClick={markAllRead}>
                        Mark all as read
                    </button>
                </div>

                <div className={styles.list}>
                    {notifications.map(item => (
                        <div
                            key={item.id}
                            className={`${styles.item} ${!item.read ? styles.unread : ''}`}
                        >
                            <p>{item.text}</p>

                            {!item.read && (
                                <button
                                    className={styles.readButton}
                                    onClick={() => markRead(item.id)}
                                >
                                    Read
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </Modal>
    );
};

export default NotificationsModal;
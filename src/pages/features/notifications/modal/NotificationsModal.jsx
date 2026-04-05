import React, {useEffect, useRef} from 'react';
import styles from './notifications.module.css'
import {useNotifications} from "../context/NotificationsContext.jsx";
import {motion, AnimatePresence} from "framer-motion";

const NotificationsModal = () => {
    const { isOpen, toggle, notifications, markAllRead, markRead, setIsOpen } =
        useNotifications();
    const ref = useRef(null);
    useEffect(() => {
        const handleClickOutside = (e) => {
            if(ref.current && !ref.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => { document.removeEventListener("mousedown", handleClickOutside); };
    }, []);
    if (!isOpen) return null;
    return (
        <div ref={ref} className={styles.dropdown}>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        ref={ref}
                        className={styles.dropdown}
                        initial={{ opacity: 0, y: -10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                        <div className={styles.header}>
                            <h4>Notifications</h4>
                            <button onClick={markAllRead}>Mark all</button>
                        </div>

                        <div className={styles.list}>
                            {notifications.map(item => (
                                <div
                                    key={item.id}
                                    className={`${styles.item} ${!item.read ? styles.unread : ''}`}
                                >
                                    <p>{item.text}</p>

                                    {!item.read && (
                                        <button onClick={() => markRead(item.id)}>
                                            Read
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default NotificationsModal;
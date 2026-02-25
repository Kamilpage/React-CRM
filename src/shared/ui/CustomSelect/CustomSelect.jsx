import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./customSelect.module.css";
import arrow from "../../../assets/icons/ui/arrowDown.svg";

const CustomSelect = ({ value, onChange, options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [coords, setCoords] = useState(null);

    const triggerRef = useRef(null);
    const menuRef = useRef(null);

    /* Закрытие по клику вне */
    useEffect(() => {
        const handleClick = (e) => {
            if (
                triggerRef.current &&
                !triggerRef.current.contains(e.target) &&
                menuRef.current &&
                !menuRef.current.contains(e.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("click", handleClick); // важно: click, не mousedown
        return () => document.removeEventListener("click", handleClick);
    }, []);

    /* Позиция dropdown */
    const toggleOpen = () => {
        if (!isOpen && triggerRef.current) {
            const rect = triggerRef.current.getBoundingClientRect();
            setCoords({
                top: rect.bottom + 4,
                left: rect.left,
                width: rect.width,
            });
        }
        setIsOpen((prev) => !prev);
    };

    return (
        <>
            <div ref={triggerRef} className={styles.select}>
                <button type="button" className={styles.control} onClick={toggleOpen}>
                    <img src={value.avatar} alt="avatar" className={styles.avatar} />
                    <span>{value.name}</span>
                    <img src={arrow} alt="arrow" className={isOpen ? styles.arrowUp : ""} />
                </button>
            </div>

            {isOpen &&
                coords &&
                createPortal(
                    <ul
                        ref={menuRef}
                        className={styles.menu}
                        style={{
                            position: "absolute",
                            top: coords.top,
                            left: coords.left,
                            width: coords.width,
                            zIndex: 9999,
                        }}
                    >
                        {options.map((user) => (
                            <li
                                key={user.id}
                                className={styles.option}
                                onClick={() => {
                                    onChange(user);
                                    setIsOpen(false);
                                }}
                            >
                                <img src={user.avatar} alt={user.name} className={styles.avatar} />
                                <span>{user.name}</span>
                            </li>
                        ))}
                    </ul>,
                    document.body
                )}
        </>
    );
};

export default CustomSelect;

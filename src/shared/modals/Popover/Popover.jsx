import { createPortal } from "react-dom";
import styles from "./Popover.module.css";

export const Popover = ({ open, coords, children }) => {
    if (!open || !coords) return null;

    return createPortal(
        <div
            id="popover-content"
            className={styles.popover}
            style={{
                top: coords.top,
                left: coords.left,
            }}
        >
            {children}
        </div>,
        document.body
    );
};
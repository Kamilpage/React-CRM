import Modal from "../Modal/Modal.jsx";
import styles from "./alertModal.module.css";

const AlertModal = ({
                        isOpen,
                        title = "Notice",
                        message,
                        buttonText = "OK",
                        onClose,
                    }) => {
    if (!isOpen) return null;

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className={styles.alert}>
                <h3>{title}</h3>
                <p>{message}</p>

                <button onClick={onClose} className={styles.button}>
                    {buttonText}
                </button>
            </div>
        </Modal>
    );
};

export default AlertModal;

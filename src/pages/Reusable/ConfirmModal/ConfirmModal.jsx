import Modal from "../Modal/Modal.jsx";
import styles from "./confirmModal.module.css";

const ConfirmModal = ({
                          title,
                          description,
                          confirmText,
                          cancelText,
                          danger,
                          onConfirm,
                          onCancel,
                      }) => {
    return (
        <Modal isOpen onClose={onCancel}>
            <div className={styles.modal}>
                <h3>{title}</h3>
                <p>{description}</p>

                <div className={styles.actions}>
                    <button onClick={onCancel} className={styles.cancel}>
                        {cancelText}
                    </button>
                    <button
                        onClick={onConfirm}
                        className={danger ? styles.danger : styles.confirm}
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default ConfirmModal;

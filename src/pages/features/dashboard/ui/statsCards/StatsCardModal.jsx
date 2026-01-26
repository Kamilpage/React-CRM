import styles from './statsCards.module.css'
import Modal from "../../../../../shared/modals/Modal/Modal.jsx";

const StatsCardModal = ({ open, onClose, card, value }) => {
    if (!card) return null;

    return (
        <Modal isOpen={open} onClose={onClose}>
            <div className={styles.modal}>
                <h2>{card.title}</h2>
                <p className={styles.value}>{value}</p>
                <p className={styles.description}>{card.modalDescription}</p>
            </div>
        </Modal>
    );
};

export default StatsCardModal;
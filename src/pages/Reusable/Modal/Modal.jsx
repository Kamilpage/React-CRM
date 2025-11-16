import React, {useEffect} from 'react';
import styles from './modal.module.css';
import {createPortal} from 'react-dom';

const Modal = ({isOpen, onClose, children}) => {
    if (!isOpen) return null;

    useEffect(() => {
        function handleKeyDown(e) {
            if (e.key === 'Escape') onClose();
        }

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return createPortal(
        <div className={styles.layout} onClick={onClose}>
            <div className={styles.modal__content} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>,
        document.getElementById('modal-root')
    );
};

export default Modal;

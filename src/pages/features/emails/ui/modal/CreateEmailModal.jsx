import { useState } from "react";
import {useEmails} from "../../contex/EmailsContext.jsx";
import Modal from "../../../../../shared/modals/Modal/Modal.jsx";
import styles from '../emailsTopbar/emailsTopbar.module.css'


const CreateEmailModal = ({ isOpen, onClose }) => {
    const { addEmail } = useEmails();

    const [form, setForm] = useState({
        subject: "",
        preview: "",
    });

    const handleSubmit = () => {
        if (!form.subject.trim()) return;

        addEmail({
            subject: form.subject,
            preview: form.preview,
            sender: "You",
            avatar: "https://i.pravatar.cc/40",
        });

        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className={styles.content}>
                <h2>Create Email</h2>

                <input
                    className={styles.input}
                    placeholder="Subject"
                    value={form.subject}
                    onChange={(e) =>
                        setForm({ ...form, subject: e.target.value })
                    }
                />

                <textarea
                    className={styles.textarea}
                    placeholder="Message"
                    value={form.preview}
                    onChange={(e) =>
                        setForm({ ...form, preview: e.target.value })
                    }
                />

                <div className={styles.actions}>
                    <button onClick={onClose}>Cancel</button>
                    <button onClick={handleSubmit}>Send</button>
                </div>
            </div>
        </Modal>
    );
};

export default CreateEmailModal;
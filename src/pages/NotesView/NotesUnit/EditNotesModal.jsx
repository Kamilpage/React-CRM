import React, { useEffect, useState } from 'react';
import Modal from "../../Reusable/Modal/Modal.jsx";
import ConfirmModal from "../../Reusable/ConfirmModal/ConfirmModal.jsx";
import styles from './editNote.module.css';
import { TAGS_MAP } from "../../FixedComponents/TasksTopbar/AddTaskModal/tags.js";

const EditNotesModal = ({ isOpen, note, onClose, onSave }) => {
    const [form, setForm] = useState({
        title: '',
        content: '',
        tags: [],
    });

    const [isConfirmOpen, setIsConfirmOpen] = useState(false);

    /* 🔹 КЛЮЧЕВОЙ МОМЕНТ */
    useEffect(() => {
        if (note && isOpen) {
            setForm({
                title: note.title,
                content: note.content,
                tags: note.tags,
            });
        }
    }, [note, isOpen]);

    const isDirty =
        form.title !== note.title ||
        form.content !== note.content ||
        JSON.stringify(form.tags) !== JSON.stringify(note.tags);

    const updateField = (field, value) => {
        setForm(prev => ({ ...prev, [field]: value }));
    };

    const toggleTag = (tagId) => {
        setForm(prev => ({
            ...prev,
            tags: prev.tags.includes(tagId)
                ? prev.tags.filter(t => t !== tagId)
                : [...prev.tags, tagId],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        onSave({
            ...note,
            title: form.title,
            content: form.content,
            tags: form.tags,
            updatedAt: new Date().toISOString(),
        });

        onClose();
    };

    const handleClose = () => {
        if (isDirty) {
            setIsConfirmOpen(true);
            return;
        }
        onClose();
    };

    return (
        <>
            <Modal isOpen={isOpen} onClose={handleClose}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <h3>Edit Note</h3>

                    <input
                        value={form.title}
                        onChange={e => updateField('title', e.target.value)}
                    />

                    <textarea
                        value={form.content}
                        onChange={e => updateField('content', e.target.value)}
                    />

                    <div className={styles.tags}>
                        {Object.entries(TAGS_MAP).map(([id, tag]) => (
                            <button
                                key={id}
                                type="button"
                                onClick={() => toggleTag(id)}
                                className={`${styles.tag} ${
                                    form.tags.includes(id) ? styles.active : ''
                                }`}
                                style={{
                                    color: tag.color,
                                    backgroundColor: tag.background,
                                }}
                            >
                                {tag.label}
                            </button>
                        ))}
                    </div>

                    <div className={styles.actions}>
                        <button type="submit">Save</button>
                        <button type="button" onClick={handleClose}>
                            Cancel
                        </button>
                    </div>
                </form>
            </Modal>

            {isConfirmOpen && (
                <ConfirmModal
                    title="Discard changes?"
                    description="Unsaved changes will be lost."
                    confirmText="Discard"
                    cancelText="Continue editing"
                    danger
                    onConfirm={() => {
                        setIsConfirmOpen(false);
                        onClose();
                    }}
                    onCancel={() => setIsConfirmOpen(false)}
                />
            )}
        </>
    );
};

export default EditNotesModal;

import React, { useState } from 'react';
import Modal from "../../../../../../shared/modals/Modal/Modal.jsx";
import ConfirmModal from "../../../../../../shared/modals/ConfirmModal/ConfirmModal.jsx";
import styles from './addNote.module.css';
import {TAGS_MAP} from "../../../../../../shared/model/tags.model.js";
import {useUser} from "../../../../../../app/context/UserContext.jsx";
import {createNote} from "../../../model/note.model.js";
import {useNotes} from "../../../contex/NotesContex.jsx";

const AddNotesModal = ({ isOpen, onClose }) => {
    const { addNote } = useNotes();

    const [form, setForm] = useState({
        title: '',
        content: '',
        tags: [],
    });
    const { user } = useUser();

    const [errors, setErrors] = useState({});
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);

    const isDirty =
        Boolean(form.title.trim()) ||
        Boolean(form.content.trim()) ||
        form.tags.length > 0;

    const updateField = (field, value) => {
        setForm(prev => ({ ...prev, [field]: value }));
        setErrors(prev => ({ ...prev, [field]: false }));
    };

    const toggleTag = (tagId) => {
        setForm(prev => ({
            ...prev,
            tags: prev.tags.includes(tagId)
                ? prev.tags.filter(t => t !== tagId)
                : [...prev.tags, tagId],
        }));
    };

    const validate = () => {
        const next = {};
        if (!form.title.trim()) next.title = true;
        setErrors(next);
        return Object.keys(next).length === 0;
    };

    const resetForm = () => {
        setForm({
            title: '',
            content: '',
            tags: [],
        });
        setErrors({});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        addNote(
            createNote({
                title: form.title,
                content: form.content,
                tags: form.tags,
                author: user,
            })
        );

        resetForm();
        onClose();
    };

    const handleClose = () => {
        if (isDirty) {
            setIsConfirmOpen(true);
            return;
        }

        resetForm();
        onClose();
    };

    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={isConfirmOpen ? undefined : handleClose}
            >
                <form onSubmit={handleSubmit} className={styles.form}>
                    <h3>Add Note</h3>

                    <input
                        placeholder="Title"
                        value={form.title}
                        onChange={e => updateField('title', e.target.value)}
                    />
                    {errors.title && (
                        <span className={styles.error}>Title is required</span>
                    )}

                    <textarea
                        placeholder="Write your note..."
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
                        <button type="submit">Create</button>
                        <button type="button" onClick={handleClose}>
                            Cancel
                        </button>
                    </div>
                </form>
            </Modal>

            {isConfirmOpen && (
                <ConfirmModal
                    title="Discard note?"
                    description="All unsaved changes will be lost."
                    confirmText="Discard"
                    cancelText="Keep editing"
                    danger
                    onConfirm={() => {
                        resetForm();
                        setIsConfirmOpen(false);
                        onClose();
                    }}
                    onCancel={() => setIsConfirmOpen(false)}
                />
            )}
        </>
    );
};

export default AddNotesModal;

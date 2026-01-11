import React, { useState, useEffect } from 'react';
import Modal from "../../../Reusable/Modal/Modal.jsx";
import {useKanban} from "../../../Display/Kanban/Kanban/KanbanContext.jsx";
import styles from './addTask.module.css';
import {TAGS_MAP} from "./tags.js";
import ConfirmModal from "../../../Reusable/ConfirmModal/ConfirmModal.jsx";

const AddTaskModal = ({ isOpen, onClose, defaultStatus = 'planned'}) => {
    const { addTask } = useKanban();

    const [form, setForm] = useState({
        title: '',
        description: '',
        status: defaultStatus,
        tags: [],
    });

    const isDirty =
        form.title.trim() ||
        form.description.trim() ||
        form.tags.length > 0;

    useEffect(() => {
        if (isOpen) {
            setForm(prev => ({ ...prev, status: defaultStatus }));
        }
    }, [defaultStatus, isOpen]);

    const [errors, setErrors] = useState({});

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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        addTask(form.status, {
            id: Date.now(),
            title: form.title,
            description: form.description,
            tags: form.tags,
            comments: [],
            attachments: [],
        });

        onClose();
        resetForm()
    };

    const resetForm = () => {
        setForm({
            title: '',
            description: '',
            status: defaultStatus,
            tags: [],
        });
        setErrors({});
    };
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);

    const handleClose = () => {
        if (isDirty) {
            setIsConfirmOpen(true);
            return;
        }

        resetForm();
        onClose();
    };
    const handleConfirmDiscard = () => {
        resetForm();
        setIsConfirmOpen(false);
        onClose();
    };

    const handleCancelDiscard = () => {
        setIsConfirmOpen(false);
    };




    return (<>
        <Modal isOpen={isOpen} onClose={handleClose}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <h3>Add Task</h3>

                <input
                    placeholder="Title"
                    value={form.title}
                    onChange={e => updateField('title', e.target.value)}
                />
                {errors.title && <span className={styles.error}>Title is required</span>}

                <textarea
                    placeholder="Description"
                    value={form.description}
                    onChange={e => updateField('description', e.target.value)}
                />

                <select
                    value={form.status}
                    onChange={e => updateField('status', e.target.value)}
                >
                    <option value="planned">Planned</option>
                    <option value="upcoming">Upcoming</option>
                    <option value="completed">Completed</option>
                </select>
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
                    <button type="button" onClick={handleClose}>Cancel</button>
                </div>
            </form>
        </Modal>
            {isConfirmOpen && (
                <ConfirmModal
                    title="Discard changes?"
                    description="All unsaved changes will be lost."
                    confirmText="Discard"
                    cancelText="Keep editing"
                    danger
                    onConfirm={handleConfirmDiscard}
                    onCancel={handleCancelDiscard}
                />
            )}
    </>
    );
};

export default AddTaskModal;

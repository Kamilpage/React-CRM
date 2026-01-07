import React, { useState } from 'react';
import Modal from "../../../Reusable/Modal/Modal.jsx";
import styles from './display.module.css'
import {useKanban} from "../Kanban/KanbanContext.jsx";

const DisplayModal = ({ task, columnId, isOpen, onClose }) => {

    const { addComment, addAttachment } = useKanban();
    const [commentText, setCommentText] = useState('');

    if (!task) return null;

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className={styles.display}>
                <h1>{task.title}</h1>
                <p>{task.description}</p>

                {/* COMMENTS */}
                <div className={styles.comments}>
                    <h4>Comments</h4>

                    {task.comments.length === 0 && (
                        <p className={styles.empty}>No comments yet</p>
                    )}

                    {task.comments.map(c => (
                        <div key={c.id} className={styles.comment}>
                            <strong>{c.author}</strong>
                            <p>{c.text}</p>
                            <span>
                                {new Date(c.createdAt).toLocaleString()}
                            </span>
                        </div>
                    ))}

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            if (!commentText.trim()) return;
                            addComment(columnId, task.id, commentText);
                            setCommentText('');
                        }}
                    >
                        <input
                            placeholder="Write a comment..."
                            value={commentText}
                            onChange={e => setCommentText(e.target.value)}
                        />
                    </form>
                </div>

                {/* ATTACHMENTS */}
                <div className={styles.attachments}>
                    <h4>Attachments</h4>

                    <input
                        type="file"
                        onChange={(e) => {
                            const file = e.target.files[0];
                            if (!file) return;
                            addAttachment(columnId, task.id, file);
                            e.target.value = '';
                        }}
                    />

                    {task.attachments.map(file => (
                        <div key={file.id} className={styles.attachment}>
                            📎 {file.name}
                            <span>
                                {(file.size / 1024).toFixed(1)} KB
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </Modal>
    );
};

export default DisplayModal;
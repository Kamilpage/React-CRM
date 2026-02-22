import Modal from "../../../../../../shared/modals/Modal/Modal.jsx";
import styles from './taskDetailsModal.module.css'
import {useTasks} from "../../../context/TasksContext.jsx";
import { useState, useRef, useEffect } from 'react';
import AlertModal from "../../../../../../shared/modals/AlertModal/AlertModal.jsx";

const TaskDetailsModal = ({ task, columnId, isOpen, onClose }) => {
    const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

    const ALLOWED_TYPES = [
        'application/pdf',
        'image/png',
        'image/jpeg',
        'image/jpg',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];
    const [alert, setAlert] = useState({
        isOpen: false,
        title: '',
        message: '',
    });
    const { addComment, addAttachment } = useTasks();
    const [commentText, setCommentText] = useState('');
    const commentsEndRef = useRef(null);
    const [isUploading, setIsUploading] = useState(false);
    const simulateUpload = (file) => {
        setIsUploading(true);

        setTimeout(() => {
            addAttachment(columnId, task.id, file);
            setIsUploading(false);
        }, 800); // 0.8 сек — ощущение сервера
    };
    useEffect(() => {
        if (!commentsEndRef.current) return;

        commentsEndRef.current.scrollTo({
            top: commentsEndRef.current.scrollHeight,
            behavior: 'smooth',
        });
    }, [task.comments.length]);

    if (!task) return null;

    return (
        <>
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className={styles.display}>
                <h1>{task.title}</h1>
                <p>{task.description}</p>
                <div className={styles.comments}>
                    <h4>Comments</h4>

                    <div className={styles.commentsList} ref={commentsEndRef}>
                        {task.comments.length === 0 && (
                            <p className={styles.empty}>No comments yet</p>
                        )}

                        {task.comments.map(c => (
                            <div key={c.id} className={styles.comment}>
                                <strong>{c.author}</strong>
                                <p>{c.text}</p>
                                <span>{new Date(c.createdAt).toLocaleString()}</span>
                            </div>
                        ))}
                    </div>

                    <form
                        className={styles.commentForm}
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

                <div className={styles.attachments}>
                    <h4>Attachments</h4>

                    <input
                        type="file"
                        onChange={(e) => {
                            const file = e.target.files[0];
                            if (!file) return;

                            // 1️⃣ Проверка количества
                            if (task.attachments.length >= 5) {
                                setAlert({
                                    isOpen: true,
                                    title: 'Attachment limit reached',
                                    message: 'You can attach up to 5 files per task.',
                                });
                                e.target.value = '';
                                return;
                            }

                            // 2️⃣ Проверка размера
                            if (file.size > MAX_FILE_SIZE) {
                                setAlert({
                                    isOpen: true,
                                    title: 'File is too large',
                                    message: 'Maximum allowed file size is 5 MB.',
                                });
                                e.target.value = '';
                                return;
                            }

                            // 3️⃣ Проверка типа
                            if (!ALLOWED_TYPES.includes(file.type)) {
                                setAlert({
                                    isOpen: true,
                                    title: 'Unsupported file type',
                                    message: 'Only PDF, JPG, PNG and DOCX files are allowed.',
                                });
                                e.target.value = '';
                                return;
                            }

                            // 4️⃣ Имитация загрузки
                            simulateUpload(file);
                            e.target.value = '';
                        }}
                    />

                    {isUploading && (
                        <p style={{ fontSize: 12, color: '#666', marginTop: 4 }}>
                            Uploading...
                        </p>
                    )}

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
            <AlertModal
                isOpen={alert.isOpen}
                title={alert.title}
                message={alert.message}
                buttonText="Got it"
                onClose={() =>
                    setAlert({ isOpen: false, title: '', message: '' })
                }
            />

        </>
    );
};

export default TaskDetailsModal;
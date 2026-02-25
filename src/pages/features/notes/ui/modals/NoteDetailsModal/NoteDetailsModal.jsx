import React, {useState} from 'react';
import Modal from '../../../../../../shared/modals/Modal/Modal.jsx';
import ConfirmModal from '../../../../../../shared/modals/ConfirmModal/ConfirmModal.jsx';
import {formatDate} from '../../../../../../utils/formatDate.js';
import styles from './noteDetailsModal.module.css';
import {useNotes} from "../../../contex/NotesContex.jsx";
import EditNotesModal from "../EditNoteModal/EditNotesModal.jsx";
import defaultUser from '../../../../../../assets/icons/user/defaultUser.svg'

const NoteDetailsModal = ({note, isOpen, onClose}) => {
    const {removeNote, updateNote} = useNotes();

    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);

    if (!note) return null;

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <div className={styles.container}>
                    {/* HEADER */}
                    <div className={styles.header}>
                        <h2>{note.title}</h2>

                        <div className={styles.actions}>
                            <button onClick={() => setIsEditOpen(true)}>Edit</button>
                            <button
                                className={styles.danger}
                                onClick={() => setIsConfirmOpen(true)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>

                    {/* TAGS */}
                    {note.tags.length > 0 && (
                        <div className={styles.tags}>
                            {note.tags.map(tag => (
                                <span
                                    key={tag}
                                    className={styles.tag}
                                >
                  {tag}
                </span>
                            ))}
                        </div>
                    )}

                    {/* CONTENT */}
                    <div className={styles.content}>
                        {note.content}
                    </div>

                    {/* FOOTER */}
                    <div className={styles.footer}>
                        <div className={styles.meta}>
                            <div className={styles.author}>
                                <img
                                    src={note.author?.avatar ?? defaultUser}
                                    alt={note.author?.name ?? 'Unknown'}
                                    className={styles.avatar}
                                />
                                <span>{note.author?.name ?? 'Unknown'}</span>
                            </div>
                            <span>{formatDate(note.updatedAt)}</span>
                        </div>

                        <button onClick={onClose}>Close</button>
                    </div>
                </div>
            </Modal>

            {/* EDIT */}
            {isEditOpen && (
                <EditNotesModal
                    isOpen={isEditOpen}
                    note={note}
                    onClose={() => setIsEditOpen(false)}
                    onSave={updateNote}
                />
            )}

            {/* DELETE CONFIRM */}
            {isConfirmOpen && (
                <ConfirmModal
                    title="Delete note?"
                    description="This note will be permanently deleted."
                    confirmText="Delete"
                    cancelText="Cancel"
                    danger
                    onConfirm={() => {
                        removeNote(note.id);
                        setIsConfirmOpen(false);
                        onClose();
                    }}
                    onCancel={() => setIsConfirmOpen(false)}
                />
            )}
        </>
    );
};

export default NoteDetailsModal;

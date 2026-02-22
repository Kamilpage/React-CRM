import React, {useState} from 'react';
import styles from './noteCard.module.css';
import {formatDate} from "../../../../../utils/formatDate.js";
import NoteDetailsModal from "../modals/NoteDetailsModal/NoteDetailsModal.jsx";
import defaultUser from '../../../../../assets/icons/user/defaultUser.svg'

const NoteCard = ({note}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className={styles.card} onClick={() => setIsOpen(true)}>
                <div className={styles.tags} >
                    {note.tags.map((tag, index) => (
                        <span
                            key={`${note.id}-${tag.title}-${index}`}
                            className={styles.tag}
                        >
                            {tag.title}
                        </span>
                    ))}

                </div>

                <h3 className={styles.title}>{note.title}</h3>
                <p className={styles.description}>{note.description}</p>

                <div className={styles.footer}>
                    <div className={styles.author}>
                        <img
                            src={note.author?.avatar ?? defaultUser}
                            alt={note.author?.name ?? 'Unknown'}
                            className={styles.avatar}
                        />
                        <span>{note.author?.name ?? 'Unknown'}</span>
                    </div>

                    <span className={styles.date}>
                        {formatDate(note.updatedAt)}
                    </span>
                </div>

            </div>
            <NoteDetailsModal
                note={note}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </>
    );
};

export default NoteCard;

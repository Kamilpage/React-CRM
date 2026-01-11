import React, {useState} from 'react';
import styles from './notesUnit.module.css';
import {formatDate} from "../../utils/formatDate.js";
import NotesDisplayModal from "../NotesDisplayModal/NotesDisplayModal.jsx";

const NotesUnit = ({note}) => {
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
                        <div className={styles.avatar}/>
                        <span>Author</span>
                    </div>
                    <span className={styles.date}>
                  {formatDate(note.updatedAt)}
                </span>
                </div>

            </div>
            <NotesDisplayModal
                note={note}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </>
    );
};

export default NotesUnit;

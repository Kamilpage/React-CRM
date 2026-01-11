import React from 'react';
import styles from "./notesDisplay.module.css";
import NotesUnit from "../NotesUnit/NotesUnit.jsx";
import {useNotes} from "../NotesTopbar/NotesContex.jsx";

const NotesDisplay = () => {
    const { notes } = useNotes();

    if (!notes.length) {
        return <div style={{ padding: 32 }}>No notes yet</div>;
    }

    return (
        <div className={styles.grid}>
            {notes.map(note => (
                <NotesUnit key={note.id} note={note} />
            ))}
        </div>
    );
};


export default NotesDisplay;
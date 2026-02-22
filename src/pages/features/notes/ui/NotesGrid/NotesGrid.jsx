import React from 'react';
import styles from "./notesGrid.module.css";
import NoteCard from "../NoteCard/NoteCard.jsx";
import {useNotes} from "../../contex/NotesContex.jsx";

const NotesGrid = () => {
    const { notes } = useNotes();

    if (!notes.length) {
        return <div style={{ display:'flex', justifyContent:'center', alignItems:'center', padding: '32px' }}>No notes yet</div>;
    }

    return (
        <div className={styles.grid}>
            {notes.map(note => (
                <NoteCard key={note.id} note={note} />
            ))}
        </div>
    );
};


export default NotesGrid;
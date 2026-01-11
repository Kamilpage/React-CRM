import React, {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState
} from 'react';

import { useSearch } from '../../FixedComponents/SearchBar/SearchContext.jsx';

const NotesContext = createContext(null);

const STORAGE_KEY = 'notes';

export const NotesProvider = ({ children }) => {
    const { query } = useSearch();

    /* 🔹 source of truth */
    const [notes, setNotes] = useState(() => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            return stored ? JSON.parse(stored) : [];
        } catch {
            return [];
        }
    });

    /* 🔹 persist raw notes */
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    }, [notes]);

    /* 🔹 derived state: search */
    const filteredNotes = useMemo(() => {
        if (!query.trim()) return notes;

        const q = query.toLowerCase();

        return notes.filter(note =>
            note.title.toLowerCase().includes(q) ||
            note.content.toLowerCase().includes(q)
        );
    }, [notes, query]);

    /* 🔹 actions */
    const addNote = (note) => {
        setNotes(prev => [note, ...prev]);
    };

    const removeNote = (id) => {
        setNotes(prev => prev.filter(note => note.id !== id));
    };

    const updateNote = (updated) => {
        setNotes(prev =>
            prev.map(note =>
                note.id === updated.id
                    ? { ...updated, updatedAt: new Date().toISOString() }
                    : note
            )
        );
    };

    return (
        <NotesContext.Provider
            value={{
                notes: filteredNotes, // 👈 UI получает уже отфильтрованные
                addNote,
                removeNote,
                updateNote,
            }}
        >
            {children}
        </NotesContext.Provider>
    );
};

export const useNotes = () => {
    const ctx = useContext(NotesContext);
    if (!ctx) {
        throw new Error('useNotes must be used within NotesProvider');
    }
    return ctx;
};

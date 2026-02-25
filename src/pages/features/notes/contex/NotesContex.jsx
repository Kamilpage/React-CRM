import React, {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";

import { useSearch } from "../../../../app/context/SearchContext.jsx";
import { useFilterSortSearch } from "../../../../shared/hooks/useFilterSortSearch";

const NotesContext = createContext(null);

const STORAGE_KEY = "notes";

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

    /* 🔹 shared search / filter / sort logic */
    const {
        items: processedNotes,
        sortBy,
        setSortBy,
        filters,
        setFilters
    } = useFilterSortSearch(notes, query, {
        searchableFields: ["title", "content"],

        filterPredicate: (note, filters) =>
            note.tags.some(tag => filters.includes(tag.title)),

        sorters: {
            updated: (a, b) =>
                new Date(b.updatedAt) - new Date(a.updatedAt),

            created: (a, b) =>
                new Date(b.createdAt) - new Date(a.createdAt),

            title: (a, b) =>
                a.title.localeCompare(b.title)
        }
    });

    /* 🔹 CRUD */
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
                notes: processedNotes,
                addNote,
                removeNote,
                updateNote,
                sortBy,
                setSortBy,
                filters,
                setFilters
            }}
        >
            {children}
        </NotesContext.Provider>
    );
};

export const useNotes = () => {
    const ctx = useContext(NotesContext);
    if (!ctx) {
        throw new Error("useNotes must be used within NotesProvider");
    }
    return ctx;
};
